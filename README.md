# Playwright Test Suite

This repository contains Playwright end-to-end tests and configuration for running them locally or in CI.

## Requirements
- Node.js (16+ recommended)

## Install
Install dependencies and Playwright browsers:

```bash
npm install
npx playwright install --with-deps
```

## Run tests
Run the full test suite:

```bash
npx playwright test
```

Run a single test file:

```bash
npx playwright test tests/example.spec.ts
```

To open the HTML report after a run:

```bash
npx playwright show-report
```

## Project layout
- `tests/` — Playwright test files
- `playwright.config.ts` — Playwright configuration
- `playwright-report/` — Generated HTML report output

## Notes
- Use `playwright.config.ts` to adjust browsers, timeouts, and retries.
- For CI, ensure browsers are installed (run `npx playwright install` in CI step).

If you want, I can add badges, examples, or CI config next.
