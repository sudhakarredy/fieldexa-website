# FIELDexa Website Scaffold

This folder contains the implementation scaffold for the public FIELDexa marketing website.

## Stack
- Vite
- React
- TypeScript
- React Router

## Implemented Scaffold Scope
- Multi-page routes for Home, Solutions, Platform, Impact, Case Studies, About, and Contact
- Legal page placeholders for Privacy, Terms, Cookie Policy, and DPA
- Brand token based styling aligned to FIELDexa guidelines
- Header, footer, and CTA structure for marketing conversion flow
- Demo form connected to /api/demo endpoint (Cloudflare Pages Function)

## Run Locally
1. Install dependencies:
   npm install
2. Start local development server:
   npm run dev
3. Build for production:
   npm run build

## Public Content Safety Requirements
- Use only first-party or properly licensed assets.
- Publish only claims that are mapped in docs/website/CLAIMS_MATRIX.md.
- Keep In Rollout messaging clearly labeled as not fully live.
- Replace legal placeholders with leadership-approved final legal text before launch.

## Contact Form Integration
The Contact page submits requests to an API endpoint. By default this is /api/demo.

Backend handler location:
- functions/api/demo.ts

Mail provider used:
- Resend API

Required Cloudflare environment variables:
- RESEND_API_KEY
- CONTACT_TO_EMAIL
- CONTACT_FROM_EMAIL (optional, default: noreply@fieldexa.com)

Optional frontend environment variable:
- VITE_DEMO_FORM_ENDPOINT (default: /api/demo)

Environment templates:
- .dev.vars.example for Cloudflare Pages function variables
- .env.example for optional frontend variable

## Key Paths
- src/App.tsx: Route map and page registry
- src/components/SiteLayout.tsx: Global navigation and footer
- src/pages: Page scaffolds and legal placeholders
- src/content.ts: Shared navigation, pillar, and rollout content
- public/brand: Approved logo assets used in scaffold
- functions/api/demo.ts: Contact form email delivery endpoint
