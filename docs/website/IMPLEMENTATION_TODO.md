# Implementation TODO Tracker

## Purpose
Track all remaining implementation tasks from current scaffold to production launch without missing dependencies.

## Current Snapshot (2026-04-27)
- [x] Website scaffold created with route-based page structure
- [x] Core pages and legal placeholders added
- [x] Brand token CSS baseline added
- [x] Contact form connected to /api/demo endpoint
- [x] Cloudflare Pages function created for inbox delivery via Resend
- [x] Build passes locally (`npm run build`)
- [x] Dedicated GitHub repository created and pushed: `https://github.com/sudhakarredy/fieldexa-website`
- [x] Initial Cloudflare Pages build succeeded from `main`
- [x] Custom domain and Cloudflare Pages production delivery completed for Phase A
- [x] Production environment variables configured in Cloudflare Pages
- [x] Demo form submission verified end-to-end to target inbox
- [x] Legal page placeholders replaced with draft website policy content for review
- [x] Core marketing pages moved from scaffold copy to structured draft launch copy
- [x] Phase B review package approved by leadership and legal
- [x] Phase C compliance and public safety checks completed

## Phase A: Repository and Delivery Setup
- [x] Create dedicated public website GitHub repository
- [x] Push current `website/` and `docs/website/` implementation
- [x] Configure protected `main` branch
- [x] Add PR template with claim and copyright checks (✅ Created: `.github/pull_request_template.md`)
- [x] Configure required status checks (build and lint at minimum) (✅ Created: `.github/workflows/build.yml`)
- [x] Connect repo to Cloudflare Pages
- [x] Configure preview deployments for pull requests
- [x] Configure staging branch deployment (recommended: `staging`)
- [x] Configure production deployment from `main`
- [x] Attach `fieldexa.com` custom domain in Cloudflare Pages
- [x] Configure `www.fieldexa.com` redirect to apex domain
- [x] Set Cloudflare environment variables for production:
  - [x] `RESEND_API_KEY`
  - [x] `CONTACT_TO_EMAIL`
  - [x] `CONTACT_FROM_EMAIL`
- [x] Set same variables for preview/staging where needed
- [x] Validate end-to-end form delivery in preview and production

## Phase B: Content and Asset Completion
## Phase B: Draft Content and Governance ✅ COMPLETE
- [x] Draft legal page copy for Privacy, Terms, Cookie Policy, DPA
- [x] ✅ **Approval Gate**: Secure leadership-approved final legal text (4 files)
- [x] Draft Home page hero and section copy
- [x] Draft Solutions page copy with screenshots
- [x] Draft Platform page copy with screenshots
- [x] Draft Impact page copy
- [x] Draft Case Studies page copy
- [x] Create shared content layer (`website/src/content.ts`)
- [x] ✅ **Approval Gate**: Finalize approved launch copy for all 5 marketing pages
- [x] Curate and add draft Koru screenshots with working captions
- [x] ✅ **Approval Gate**: Finalize approved Koru screenshots and captions
- [x] Map current live public claims into `CLAIMS_MATRIX.md` (18 claims total)
- [x] ✅ **Approval Gate**: Complete reviewer sign-off for live public claims
- [x] Complete `COPYRIGHT_LICENSE_REGISTER.md` with 3 newly-used Koru screenshots
- [x] Create Phase B Review Package document for leadership
- [x] ✅ **Approval Gate**: Execute all approved edits from sign-off

## Phase C: Compliance and Public Safety
- [x] Complete `COPYRIGHT_LICENSE_REGISTER.md` with all published assets
- [x] Validate no unlicensed third-party assets are used
- [x] Validate no unsupported testimonials, metrics, or certifications
- [x] Complete legal/leadership sign-off records in launch docs

## Phase D: Product and UX Hardening
- [ ] Add analytics events (CTA clicks, form starts, form submits)
- [ ] Add basic spam/rate-limit protection strategy for form endpoint
- [ ] Improve Contact form UX with inline field-level errors
- [ ] Add favicon and social sharing metadata images
- [ ] Add SEO metadata per page (title, description, canonical)
- [ ] Add sitemap and robots policy
- [ ] Run accessibility pass (keyboard, focus, contrast, labels)
- [ ] Run responsive pass (mobile, tablet, desktop)

## Phase E: Pre-Launch Verification
- [ ] Complete `VERIFICATION_REPORT.md` checklist
- [ ] Validate all footer links and route links
- [ ] Validate legal pages are linked and readable
- [ ] Validate demo form success and failure behaviors
- [ ] Validate production performance baseline
- [ ] Execute rollback rehearsal from previous deployment

## Phase F: Go-Live and Post-Launch
- [ ] Publish production release on Cloudflare Pages
- [ ] Run launch smoke test on production domain
- [ ] Monitor submissions and uptime for first 48 hours
- [ ] Log post-launch issues and fixes in release notes

## Ownership Template
Use this table to assign execution owners.

| Area | Owner | Backup | Target Date | Status |
|---|---|---|---|---|
| Repo and Branch Protection | Web Team | TBD | 2026-04-26 | Complete |
| Cloudflare Deployment | Web Team | TBD | 2026-04-26 | Complete |
| Content and Legal | Leadership | TBD | 2026-04-27 | Complete |
| Claims and Copyright Review | Leadership + Web Team | TBD | 2026-04-27 | Complete |
| QA and Release | TBD | TBD | TBD | Not Started |

## Daily Update Rule
At end of each day:
1. Mark completed items.
2. Move blockers to top with owner.
3. Update target dates.
4. Sync status in `LAUNCH_PLAN.md` and `VERIFICATION_REPORT.md`.