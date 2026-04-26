# Phase A: GitHub and Cloudflare Setup Instructions

## Overview
Phase A establishes the deployment pipeline for the FIELDexa website by:
1. Creating a dedicated GitHub repository
2. Configuring branch protection rules
3. Connecting to Cloudflare Pages
4. Setting up preview, staging, and production deployments

**Timeline:** ~1 hour initial setup + configuration time
**Owner:** DevOps/Platform team
**Status:** Ready for execution

---

## Part 1: Create GitHub Repository

### 1a. Create the Repository

1. Go to [github.com/new](https://github.com/new)
2. Configure:
   - **Repository name:** `fieldexa-website` (or similar)
   - **Description:** Public marketing website for fieldexa.com
   - **Visibility:** Public (for Cloudflare Pages public domain)
   - **Initialize:** Leave unchecked (we'll push existing code)
   - **Add .gitignore:** No (already configured in website/.gitignore)
   - **Add license:** MIT or Apache-2.0 (recommended for open source)

3. Click **Create repository**

### 1b. Initialize Local Git and Push

From the workspace root, execute:

```bash
cd c:\Project\vscode\fieldexa_website\website
git init
git add .
git commit -m "Initial commit: FIELDexa website scaffold with pages, routing, forms, and docs"
git branch -M main
git remote add origin https://github.com/YOUR-ORG/fieldexa-website.git
git push -u origin main
```

**Replace:** `YOUR-ORG` with your GitHub organization or username

### 1c. Verify Repository

- Repository appears on GitHub
- `main` branch contains website code, .github/, docs/, etc.
- .gitignore is working (no node_modules/, .env, dist/ committed)

---

## Part 2: Configure Branch Protection

### 2a. Access Branch Protection Settings

1. Go to your GitHub repository
2. Click **Settings** → **Branches** (left sidebar)
3. Under "Branch protection rules", click **Add rule**

### 2b. Configure Main Branch Protection

Configure for **Branch name pattern:** `main`

**Required checks:**
- ✅ Require a pull request before merging
  - ✅ Require approvals: 1
  - ✅ Dismiss stale pull request approvals when new commits are pushed
- ✅ Require status checks to pass before merging
  - ✅ Require branches to be up to date before merging
  - ✅ Select required status checks:
    - `build` (GitHub Actions workflow)
    - `lint` (GitHub Actions workflow)
- ✅ Require conversation resolution before merging

**Recommended:**
- ✅ Include administrators (enforces rules even for admins)
- ✅ Restrict who can push to matching branches (admin only recommended)

### 2c. Add Staging Branch Protection (Optional)

Repeat for **Branch name pattern:** `staging`

Configuration:
- ✅ Require a pull request before merging (0 approvals acceptable for rapid testing)
- ✅ Require status checks: build, lint
- ✅ Allow force pushes to staging for rapid iteration

---

## Part 3: Connect to Cloudflare Pages

### 3a. Access Cloudflare Dashboard

1. Go to [dash.cloudflare.com](https://dash.cloudflare.com)
2. Select your account
3. Navigate to **Pages**

### 3b. Create New Project

1. Click **Create a project** → **Connect to Git**
2. Authorize GitHub and select:
   - **GitHub account:** Your org
   - **Repository:** `fieldexa-website`
   - **Branch to deploy:** `main`

### 3c. Configure Build and Environment

**Build command:**
```
npm run build
```

**Build output directory:**
```
dist
```

**Environment variables:**
- `VITE_ENVIRONMENT=production` (optional, for runtime environment detection)

**Root directory:** Leave blank (defaults to repository root)

The repository root contains the Cloudflare build entrypoint (`package.json`) and the Pages Functions entrypoint (`functions/api/demo.ts`), so a blank root directory is the intended configuration.

**Node.js version:** 20.x (Cloudflare Pages recommends)

### 3d. Save and Deploy

Click **Save and Deploy**. First deployment begins automatically.

**Expected duration:** 2-5 minutes

---

## Part 4: Configure Deployments

### 4a. Add Production Domain

1. After first deployment succeeds, go to **Pages project settings**
2. Click **Custom domains**
3. Add domain:
   - **Domain:** `fieldexa.com` (apex)
   - Cloudflare will show DNS setup steps
4. Follow Cloudflare's instructions to update DNS (or if already on Cloudflare, it auto-routes)

### 4b. Configure www Redirect

1. In Cloudflare dashboard, go to **Rules** → **Page Rules**
2. Create rule:
   - **URL pattern:** `www.fieldexa.com/*`
   - **Action:** Forward URL
   - **Forward to:** `https://fieldexa.com$1`
3. Save

### 4c. Set Up Staging Deployment

1. In Cloudflare Pages project, go to **Settings** → **Deployments**
2. **Production branch:** main
3. Add **Preview deployments:** enabled for all PRs
4. (Optional) Add **staging branch:** staging

### 4d. Add Environment Variables for Cloudflare Functions

1. In Cloudflare Pages project settings, find **Environment variables**
2. Add for **Production**:
   - `RESEND_API_KEY`: [Get from Resend dashboard](https://resend.com/keys)
   - `CONTACT_TO_EMAIL`: `sales@fieldexa.com` (or your inbox)
   - `CONTACT_FROM_EMAIL`: `noreply@fieldexa.com`

3. Add for **Preview** (optional, for testing):
   - Same variables, pointing to test inbox or separate Resend token

### 4e. Test Deployments

**Preview Deployment:**
- Create a test PR on GitHub
- Wait for Cloudflare Pages workflow to complete (~2-5 min)
- Cloudflare comments with preview URL
- Test contact form in preview (should send to test inbox if configured)

**Production Deployment:**
- Merge PR to main
- Cloudflare deploys to fieldexa.com
- Verify site loads at https://fieldexa.com and https://www.fieldexa.com
- Test contact form on production

---

## Part 5: Completion Checklist

Before marking Phase A complete, verify:

- [ ] GitHub repository created and populated
- [ ] Main branch protection configured (1 approval, status checks required)
- [ ] GitHub Actions workflows running (build and lint pass)
- [ ] Cloudflare Pages project created and connected
- [ ] Production domain fieldexa.com configured
- [ ] www redirect to apex domain working
- [ ] Preview deployments working for PRs
- [ ] Environment variables configured in Cloudflare
- [ ] Contact form tested in preview deployment (email received)
- [ ] Contact form tested in production deployment (email received)
- [ ] All links tested on production domain

---

## Part 6: Phase A Completion

When complete, update [IMPLEMENTATION_TODO.md](../IMPLEMENTATION_TODO.md):

```markdown
## Phase A: Repository and Delivery Setup
- [x] Create dedicated public website GitHub repository
- [x] Push current `website/` and `docs/website/` implementation
- [x] Configure protected `main` branch
- [x] Add PR template with claim and copyright checks
- [x] Configure required status checks (build and lint at minimum)
- [x] Connect repo to Cloudflare Pages
- [x] Configure preview deployments for pull requests
- [x] Configure staging branch deployment (optional)
- [x] Configure production deployment from `main`
```

Then proceed to **Phase B: Domain and Environment Configuration**.

---

## Troubleshooting

### Build fails on Cloudflare Pages
- Check **Deployments** log for errors
- Verify Node.js version (20.x recommended)
- Run `npm ci && npm run build` locally to replicate

### Domain not resolving
- If using Cloudflare DNS: Check **DNS** records for CNAME/ANAME pointing to pages deployment
- If using external DNS: Add CNAME record: `fieldexa.com CNAME [project].pages.dev`

### Contact form returns 404 on preview
- Check function file exists at `website/functions/api/demo.ts`
- Verify environment variables are set in Cloudflare project settings
- Check Cloudflare Pages **Functions** settings (should auto-detect functions/ directory)

### Contact form returns 500
- Check Cloudflare Pages function logs (**Pages project** → **Logs**)
- Verify RESEND_API_KEY is valid and has email quota
- Check email format validation (honeypot, required fields)

---

## Reference Files

- PR template: [../../.github/pull_request_template.md](../../.github/pull_request_template.md)
- Build workflow: [../../.github/workflows/build.yml](../../.github/workflows/build.yml)
- Environment template: [website/.env.example](../../website/.env.example)
- Function code: [website/functions/api/demo.ts](../../website/functions/api/demo.ts)

---

**Questions?** Refer to Phase A checklist in [IMPLEMENTATION_TODO.md](../IMPLEMENTATION_TODO.md).
