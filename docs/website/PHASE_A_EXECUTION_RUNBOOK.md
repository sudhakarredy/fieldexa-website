# Phase A Execution Runbook

**Objective:** Establish deployment infrastructure for fieldexa.com  
**Timeline:** 1.5 hours active user time  
**Owner:** Platform/DevOps team  
**Status:** Ready for execution (April 26, 2026)  

---

## Phase A: Automated Setup (Agent-Completed) ✅

The following items have been prepared and committed to the repository:

### Configuration Files Created
```
website/
├── .github/
│   ├── pull_request_template.md          ✅ Claims verification checklist
│   └── workflows/
│       └── build.yml                     ✅ Automated build and lint
├── .gitignore                            ✅ Updated with .env, .dev.vars
└── wrangler.toml                         ✅ Cloudflare Functions config
```

### Documentation Created
```
docs/website/
├── PHASE_A_QUICK_START.md                ✅ 2-minute overview
├── PHASE_A_GITHUB_CLOUDFLARE_SETUP.md    ✅ Step-by-step guide
├── PHASE_A_STATUS_REPORT.md              ✅ This runbook
└── IMPLEMENTATION_TODO.md                ✅ Updated with Phase A progress
```

---

## Phase A: User Execution Plan (Next Steps)

### Day 1: Repository Setup (30 minutes)

#### Hour 1 - Create GitHub Repository

**Task 1a: Create repo on GitHub**
```
Time: 5 minutes
Action: Manual
```

