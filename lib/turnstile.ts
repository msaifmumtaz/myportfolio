type TurnstileResult = {
  success?: unknown;
  action?: unknown;
  hostname?: unknown;
};

export async function verifyContactTurnstile(token: unknown): Promise<boolean> {
  const secret = process.env.TURNSTILE_SECRET;
  const expectedHostnames = new Set(
    (process.env.TURNSTILE_HOSTNAMES ?? "")
      .split(",")
      .map(hostname => hostname.trim())
      .filter(Boolean),
  );

  if (
    typeof token !== "string" ||
    token.trim().length === 0 ||
    token.length > 2048 ||
    !secret ||
    expectedHostnames.size === 0 ||
    (process.env.NODE_ENV === "production" &&
      (expectedHostnames.has("localhost") || expectedHostnames.has("127.0.0.1")))
  ) {
    return false;
  }

  try {
    const response = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({ secret, response: token }),
      signal: AbortSignal.timeout(10_000),
      cache: "no-store",
    });

    if (!response.ok) return false;

    const result: TurnstileResult | null = await response.json();
    return result?.success === true &&
      result.action === "contact" &&
      typeof result.hostname === "string" &&
      expectedHostnames.has(result.hostname);
  } catch {
    return false;
  }
}
