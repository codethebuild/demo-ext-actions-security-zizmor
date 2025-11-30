# GitHub Actions Workflows

This project includes automated CI/CD workflows for testing, building, and deploying the application.

## Workflows

### 1. CI Workflow (`ci.yml`)

Runs on every push to `main` and on all pull requests.

**Jobs:**

#### Test Job
- Installs dependencies
- Runs ESLint for code quality
- Checks code formatting with Prettier
- Runs unit tests with Vitest
- Generates coverage reports
- Uploads coverage to Codecov (if configured)

#### Build Job
- Builds the production application
- Uploads build artifacts for inspection

#### E2E Job
- Installs Playwright browsers
- Runs end-to-end tests across multiple browsers
- Uploads test reports and results

**Triggers:**
- Push to `main` branch
- Pull requests targeting `main`

### 2. Deploy Workflow (`deploy.yml`)

Automatically deploys the application to GitHub Pages.

**Jobs:**

#### Build and Deploy
- Runs tests to ensure quality
- Builds the production application
- Deploys to GitHub Pages

**Triggers:**
- Push to `main` branch
- Manual trigger via workflow dispatch

## Setup

### GitHub Pages
1. Go to repository Settings → Pages
2. Set Source to "GitHub Actions"

### Codecov (Optional)
1. Sign up at [codecov.io](https://codecov.io)
2. Add repository
3. Add `CODECOV_TOKEN` to repository secrets

## Status Badges

Add these to your README.md:

```markdown
![CI](https://github.com/YOUR_USERNAME/YOUR_REPO/workflows/CI/badge.svg)
![Deploy](https://github.com/YOUR_USERNAME/YOUR_REPO/workflows/Deploy/badge.svg)
```

## Local Testing

Run the same checks locally before pushing:

```bash
npm run lint              # Lint check
npm run format:check      # Format check
npm test                  # Unit tests
npm run test:coverage     # Coverage
npm run build             # Production build
npm run test:e2e          # E2E tests
```

## Pull Request Checks

All PRs must pass:
- ✓ Linting (ESLint)
- ✓ Formatting (Prettier)
- ✓ Unit tests (Vitest)
- ✓ Coverage thresholds (80% minimum)
- ✓ Build succeeds
- ✓ E2E tests pass
