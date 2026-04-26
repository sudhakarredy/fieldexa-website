# Phase B Review Package
## Draft Content Ready for Leadership Approval

**Prepared:** 2026-04-26  
**Status:** Ready for Review  
**Target:** Final sign-off before Phase C launch hardening

---

## Summary
Phase B has completed all technical implementations for the v1 marketing website. Three approval artifacts remain for leadership review before finalizing for production:
1. **Legal Pages** (4 files): Privacy, Terms, Cookie Policy, DPA — all drafted and ready for counsel review
2. **Marketing Copy** (5 pages): Home, Solutions, Platform, Impact, Case Studies — all drafted with structured content layer
3. **Screenshot Captions** (3 assets): Farmers, Agreements, Alerts — all curated from Koru product with working captions
4. **Public Claims** (18 total): All mapped in CLAIMS_MATRIX.md with evidence sources identified

---

## Approval Artifacts

### 1. Legal Pages (Awaiting Review)
All legal pages are complete, production-ready, and require leadership/counsel approval before going live.

**Files to Review:**
- `website/src/pages/PrivacyPage.tsx` — Information Collection, Use, Sharing, Retention, Choices, Cookies, Contact (9 sections)
- `website/src/pages/TermsPage.tsx` — Permitted Use, Content, Submissions, Third-Party Services, Disclaimers, Liability, Changes, Contact (8 sections)
- `website/src/pages/CookiePolicyPage.tsx` — What Cookies Are, How Used, Analytics/Optional, Browser Choices, Updates, Contact (6 sections)
- `website/src/pages/DpaPage.tsx` — When Applies, Processing Scope, Security, Subprocessors, Data Subject Requests, Contact (6 sections)

**Current Status:** Draft production copy; no placeholder text remains.  
**Action Required:** Counsel review and approval.  
**Sign-Off Field:** Legal Owner: _____________ Date: _____________

---

### 2. Marketing Copy & Shared Content Layer (Awaiting Review)
All marketing pages have been updated with structured draft copy organized in a reusable content layer (`website/src/content.ts`).

**Files to Review:**
- `website/src/content.ts` — Centralized content source with 4 data structures:
  - `solutionTracks` (3 items) — Contract Farming, Traceability Programs, Field Team Execution
  - `platformModules` (5 items) — Farmer/Farm Records, Agreements/Inputs/Harvest, Field Visits, Role-Based Reporting, Mobile Operations
  - `impactStories` (4 items) — Operational Visibility, Record Readiness, Team Coordination, Scalable Execution
  - `caseStudyStories` (3 items) — Cluster Alert Workflow, Traceability Records, Input-to-Harvest Visibility

**Pages Using Content:**
- `website/src/pages/HomePage.tsx` — Hero + Core Pillars + Solution Tracks + In Rollout Features
- `website/src/pages/SolutionsPage.tsx` — Core Pillars + Solution Tracks + Screenshots + In Rollout Capabilities
- `website/src/pages/PlatformPage.tsx` — Platform Intro + Capability Cards + How Platform Is Used + Visible Action Tracking
- `website/src/pages/ImpactPage.tsx` — Impact Intro + Impact Stories + Evidence Discipline Caution Section
- `website/src/pages/CaseStudiesPage.tsx` — Case Studies Intro + 3 Anonymized Workflow Stories

**Current Status:** Draft structured copy; all placeholder text replaced with substantive marketing language.  
**Action Required:** Product/marketing review and approval.  
**Sign-Off Field:** Product Owner: _____________ Date: _____________

---

### 3. Screenshot Captions (Awaiting Review)
Three curated Koru product screenshots have been integrated with working captions that explain product functionality and support key claims.

**Files to Review:**
- `website/src/pages/SolutionsPage.tsx` — Lines 42–56
  - farmers.jpg: "Farmer records remain searchable and structured so teams can move from onboarding into downstream operations without disconnected lists."
  - agreements.jpg: "Agreement workflows connect seasonal terms, status, and linked operating context in one operational view."

- `website/src/pages/PlatformPage.tsx` — Lines 41–49
  - alerts.jpg: "Alert workflows help operating teams see new, in-progress, and closed issues with linked farmer and farm context."

