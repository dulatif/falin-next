---
description: Deployment workflow for the application
---

# Deployment Workflow

1.  **Build Verification**:
    -   Run `npm run build` (or `bun run build`) locally to ensure no type errors.
    -   Fix any linting warnings.

2.  **Version Control**:
    -   Commit changes: `git commit -m "feat: description"`.
    -   Push to remote: `git push origin [branch-name]`.

3.  **CI/CD (If applicable)**:
    -   Ensure GitHub Actions/Vercel pipelines trigger.
    -   Monitor build status.

4.  **Verification**:
    -   Check the live URL.
    -   Verify critical paths (Login, Dashboard).
