# Implementation Handoff

## Status
Kickoff approved on 2026-04-26.

## Mission
Deliver a public-facing FIELDexa marketing website hosted on Cloudflare Pages, managed in a dedicated GitHub repository, with structured documentation and strict content safety gates.

## Non-Negotiable Constraints
1. No copyrighted third-party images, logos, icons, or copy unless explicit written rights are recorded.
2. No unsupported claims in public content.
3. Legal pages must be reviewed by founder or leadership before launch.
4. All changes to production flow through pull requests.

## Confirmed Delivery Decisions
1. Hosting platform: Cloudflare Pages
2. Domain strategy: fieldexa.com canonical, www redirect to apex
3. Lead capture: Book a Demo to single company inbox
4. Brand usage: leaf plus wordmark by default, moderate gold accents
5. Screenshot style: device frames with captions

## Confirmed In Rollout Features
1. AI chat app for insights and queries
2. AI-based weather monitoring and analysis
3. AI-based crop prediction
4. SMS notifications to farmers for issues and harvest events

## Build Sequence
### Day 1
1. Create dedicated website GitHub repository.
2. Configure protected main branch, PR checks, and PR template.
3. Connect repository to Cloudflare Pages.
4. Enable preview deployments for pull requests.
5. Create all website governance docs in this folder.

### Day 2
1. Scaffold pages: Home, Solutions, Platform, Impact, Case Studies, About, Contact.
2. Scaffold legal pages: Privacy, Terms, Cookie, DPA.
3. Apply brand tokens from FIELDexa brand guideline.
4. Curate approved assets from Images and Branding folder.

### Day 3
1. Implement Book a Demo form to single inbox.
2. Add analytics events for CTA and form funnel.
3. Add In Rollout section for Koru features.
4. Run accessibility and responsive baseline checks.

## Exit Criteria
1. Claims matrix is complete and every claim has evidence.
2. Copyright register covers every published asset.
3. Release runbook has preview, staging, and production deployment steps.
4. Leadership approvals are recorded for legal and final content.

## Tracking Discipline
Use `docs/website/IMPLEMENTATION_TODO.md` as the single daily execution tracker for all remaining tasks, blockers, and owner assignments.

---

## Current Execution State

**Phase A is complete.** Repository setup, Cloudflare Pages deployment, domain routing, environment configuration, and demo form delivery have been verified.

**Phase B is now active.** Focus execution on content completion and public-claim readiness:

1. Finalize legal page text.
2. Finalize Home, Solutions, Platform, and Impact page copy.
3. Curate approved screenshots and captions.
4. Add anonymized case-study narratives.
5. Verify all public claims in [CLAIMS_MATRIX.md](./CLAIMS_MATRIX.md).

Use [IMPLEMENTATION_TODO.md](./IMPLEMENTATION_TODO.md) as the current execution tracker.
