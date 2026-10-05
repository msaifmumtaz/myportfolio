This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Contact form Turnstile setup

The contact form uses the existing widget with site key `0x4AAAAAAFOI8ZImLLMXMGpm` and action `contact`. `/api/contact` checks the token with Cloudflare Siteverify before sending the existing Resend email. Verification must return `success: true`, action `contact`, and an exact hostname from `TURNSTILE_HOSTNAMES`.

Add the widget's secret directly to the ignored `.env.local` file and your hosting provider's secret environment variables as `TURNSTILE_SECRET`. Keep it server-only; never use a `NEXT_PUBLIC_` prefix for the secret. Set the non-secret `TURNSTILE_HOSTNAMES` for each environment:

```dotenv
# Local development (.env.local)
TURNSTILE_HOSTNAMES=localhost,127.0.0.1

# Production (hosting environment)
TURNSTILE_HOSTNAMES=saifcodes.com,www.saifcodes.com
```

Use only the production hostnames that serve the form, and confirm those hostnames are allowed on the existing widget in Cloudflare. Real-widget local testing also requires `localhost` / `127.0.0.1` to be allowed there. Production verification refuses an allowlist containing either local hostname. Missing configuration, failed verification, or a Cloudflare outage blocks email sending.

`NEXT_PUBLIC_TURNSTILE_SITE_KEY` can override the public site key for a separate testing environment. The default is the existing widget above. Restart the local server after environment changes and redeploy after hosting configuration changes.

Run `npm test` with Node.js 22.18+ to check the verification policy. After configuring the real secret, submit through the contact form once, then replay that same `/api/contact` request: the first should succeed and the replay should return `403`. Tokens are single-use; the form resets its own widget after every submission attempt. Until that live check passes, real-widget validation is pending. See [Cloudflare's existing-widget flow](https://developers.cloudflare.com/turnstile/spin/prompt.md) and [Siteverify documentation](https://developers.cloudflare.com/turnstile/get-started/server-side-validation/).

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
