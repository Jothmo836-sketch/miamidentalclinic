# Miami Dental Clinic

## Run locally

Requires Node.js 20.19+ or 22.12+.

```sh
npm install
npm run dev
```

## Build and deploy

```sh
npm run build
```

The deployable static site is written to `dist/`. It can be hosted by any static web host that supports SPA fallback routing. The included Netlify and Vercel configuration files set this up for those platforms.

Set `VITE_SITE_URL` to the site's public origin when building for a different domain, for example `https://www.example.com`. The same value is used for canonical and social metadata, structured data, and the generated sitemap. It defaults to `https://miamidentalclinic.com`.
