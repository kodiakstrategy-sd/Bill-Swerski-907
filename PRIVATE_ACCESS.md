# League access

Set `LEAGUE_PASSWORD` to a random passphrase of at least 16 characters in Vercel's Preview environment (and Production before promoting). Redeploy after configuring it. Never use a NEXT_PUBLIC variable or commit the value. Missing/short passwords deny all access, including public artwork and image optimization routes.

Each browser receives an independent, signed, HttpOnly, SameSite=Lax cookie lasting seven days (Secure over HTTPS). Multiple members can connect concurrently. Changing the password invalidates all sessions. Share the password privately, separately from the review URL.

Login throttling is best-effort per server instance, not a distributed security boundary. Keep Vercel protection enabled until the gate is configured and tested; for broad access add a Vercel rate-limit rule for POST /league-login. Existing deployments and production remain under their previous access settings until separately protected or redeployed. This cannot retract previously public assets.

The Oracle uses local preset replies, never sends questions to an API, and retains only the most recent 20 messages in component memory. It does not provide factual answers or store messages persistently.
