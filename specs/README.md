# Specs

This is a directory for test plans.

# Playwright.dev Test Plan

## Objective
Validate core functionality, navigation, content, examples, and cross-browser behavior of https://playwright.dev.

## Scope
- Public site: landing, docs, API reference, examples, search, download pages.
- Navigation, links, code snippets, copy-to-clipboard, and examples runability (where applicable).
- Responsive layout and basic accessibility checks.
- Cross-browser smoke tests (Chromium, Firefox, WebKit).

## Test Environment
- Platforms: macOS (local), ubuntu-latest (CI)
- Browsers: Chromium, Firefox, WebKit
- Node.js: 16+ (match project CI matrix)
- Playwright version: repo-specified

## Prerequisites
- Network access to https://playwright.dev
- Playwright browsers installed (npx playwright install)
- Test runner configured (playwright.config.ts)

## Test Types
- Functional
- Navigation / Link validation
- UI / Visual (basic screenshots)
- Accessibility (aria roles, alt text)
- Cross-browser compatibility
- Smoke / CI

## Test Cases (high level)

1. Landing page load
   - Steps: Navigate to https://playwright.dev
   - Expected: Page loads, title contains "Playwright", hero visible

2. Navigate to Docs
   - Steps: Click "Docs" in header
   - Expected: URL contains /docs, docs heading visible

3. API Reference access
   - Steps: Navigate to API Reference via header or search
   - Expected: API index loads, class/function names visible, code samples present

4. Search functionality
   - Steps: Use site search to find "expect" or "test"
   - Expected: Relevant results displayed, clicking a result navigates correctly

5. Examples / Tutorials
   - Steps: Open "Getting started" or example pages, copy code snippet, run mentally/locally
   - Expected: Code snippets present, copy-to-clipboard works, language tabs switch

6. Downloads / Install instructions
   - Steps: Open install or "Get started" page
   - Expected: Correct npm commands shown, OS-specific notes present

7. Links and anchors
   - Steps: Click deep links/anchors within docs
   - Expected: Page scrolls/loads to target, no 404s

8. Accessibility basics
   - Steps: Check headings and main landmarks, role=search/input presence, images have alt
   - Expected: Main headings exist, search/input accessible

9. Responsive layout
   - Steps: Load pages at mobile (375x812), tablet (768x1024), desktop widths
   - Expected: Navigation collapses appropriately, content readable

10. Cross-browser smoke
    - Steps: Repeat core navigation tests on Chromium, Firefox, WebKit
    - Expected: No major regressions; pages load and critical elements visible

11. Visual snapshot (regression)
    - Steps: Capture full-page screenshots for key pages
    - Expected: Baseline approved; significant diffs flagged

12. Rate limits / CDN
    - Steps: Validate resources load (css/js/fonts); repeated loads in CI
    - Expected: Assets load without errors

## Test Data & Artifacts
- Screenshots: tests/artifacts/*.png
- HTML report: playwright-report/
- Logs: test-run logs saved in CI artifacts

## Pass/Fail Criteria
- Pass: All high-priority test cases (1–6, 10) succeed across target browsers.
- Fail: Any critical navigation or content missing, or repeated 5xx/4xx errors on main pages.

## Execution Notes
- Mark flaky tests with retries in CI config.
- Run full suite on push to main; run smoke tests on PRs.
- Use playwright.show-report locally for debugging.

## Maintenance
- Review test selectors periodically (site UI may change).
- Update test expectations if docs restructured.