1. Open [github.com/new](https://github.com/new)
2. Fill form:
   - Name: `fieldexa-website`
   - Description: "Public marketing website for fieldexa.com"
   - Visibility: Public
   - Initialize: Unchecked
3. Click **Create repository**
4. Copy the HTTPS URL (e.g., `https://github.com/YOUR-ORG/fieldexa-website.git`)

**Task 1b: Push code to GitHub**
```
Time: 10 minutes
Action: Terminal commands
```

Execute in PowerShell from workspace:

```powershell
cd c:\Project\vscode\fieldexa_website\website
git add .
git commit -m "Initial commit: FIELDexa website scaffold with pages, routing, forms, and deployment config"
git branch -M main
git remote add origin https://github.com/YOUR-ORG/fieldexa-website.git
git push -u origin main
```

**Replace:** `YOUR-ORG` with your GitHub user or organization name

**Verify:**
- Repository appears on GitHub
- All files visible on main branch
- Build status shows (yellow = pending, green = passed after workflow runs)

**Expected Duration:** 10-15 minutes

---

#### Hour 2 - GitHub Configuration

**Task 2a: Set up branch protection**
```
Time: 10 minutes
Action: Manual in GitHub UI
```

1. Go to your GitHub repository
2. Click **Settings** (top right)
3. Left sidebar → **Branches**
4. Click **Add rule** under "Branch protection rules"

**Configure for branch pattern: `main`**

- [x] Require a pull request before merging
  - [x] Require approvals: `1`
  - [x] Dismiss stale pull request approvals when new commits are pushed
  - [x] Require code owner reviews (optional but recommended)

- [x] Require status checks to pass before merging
  - [x] Require branches to be up to date before merging
  - Find and select these status checks from the list:
    - `build` (from `.github/workflows/build.yml`)
    - `lint` (from workflow)

- [x] Require conversation resolution before merging

- [x] Include administrators

- [x] Restrict who can push to matching branches (optional, admin-only recommended)

5. Click **Create**

**Verify:**
- Main branch shows lock icon
- PR creation is required to merge
- Workflow runs automatically on PR creation

**Expected Duration:** 5-10 minutes

---

### Day 1-2: Cloudflare Configuration (45 minutes)

#### Hour 3 - Connect to Cloudflare Pages

**Task 3a: Create Cloudflare Pages project**
```
Time: 20 minutes
Action: Manual in Cloudflare UI
```

1. Go to [dash.cloudflare.com](https://dash.cloudflare.com)
2. Select your account
3. Navigate to **Pages** (left sidebar)
4. Click **Create a project**
5. Select **Connect to Git**

**Authorize GitHub:**
- Click "Connect GitHub"
- Authorize Cloudflare to access GitHub
- Select your organization
- Grant permissions

**Select Repository:**
- Repository: `fieldexa-website`
- Branch: `main`
- Click **Begin setup**

**Build Configuration:**
- Build command: `npm run build`
- Build output directory: `dist`
- Root directory: (leave blank)
- Environment variables: (skip for now, add in next step)

**Deploy:**
- Click **Save and Deploy**
- First deployment begins (~3-5 minutes)
- Watch the deployment progress in the Cloudflare UI

**Verify:**
- Deployment shows "Success" status
- URL appears: `[project-name].pages.dev`
- Site loads at that URL

**Expected Duration:** 20-30 minutes (including build time)

---

#### Hour 4 - Configure Domain and Environment

**Task 4a: Add custom domain**
```
Time: 10 minutes
Action: Manual in Cloudflare UI
```

1. In Cloudflare Pages project, click **Settings**
2. Go to **Custom domains**
3. Click **Add custom domain**
4. Enter: `fieldexa.com`
5. Select your Cloudflare account zone
6. Click **Continue**

**DNS Configuration:**
- If using Cloudflare DNS: Automatic (CNAME created)
- If using external DNS: Cloudflare will show CNAME record to add

**Verify:**
- Site loads at https://fieldexa.com
- Cloudflare confirms domain is active

**Expected Duration:** 5-10 minutes

---

**Task 4b: Set up environment variables**
```
Time: 10 minutes
Action: Manual in Cloudflare UI
```

1. In Cloudflare Pages project, click **Settings**
2. Go to **Environment variables**
3. Add for **Production** environment:

| Variable | Value | Notes |
|----------|-------|-------|
| RESEND_API_KEY | [Get from resend.com](https://resend.com/keys) | Resend account API key |
| CONTACT_TO_EMAIL | sales@fieldexa.com | Your contact inbox |
| CONTACT_FROM_EMAIL | noreply@fieldexa.com | Sender address |

4. Optionally add same variables for **Preview** environment (for testing)
5. Save

**Verify:**
- Variables appear in Cloudflare settings
- Next deployment will have access to variables

**Expected Duration:** 5 minutes

---

### Day 2: Testing and Verification (30 minutes)

#### Hour 5 - Test Preview Deployment

**Task 5a: Create test PR**
```
Time: 15 minutes
Action: Terminal + GitHub UI
```

1. Create a test branch:
```powershell
cd c:\Project\vscode\fieldexa_website\website
git checkout -b test/phase-a-deployment
```

2. Make a small test change (e.g., add a comment to a file):
```
# In src/App.tsx, add at the top:
// Phase A test deployment - testing preview environment
```

3. Commit and push:
```powershell
git add .
git commit -m "Test: Phase A deployment verification"
git push -u origin test/phase-a-deployment
```

4. Go to GitHub repository and click **Compare & pull request**
5. Create PR with title: "Test: Phase A deployment verification"

**Cloudflare Preview:**
- Wait for Cloudflare build to complete (~2-5 minutes)
- Cloudflare bot comments with preview URL
- Click preview URL in PR comments

**Test Contact Form:**
1. Navigate to preview URL
2. Click "Book a Demo" or go to Contact page
3. Fill form:
   - Name: "Test"
   - Email: "test@example.com"
   - Message: "Phase A test"
4. Submit form
5. Wait for success response

**Verify Email:**
- Check CONTACT_TO_EMAIL inbox
- Email from noreply@fieldexa.com received
- Form data in email body

**Expected Duration:** 10-15 minutes

---

#### Hour 6 - Test Production Deployment

**Task 6a: Merge test PR and verify production**
```
Time: 15 minutes
Action: Manual in GitHub UI + verification
```

1. In GitHub PR, click **Approve** (self-approve or request from team)
2. Merge PR to main

**Production Deployment:**
- Cloudflare automatically deploys merged code to fieldexa.com
- Wait for deployment to complete (~3-5 minutes)

**Test Production Site:**
1. Open https://fieldexa.com in browser
2. Verify:
   - Site loads
   - Navigation works
   - Logo displays
   - Copy is visible

3. Go to Contact page
4. Fill and submit demo form
5. Verify email received at CONTACT_TO_EMAIL

**Test www Redirect (if configured):**
1. Open https://www.fieldexa.com
2. Should redirect to https://fieldexa.com
3. Page should load

**Expected Duration:** 10-15 minutes

---

## Phase A Completion Checklist

Mark off each item as you complete:

### ✅ Repository Setup
- [ ] GitHub repository created (fieldexa-website)
- [ ] Code pushed to main branch via `git push`
- [ ] All source files visible on GitHub
- [ ] Build workflow shows status on commits

### ✅ Branch Protection
- [ ] Branch protection configured on main
- [ ] Require PR before merge enabled
- [ ] Require 1 approval enabled
- [ ] Require status checks (build, lint) enabled
- [ ] Require conversation resolution enabled

### ✅ Cloudflare Pages Connection
- [ ] Cloudflare Pages project created
- [ ] GitHub repository connected to Pages project
- [ ] Build command configured: `npm run build`
- [ ] Output directory configured: `dist`
- [ ] First deployment completed successfully

### ✅ Domain Configuration
- [ ] Custom domain fieldexa.com added to Cloudflare Pages
- [ ] Site loads at https://fieldexa.com
- [ ] www.fieldexa.com configured (redirect or CNAME)
- [ ] www redirects to apex domain

### ✅ Environment Configuration
- [ ] RESEND_API_KEY added to Cloudflare Pages (Production)
- [ ] CONTACT_TO_EMAIL added to Cloudflare Pages (Production)
- [ ] CONTACT_FROM_EMAIL added to Cloudflare Pages (Production)
- [ ] Environment variables set for Preview (optional)

### ✅ Deployment Testing
- [ ] Test PR created and deployed to preview
- [ ] Preview URL accessible
- [ ] Contact form works in preview
- [ ] Email received from preview form submission
- [ ] Test PR merged to main
- [ ] Production deployment completed
- [ ] Site loads at fieldexa.com
- [ ] Contact form works in production
- [ ] Email received from production form submission

---

## Phase A Completion Sign-Off

Once all items above are checked ✓:

1. **Update IMPLEMENTATION_TODO.md:**
   - Mark Phase A items as complete
   - Update owner and target date fields

2. **Document in DECISION_LOG.md:**
   - Record GitHub repository name and URL
   - Record Cloudflare Pages project ID
   - Note domain registration status

3. **Proceed to Phase B:**
   - See `docs/website/IMPLEMENTATION_TODO.md` for Phase B tasks
   - Phase B covers remaining environment and content setup

---

## Troubleshooting

### Build Fails on Cloudflare
**Error:** "Build failed"

**Solution:**
1. Check Cloudflare Pages deployment log for specific error
2. Run locally: `npm run build`
3. Run locally: `npm run lint`
4. If errors appear locally, fix and push new commit
5. Redeploy in Cloudflare (or let automatic PR deployment trigger)

### Domain Not Resolving
**Error:** "Site not found" or timeout

**Solution:**
1. If using Cloudflare DNS: Check DNS records show CNAME to Pages deployment
2. If using external DNS: Add CNAME record manually pointing to Pages deployment
3. Allow 5-10 minutes for DNS propagation
4. Clear browser cache (Ctrl+Shift+Del)

### Contact Form Returns 404
**Error:** "Failed to send form" or 404 response

**Solution:**
1. Verify function file exists: `website/functions/api/demo.ts`
2. In Cloudflare Pages settings, verify Cloudflare Functions are enabled
3. Redeploy to trigger Functions build
4. Check Cloudflare Pages **Functions** logs

### Contact Form Returns 500
**Error:** "Error processing request"

**Solution:**
1. Check Cloudflare Pages **Logs** for function error details
2. Verify environment variables are set in Cloudflare Pages
3. Verify RESEND_API_KEY is valid and has email quota
4. Check that CONTACT_TO_EMAIL is a valid email address

### Email Not Received
**Error:** Form says success but no email arrives

**Solution:**
1. Verify RESEND_API_KEY is correct in Cloudflare Pages settings
2. Check Resend dashboard for quota or delivery failures
3. Check spam/junk folder in CONTACT_TO_EMAIL inbox
4. Verify CONTACT_FROM_EMAIL domain is whitelisted in Resend
5. If stuck, test with Resend sandbox mode for preview environment

---

## Support Resources

- **GitHub Branch Protection:** https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches
- **Cloudflare Pages:** https://developers.cloudflare.com/pages/
- **Cloudflare Pages Functions:** https://developers.cloudflare.com/pages/functions/
- **Resend API:** https://resend.com/docs

---

## Next Steps After Phase A

Once Phase A is complete and verified:

1. All Phase A items in IMPLEMENTATION_TODO.md marked complete
2. Document decisions in DECISION_LOG.md
3. **Proceed to Phase B:** Domain and Environment Configuration
   - Finalize staging deployment (optional)
   - Set up environment-specific variables
   - Document deployment procedures

See [IMPLEMENTATION_TODO.md](./IMPLEMENTATION_TODO.md) for full schedule.

---

**Questions during execution?** Refer to detailed step-by-step guide at [PHASE_A_GITHUB_CLOUDFLARE_SETUP.md](./PHASE_A_GITHUB_CLOUDFLARE_SETUP.md).
