# Testing Guide

## Unit Tests (Vitest + React Testing Library)

### Run Tests
```bash
npm test                 # Run tests in watch mode
npm run test:ui          # Run tests with UI
npm run test:coverage    # Run tests with coverage report
```

### What's Tested
- Component rendering
- User interactions (clicks, keyboard navigation)
- State changes
- Slide navigation logic
- Fullscreen functionality

### Test Files
- `src/test/App.test.jsx` - App component tests
- `src/test/SlideDeck.test.jsx` - SlideDeck component tests

## E2E Tests (Playwright)

### Setup
First, install Playwright browsers:
```bash
npx playwright install
```

### Run Tests
```bash
npm run test:e2e          # Run all E2E tests
npm run test:e2e:ui       # Run with Playwright UI
npm run test:e2e:headed   # Run in headed mode (see browser)
```

### What's Tested
- Full application flow
- Keyboard navigation (arrows, space, home, end)
- Mouse interactions
- Control visibility/hiding
- Progress bar updates
- Responsive design
- Accessibility features

### Test Files
- `e2e/slidedeck.spec.js` - Main functionality tests
- `e2e/accessibility.spec.js` - Accessibility tests

## Test Coverage

Unit tests provide fast feedback during development, while E2E tests ensure the complete user experience works correctly in real browsers.

### Browsers Tested (Playwright)
- Chromium
- Firefox
- WebKit (Safari)

## CI/CD Integration

Both test suites are configured for CI environments:
- Vitest runs with coverage reporting
- Playwright retries failed tests and captures traces
