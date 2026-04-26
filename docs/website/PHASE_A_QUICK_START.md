# Phase A Quick Start

## 2-Minute Summary

Phase A sets up the deployment infrastructure for fieldexa.com:

1. **GitHub:** Create repo, push code, add branch protection
2. **Cloudflare Pages:** Connect to GitHub, assign domain, set env vars
3. **Verify:** Test preview and production deployments

## Prerequisites

- GitHub organization or user account with repo creation permission
- Cloudflare account with domain management access (fieldexa.com)
- Resend account with API key for email delivery
- Admin access to make Cloudflare and GitHub configuration changes

## Execution Path

### Step 1: Prepare Local Repository (15 min)

```bash
# Navigate to website directory
cd c:\Project\vscode\fieldexa_website\website

# Stage all files
git add .

# Commit with descriptive message
git commit -m "Initial commit: FIELDexa website scaffold with pages, routing, contact form, and deployment config"

# Verify local build passes
npm run build
npm run lint
```

### Step 2: Create GitHub Repository (5 min)

1. Go to github.com/new
2. Name: `fieldexa-website`
3. Visibility: Public
4. Create repository
5. Follow GitHub's "push existing repository" instructions:

```bash
git branch -M main
git remote add origin https://github.com/YOUR-ORG/fieldexa-website.git
git push -u origin main
```

### Step 3: Configure GitHub Branch Protection (10 min)

1. Repository → Settings → Branches
2. Add rule for `main` branch:
   - Require 1 approval
   - Require status checks (build, lint)
   - Require conversation resolution
3. Save

### Step 4: Connect Cloudflare Pages (20 min)

1. Cloudflare Dashboard → Pages
2. Create project → Connect to Git
3. Select `fieldexa-website` repo, `main` branch
4. Build settings:
   - Command: `npm run build`
   - Output: `dist`
5. Deploy
6. After success, add custom domain: `fieldexa.com`
7. Configure environment variables:
   - RESEND_API_KEY
   - CONTACT_TO_EMAIL
   - CONTACT_FROM_EMAIL

### Step 5: Verify Deployments (15 min)

**Test Preview:**
```bash
# Create a test branch
git checkout -b test/phase-a

# Make a small change (e.g., update a comment)
git add .
git commit -m "Test preview deployment"
git push -u origin test/phase-a

# Open PR on GitHub
# Wait for Cloudflare to build preview
# Test form at preview URL
```

**Test Production:**
```bash
# Merge PR to main
# Wait for production deployment
# Test form at https://fieldexa.com
```

---

## Files Modified/Created in Phase A

- `.github/pull_request_template.md` - PR claims checklist
- `.github/workflows/build.yml` - Automated build and lint on PR
- `.gitignore` - Updated with .env, .dev.vars
- `wrangler.toml` - Cloudflare Functions configuration
- `docs/website/PHASE_A_GITHUB_CLOUDFLARE_SETUP.md` - Detailed setup guide

---

## Phase A Success Criteria

✅ All items complete when:

- [x] GitHub repo created and code pushed
- [x] Branch protection configured on main
- [x] Cloudflare Pages connected to GitHub
- [x] Custom domain fieldexa.com assigned
- [x] Environment variables configured
- [x] Preview deployment works (PR preview URL loads)
- [x] Production deployment works (fieldexa.com loads)
- [x] Contact form works in both preview and production
- [x] www.fieldexa.com redirects to fieldexa.com

---

## Rollback Plan

If Cloudflare or GitHub configuration fails:

1. **Cloudflare Pages:** Delete project, reconnect GitHub repo
2. **GitHub branch protection:** Remove rule, reconfigure
3. **Environment variables:** Confirm values in Cloudflare Pages settings
4. **Domain routing:** Verify Cloudflare DNS points to Pages deployment

---

## Next Steps (Phase B)

After Phase A is complete:

1. Proceed to **Phase B: Domain and Environment Configuration**
2. Finalize staging deployment (optional but recommended)
3. Set up environment-specific variables for preview vs production
4. Document deployment procedures for team

See [IMPLEMENTATION_TODO.md](./IMPLEMENTATION_TODO.md) for full checklist.
