# Implementation TODO Tracker

## Purpose
Track all remaining implementation tasks from current scaffold to production launch without missing dependencies.

## Current Snapshot (2026-04-26)
- [x] Website scaffold created with route-based page structure
- [x] Core pages and legal placeholders added
- [x] Brand token CSS baseline added
- [x] Contact form connected to /api/demo endpoint
- [x] Cloudflare Pages function created for inbox delivery via Resend
- [x] Build passes locally (`npm run build`)

## Phase A: Repository and Delivery Setup
- [ ] Create dedicated public website GitHub repository
- [ ] Push current `website/` and `docs/website/` implementation
- [ ] Configure protected `main` branch
- [x] Add PR template with claim and copyright checks (✅ Created: `.github/pull_request_template.md`)
- [x] Configure required status checks (build and lint at minimum) (✅ Created: `.github/workflows/build.yml`)
- [ ] Connect repo to Cloudflare Pages
- [ ] Configure preview deployments for pull requests
- [ ] Configure staging branch deployment (recommended: `staging`)
- [ ] Configure production deployment from `main`

## Phase B: Domain and Environment Configuration
- [ ] Attach `fieldexa.com` custom domain in Cloudflare Pages
- [ ] Configure `www.fieldexa.com` redirect to apex domain
- [ ] Set Cloudflare environment variables for production:
  - [ ] `RESEND_API_KEY`
  - [ ] `CONTACT_TO_EMAIL`
  - [ ] `CONTACT_FROM_EMAIL`
- [ ] Set same variables for preview/staging where needed
- [ ] Validate end-to-end form delivery in preview and production

## Phase C: Content and Asset Completion
- [ ] Replace legal placeholders with leadership-approved final text:
  - [ ] Privacy Policy
  - [ ] Terms of Use
  - [ ] Cookie Policy
  - [ ] DPA
- [ ] Finalize Home page hero and section copy
- [ ] Finalize Solutions page copy
- [ ] Finalize Platform page copy
- [ ] Finalize Impact page copy
- [ ] Curate and add approved Koru screenshots with captions
- [ ] Add anonymized case-study narratives
- [ ] Verify all live public claims in `CLAIMS_MATRIX.md`

## Phase D: Compliance and Public Safety
- [ ] Complete `COPYRIGHT_LICENSE_REGISTER.md` with all published assets
- [ ] Validate no unlicensed third-party assets are used
- [ ] Validate no unsupported testimonials, metrics, or certifications
- [ ] Complete legal/leadership sign-off records in launch docs

## Phase E: Product and UX Hardening
- [ ] Add analytics events (CTA clicks, form starts, form submits)
- [ ] Add basic spam/rate-limit protection strategy for form endpoint
- [ ] Improve Contact form UX with inline field-level errors
- [ ] Add favicon and social sharing metadata images
- [ ] Add SEO metadata per page (title, description, canonical)
- [ ] Add sitemap and robots policy
- [ ] Run accessibility pass (keyboard, focus, contrast, labels)
- [ ] Run responsive pass (mobile, tablet, desktop)

## Phase F: Pre-Launch Verification
- [ ] Complete `VERIFICATION_REPORT.md` checklist
- [ ] Validate all footer links and route links
- [ ] Validate legal pages are linked and readable
- [ ] Validate demo form success and failure behaviors
- [ ] Validate production performance baseline
- [ ] Execute rollback rehearsal from previous deployment

## Phase G: Go-Live and Post-Launch
- [ ] Publish production release on Cloudflare Pages
- [ ] Run launch smoke test on production domain
- [ ] Monitor submissions and uptime for first 48 hours
- [ ] Log post-launch issues and fixes in release notes

## Ownership Template
Use this table to assign execution owners.

| Area | Owner | Backup | Target Date | Status |
|---|---|---|---|---|
| Repo and Branch Protection | TBD | TBD | TBD | Not Started |
| Cloudflare Deployment | TBD | TBD | TBD | Not Started |
| Content and Legal | TBD | TBD | TBD | Not Started |
| Claims and Copyright Review | TBD | TBD | TBD | Not Started |
| QA and Release | TBD | TBD | TBD | Not Started |

## Daily Update Rule
At end of each day:
1. Mark completed items.
2. Move blockers to top with owner.
3. Update target dates.
4. Sync status in `LAUNCH_PLAN.md` and `VERIFICATION_REPORT.md`.