import { createHmac, randomBytes, timingSafeEqual } from "node:crypto";
import { NextRequest, NextResponse } from "next/server";

const cookieName = "swerski-session";
const lifetime = 60 * 60 * 24 * 7;
const attempts = new Map<string, { count: number; until: number }>();
const signature = (value: string, secret: string) => createHmac("sha256", secret).update(value).digest("hex");
function equal(a: string, b: string) {
  const left = Buffer.from(a);
  const right = Buffer.from(b);
  return left.length === right.length && timingSafeEqual(left, right);
}
function gate(message = "", status = 200) {
  return new NextResponse(`<!doctype html><html lang="en"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex,nofollow"><title>Enter the Realm</title><body style="margin:0;background:#101512;color:#e6dcc7;font-family:Georgia,serif;min-height:100vh;display:grid;place-items:center"><main style="width:min(380px,85vw);padding:2rem"><p style="color:#b79b68;letter-spacing:.2em">BILL SWERSKI 907</p><h1>Enter the Realm</h1><p>Private league access.</p><form method="post" action="/league-login"><label for="password">League password</label><input id="password" name="password" type="password" autocomplete="current-password" required maxlength="256" style="display:block;box-sizing:border-box;width:100%;padding:14px;margin:12px 0;background:#202820;color:#fff;border:1px solid #b79b68"><button style="padding:14px 24px;background:#b79b68;border:0;color:#101512;cursor:pointer">Enter</button></form><p role="alert">${message}</p></main></body></html>`, { status, headers: { "Content-Type": "text/html; charset=utf-8", "Cache-Control": "private, no-store", "X-Robots-Tag": "noindex, nofollow", "X-Frame-Options": "DENY", "Content-Security-Policy": "default-src 'none'; style-src 'unsafe-inline'; form-action 'self'; frame-ancestors 'none'; base-uri 'none'" } });
}

export async function proxy(request: NextRequest) {
  const secret = process.env.LEAGUE_PASSWORD;
  if (!secret || secret.length < 16) return gate("Private access is being configured. Please contact the league host.", 503);
  if (request.nextUrl.pathname === "/league-login" && request.method === "POST") {
    if (request.headers.get("origin") !== request.nextUrl.origin) return gate("Please submit from this site.", 403);
    const ip = request.headers.get("x-forwarded-for")?.split(",")[0] || "unknown";
    const now = Date.now();
    for (const [key, entry] of attempts) if (entry.until < now) attempts.delete(key);
    const entry = attempts.get(ip) || { count: 0, until: now + 15 * 60 * 1000 };
    if (entry.count >= 10) return gate("Too many attempts. Try again in 15 minutes.", 429);
    entry.count += 1;
    attempts.set(ip, entry);
    const body = await request.text();
    if (body.length > 2048) return gate("Invalid request.", 400);
    const supplied = new URLSearchParams(body).get("password") || "";
    if (!equal(signature(supplied, secret), signature(secret, secret))) return gate("Incorrect league password.", 401);
    attempts.delete(ip);
    const value = `${Math.floor(now / 1000) + lifetime}.${randomBytes(16).toString("hex")}`;
    const response = NextResponse.redirect(new URL("/", request.url), 303);
    response.cookies.set(cookieName, `${value}.${signature(value, secret)}`, { httpOnly: true, secure: request.nextUrl.protocol === "https:", sameSite: "lax", path: "/", maxAge: lifetime });
    response.headers.set("Cache-Control", "private, no-store");
    return response;
  }
  const token = request.cookies.get(cookieName)?.value || "";
  const [expires, nonce, mac] = token.split(".");
  if (!expires || !nonce || !mac || Number(expires) <= Date.now() / 1000 || !equal(mac, signature(`${expires}.${nonce}`, secret))) return gate();
  const response = NextResponse.next();
  response.headers.set("Cache-Control", "private, no-store");
  response.headers.set("X-Robots-Tag", "noindex, nofollow");
  return response;
}

export const config = { matcher: ["/:path*"] };