**Assets:**
- `website/src/assets/koru/farmers.jpg` (185 KB) — From Koru Images&Branding/04-Farmers.jpg
- `website/src/assets/koru/agreements.jpg` (275 KB) — From Koru Images&Branding/09-Agreement.jpg
- `website/src/assets/koru/alerts.jpg` (268 KB) — From Koru Images&Branding/17-Alerts.jpg

**Current Status:** Draft captions; no personal data visible in screenshots.  
**Action Required:** Review captions for accuracy and product marketing suitability; confirm no sensitive data in screenshots.  
**Sign-Off Field:** Product Owner: _____________ Date: _____________

---

### 4. Public Claims Matrix (Awaiting Review & Sign-Off)
All 18 published claims have been mapped to pages and documented in `docs/website/CLAIMS_MATRIX.md`.

**File to Review:**
- `docs/website/CLAIMS_MATRIX.md` — Complete 18-claim register with:
  - Live Now (16 claims): Core platform capabilities and current features
  - In Rollout (2 claims): AI chat, weather, crop prediction, SMS notifications
  - Evidence Sources: Documented per claim
  - Page-to-Claim Coverage: All pages mapped to supporting claims

**Current Status:** Draft matrix; all claims tagged "Draft" pending reviewer sign-off.  
**Action Required:** Leadership review and sign-off on all 18 claims to confirm they are supported by product state and can be defended publicly.  
**Sign-Off Field:** Product Owner: _____________ Date: _____________

---

## Governance Checklist

- [x] **Repository**: GitHub repo created, CI/CD configured, branch protection active
- [x] **Deployment**: Cloudflare Pages live, custom domain configured, form delivery verified
- [x] **Legal Drafts**: 4 pages complete and ready for review
- [x] **Marketing Drafts**: 5 pages complete with shared content layer
- [x] **Screenshots**: 3 Koru assets curated and integrated with captions
- [x] **Claims**: 18 claims mapped to pages and documented in matrix
- [x] **Copyright**: COPYRIGHT_LICENSE_REGISTER.md updated with 3 new Koru screenshots
- [ ] **Legal Approval**: All 4 legal pages approved by counsel
- [ ] **Product Approval**: All marketing copy and screenshot captions approved by product
- [ ] **Claims Approval**: All 18 claims signed off by leadership
- [ ] **QA Gate**: Go/No-Go criteria reviewed and passed

---

## Build & Deployment Status

**Latest Build:** ✅ Success  
**Build Time:** ~30 seconds  
**Deployment:** ✅ Live on fieldexa.pages.dev and fieldexa.com  
**Assets:** All 3 screenshots bundled and optimized  
**Form Endpoint:** ✅ Verified working (demo delivery to sales@fieldexa.com)

---

## Phase B Completion Criteria

Phase B is **COMPLETE** when all four approval artifacts have been signed off by their respective owners:
1. Legal pages signed by Legal Owner
2. Marketing copy signed by Product Owner
3. Screenshot captions confirmed by Product Owner
4. Public claims signed by Product Owner + Leadership

**Next Steps:** After approval, execute Phase C (Compliance & Safety) and Phase D (UX Hardening).

---

## Sign-Off Template

**Reviewer:** _____________________________ **Date:** _____________

**Legal Pages (Privacy, Terms, Cookie, DPA):**  
- [ ] Reviewed and approved as-is
- [ ] Requires edits (specify below)  
- Edits needed: ___________________________________________

**Marketing Copy (Home, Solutions, Platform, Impact, Case Studies):**  
- [ ] Reviewed and approved as-is
- [ ] Requires edits (specify below)  
- Edits needed: ___________________________________________

**Screenshot Captions (Farmers, Agreements, Alerts):**  
- [ ] Reviewed and approved as-is
- [ ] Requires edits (specify below)  
- Edits needed: ___________________________________________

**Public Claims Matrix (18 claims):**  
- [ ] All claims reviewed and defendable as-is
- [ ] Requires edits (specify below)  
- Edits needed: ___________________________________________

**Overall Phase B Status:**  
- [ ] APPROVED — Proceed to Phase C
- [ ] APPROVED WITH EDITS — Make edits and proceed to Phase C
- [ ] BLOCKED — Resolve issues before proceeding

**Comments:** ___________________________________________________

