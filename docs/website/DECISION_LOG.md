# Decision Log

| Date | Decision | Owner | Rationale | Status |
|---|---|---|---|---|
| 2026-04-26 | Use dedicated GitHub repository for website | Leadership | Keeps marketing release cycle independent from platform codebase | Approved |
| 2026-04-26 | Host on Cloudflare Pages | Leadership | Fast global edge delivery, preview links per pull request | Approved |
| 2026-04-26 | Canonical domain is fieldexa.com with www redirect | Leadership | Cleaner brand URL and SEO consistency | Approved |
| 2026-04-26 | Primary CTA is Book a Demo to single inbox | Leadership | Fastest launch path for lead capture | Approved |
| 2026-04-26 | Use leaf plus wordmark as default logo | Leadership | Matches current brand preference and readability | Approved |
| 2026-04-26 | Show AI and SMS items as In Rollout | Leadership | Reflects approved direction without overstating production status | Approved |
| 2026-04-26 | No third-party copyrighted assets without explicit rights | Leadership | Public legal safety requirement | Approved |
| 2026-04-26 | Public website repository is `sudhakarredy/fieldexa-website` | Web Team | Dedicated repo now hosts the public site and launch documentation with isolated release history | Implemented |
| 2026-04-26 | Cloudflare Pages deploys production from `main` at repo root | Web Team | Root-level build and functions entrypoints were added so Pages can build and deploy from the repository root | Implemented |
| 2026-04-26 | Use Resend-backed Pages Function for public demo intake | Web Team | End-to-end form delivery is now validated from the production site to the sales inbox with Cloudflare-managed environment variables | Implemented |
