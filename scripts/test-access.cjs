/* eslint-disable @typescript-eslint/no-require-imports -- CommonJS harness compiles the TypeScript proxy in memory. */
const assert = require('node:assert/strict');
const fs = require('node:fs');
const Module = require('node:module');
const path = require('node:path');
const ts = require('typescript');
const { NextRequest } = require('next/server');
const compiled = ts.transpileModule(fs.readFileSync('proxy.ts', 'utf8'), { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 } }).outputText;
const loaded = new Module(path.resolve('proxy.ts'), module);
loaded.filename = path.resolve('proxy.ts');
loaded.paths = module.paths;
loaded._compile(compiled, loaded.filename);
const { proxy } = loaded.exports;
const request = (url, options) => new NextRequest(`https://league.example${url}`, options);
(async () => {
  delete process.env.LEAGUE_PASSWORD;
  assert.equal((await proxy(request('/'))).status, 503);
  process.env.LEAGUE_PASSWORD = 'test-only-long-password';
  for (const url of ['/', '/houses/galvin', '/artifacts/council-easter-egg.jpg', '/_next/image?url=/houses/galvin/crest.webp']) {
    assert.match(await (await proxy(request(url))).text(), /Enter the Realm/);
  }
  const login = (password, origin = 'https://league.example') => proxy(request('/league-login', { method: 'POST', headers: { origin }, body: new URLSearchParams({ password }).toString() }));
  assert.equal((await login('wrong')).status, 401);
  assert.equal((await login(process.env.LEAGUE_PASSWORD, 'https://other.example')).status, 403);
  const response = await login(process.env.LEAGUE_PASSWORD);
  assert.equal(response.status, 303);
  const cookie = response.headers.get('set-cookie');
  assert.match(cookie, /HttpOnly/i);
  assert.match(cookie, /Secure/i);
  const headers = { cookie: cookie.split(';')[0] };
  assert.equal((await proxy(request('/houses/galvin', { headers }))).headers.get('x-middleware-next'), '1');
  assert.equal((await proxy(request('/', { headers: { cookie: headers.cookie + 'tampered' } }))).headers.get('x-middleware-next'), null);
  process.env.LEAGUE_PASSWORD = 'rotated-test-only-password';
  assert.equal((await proxy(request('/', { headers }))).headers.get('x-middleware-next'), null);
  for (let index = 0; index < 10; index++) await login('wrong');
  assert.equal((await login('wrong')).status, 429);
  console.log('PASS: fail closed, private routes/assets, bad password, CSRF, signed session, tampering, rotation, throttling.');
})().catch((error) => { console.error(error); process.exitCode = 1; });
