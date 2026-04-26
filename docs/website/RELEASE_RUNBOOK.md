# Release Runbook

## Environment Model
- Preview: automatic for pull requests
- Staging: staging branch deployment
- Production: main branch deployment on fieldexa.com

## GitHub Setup Checklist
1. Create dedicated website repository.
2. Protect main branch.
3. Require pull request review and required status checks.
4. Add pull request template with compliance checklist.
5. Use squash merge for release traceability.

## Cloudflare Pages Setup Checklist
1. Create Pages project and connect GitHub repository.
2. Set build and output settings for selected web framework.
3. Configure preview deployment on pull requests.
4. Set production branch to main.
5. Attach custom domain fieldexa.com.
6. Configure www to redirect to fieldexa.com.

## Production Release Procedure
1. Confirm verification checklist pass in VERIFICATION_REPORT.md.
2. Merge approved release pull request to main.
3. Validate deployment on production URL.
4. Validate demo form submission route.
5. Smoke test top navigation and legal footer links.

## Rollback Procedure
1. Re-deploy previous known good commit in Cloudflare Pages.
2. Confirm production health checks.
3. Open incident note in launch plan and decision log.
4. Re-run smoke checks and resume release only after root-cause note is added.
