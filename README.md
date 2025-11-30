# GitHub Actions Security Demo

A demonstration repository showcasing best practices for hardening GitHub Actions workflows. This repo contains a sample React application (generated with GitHub Copilot) that serves as a realistic example for implementing security measures in CI/CD pipelines.

## Purpose

This repository is designed to demonstrate:

- 🔒 **Security Hardening** - Best practices for securing GitHub Actions workflows
- 📋 **Dependabot Configuration** - Automated dependency updates with proper controls
- 🔍 **Security Scanning** - Integration of zizmor and dependency review actions
- 🎯 **Least Privilege** - Implementing minimal permissions in workflows
- 🎬 **Interactive Demos** - Using Demo Time to showcase security improvements

## Demo Time Integration

This project includes [Demo Time](https://marketplace.visualstudio.com/items?itemName=eliostruyf.vscode-demo-time) configurations for interactive demonstrations of GitHub Actions security hardening.

### Available Security Demos

1. **Add Security Workflows** - Add zizmor scanner and dependency review workflows
2. **Add Dependabot Cooldown** - Configure cooldown period for dependency updates
3. **Lock Actions** - Pin GitHub Actions to specific versions and SHAs
4. **Limit Permissions** - Add least-privilege permissions to workflows
5. **Complete Hardening** - Add concurrency controls and explanatory comments

### Running Demos

1. Install the [Demo Time extension](https://marketplace.visualstudio.com/items?itemName=eliostruyf.vscode-demo-time)
2. Open the Demo Time panel in VS Code
3. Select a demo from the list to execute it
4. Follow along as the demo automatically demonstrates security improvements

See [`.demo/harden-actions.json`](.demo/harden-actions.json) for the complete demo configuration.

## Security Features Demonstrated

### Workflow Hardening

- ✅ Workflow-level permissions set to `{}`
- ✅ Job-level permissions with minimal required scopes
- ✅ Actions pinned to specific versions or SHAs
- ✅ `persist-credentials: false` for checkout actions
- ✅ Concurrency controls to prevent resource waste

### Automated Security

- ✅ zizmor scanner for GitHub Actions security analysis
- ✅ Dependency review for PRs
- ✅ Dependabot with weekly schedule and cooldown period
- ✅ Grouped dependency updates

## Quick Start

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

### Build

```bash
npm run build
```

## The Sample Application

This repository contains a simple React slide deck application built with:

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Vitest** - Unit testing framework
- **Playwright** - E2E testing framework
- **ESLint** - Code linting
- **Prettier** - Code formatting

The application itself is intentionally simple - the focus is on the security of the CI/CD pipeline rather than the application features.

## Testing

### Unit Tests

```bash
npm test
npm run test:coverage
```

### E2E Tests

```bash
npm run test:e2e
```

## Code Quality

```bash
# Linting
npm run lint

# Formatting
npm run format:check
```

## GitHub Actions Workflows

### CI Workflow (`.github/workflows/ci.yml`)

Demonstrates security best practices:
- Minimal permissions
- Version pinning
- Credential protection
- Concurrency controls

### Security Workflows

- **Zizmor** (`.github/workflows/zizmor.yml`) - Scans workflow files for security issues
- **Dependency Review** (`.github/workflows/dependency-review.yml`) - Reviews dependencies in PRs

### Dependabot Configuration

See `.github/dependabot.yml` for automated dependency updates with:
- Weekly schedule
- 7-day cooldown between updates
- Grouped updates for GitHub Actions

## Learning Resources

- [GitHub Actions Security Best Practices](https://docs.github.com/en/actions/security-guides/security-hardening-for-github-actions)
- [Zizmor - GitHub Actions Security Scanner](https://github.com/woodruffw/zizmor)
- [Dependabot Configuration Options](https://docs.github.com/en/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file)

## License

MIT License - feel free to use this as a template for securing your own GitHub Actions workflows!
