import assert from "node:assert/strict";
import { afterEach, beforeEach, mock, test } from "node:test";
import { verifyContactTurnstile } from "../lib/turnstile.ts";

const envKeys = ["TURNSTILE_SECRET", "TURNSTILE_HOSTNAMES", "NODE_ENV"];
const originalEnv = Object.fromEntries(envKeys.map(key => [key, process.env[key]]));
const validResult = { success: true, action: "contact", hostname: "saifcodes.com" };

beforeEach(() => {
  process.env.TURNSTILE_SECRET = "test-secret";
  process.env.TURNSTILE_HOSTNAMES = "saifcodes.com,www.saifcodes.com";
  process.env.NODE_ENV = "test";
});

afterEach(() => {
  mock.restoreAll();
  for (const key of envKeys) {
    if (originalEnv[key] === undefined) delete process.env[key];
    else process.env[key] = originalEnv[key];
  }
});

for (const token of [undefined, null, 123, {}, "", " ", "x".repeat(2049)]) {
  test(`rejects invalid token (${typeof token}, length ${typeof token === "string" ? token.length : "n/a"}) before contacting Cloudflare`, async () => {
    const fetch = mock.method(globalThis, "fetch", () => { throw new Error("Unexpected fetch"); });
    assert.equal(await verifyContactTurnstile(token), false);
    assert.equal(fetch.mock.callCount(), 0);
  });
}

for (const key of ["TURNSTILE_SECRET", "TURNSTILE_HOSTNAMES"]) {
  test(`fails closed when ${key} is missing`, async () => {
    delete process.env[key];
    const fetch = mock.method(globalThis, "fetch", () => { throw new Error("Unexpected fetch"); });
    assert.equal(await verifyContactTurnstile("fresh-token"), false);
    assert.equal(fetch.mock.callCount(), 0);
  });
}

test("sends the token to Siteverify and requires a matching successful result", async () => {
  const fetch = mock.method(globalThis, "fetch", async (url, options) => {
    assert.equal(url, "https://challenges.cloudflare.com/turnstile/v0/siteverify");
    assert.equal(options.method, "POST");
    assert.equal(options.headers["Content-Type"], "application/x-www-form-urlencoded");
    assert.equal(options.body.get("secret"), "test-secret");
    assert.equal(options.body.get("response"), "fresh-token");
    assert.equal(options.cache, "no-store");
    assert.ok(options.signal instanceof AbortSignal);
    return Response.json(validResult);
  });
  assert.equal(await verifyContactTurnstile("fresh-token"), true);
  assert.equal(fetch.mock.callCount(), 1);
});

for (const result of [
  { ...validResult, success: false },
  { ...validResult, success: "true" },
  { ...validResult, action: "signup" },
  { ...validResult, action: undefined },
  { ...validResult, hostname: "attacker.example" },
  { ...validResult, hostname: "saifcodes.com.attacker.example" },
  { ...validResult, hostname: undefined },
  null,
]) {
  test(`rejects unsuccessful or mismatched Siteverify response ${JSON.stringify(result)}`, async () => {
    mock.method(globalThis, "fetch", async () => Response.json(result));
    assert.equal(await verifyContactTurnstile("fresh-token"), false);
  });
}

test("validates every attempt and rejects a spent token", async () => {
  let redeemed = false;
  const fetch = mock.method(globalThis, "fetch", async () => {
    const result = redeemed ? { success: false, "error-codes": ["timeout-or-duplicate"] } : validResult;
    redeemed = true;
    return Response.json(result);
  });
  assert.equal(await verifyContactTurnstile("single-use-token"), true);
  assert.equal(await verifyContactTurnstile("single-use-token"), false);
  assert.equal(fetch.mock.callCount(), 2);
});

test("fails closed on a network failure or timeout", async () => {
  mock.method(globalThis, "fetch", async () => { throw new DOMException("Timed out", "TimeoutError"); });
  assert.equal(await verifyContactTurnstile("fresh-token"), false);
});

test("fails closed on an HTTP error even if its body claims success", async () => {
  mock.method(globalThis, "fetch", async () => Response.json(validResult, { status: 500 }));
  assert.equal(await verifyContactTurnstile("fresh-token"), false);
});

test("fails closed on malformed JSON", async () => {
  mock.method(globalThis, "fetch", async () => new Response("not JSON"));
  assert.equal(await verifyContactTurnstile("fresh-token"), false);
});

test("supports trimmed development hostnames", async () => {
  process.env.TURNSTILE_HOSTNAMES = " localhost, 127.0.0.1, ";
  mock.method(globalThis, "fetch", async () => Response.json({ ...validResult, hostname: "localhost" }));
  assert.equal(await verifyContactTurnstile("fresh-token"), true);
});

for (const hostname of ["localhost", "127.0.0.1"]) {
  test(`refuses a production allowlist containing ${hostname}`, async () => {
    process.env.NODE_ENV = "production";
    process.env.TURNSTILE_HOSTNAMES = `saifcodes.com,${hostname}`;
    const fetch = mock.method(globalThis, "fetch", () => { throw new Error("Unexpected fetch"); });
    assert.equal(await verifyContactTurnstile("fresh-token"), false);
    assert.equal(fetch.mock.callCount(), 0);
  });
}
