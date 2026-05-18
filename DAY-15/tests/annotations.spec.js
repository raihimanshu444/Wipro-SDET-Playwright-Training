const { test, expect } = require('@playwright/test');


//test.describe is a way to group related tests together under a single block name
test.describe('Annotations and Timeouts', () => {
  
  // 1. Skip: This test will not run at all.
  test.skip('Skip this test because feature is not ready', async ({ page }) => {
    await page.goto('https://example.com');
  });

  // 2. Fail: We expect this test to fail. If it passes, Playwright marks it as an error!
  test('Mark as expected failure', async ({ page }) => {
    test.fail();
    await page.goto('https://example.com');
    await expect(page.locator('h1')).toHaveText('Wrong Text');// We are asserting that the heading is 'Wrong Text' (but on example.com the heading is actually 'Example Domain').
  });

  // 3. Fixme: Similar to skip, but indicates the test is broken and needs updating.
  test.fixme('Fix this flaky test later', async ({ page }) => {
    await page.goto('https://example.com');
  });

  // 4. Slow & Timeouts: Triples the default timeout for this specific test. It automatically triples the default timeout (e.g., if the default is 30 seconds, it becomes 90 seconds).
  test('Slow test with custom timeout', async ({ page }) => {
    test.slow(); // Triples the timeout
    test.setTimeout(10000); // Overrides timeout to exactly 10 seconds
    await page.goto('https://playwright.dev/');
    await expect(page).toHaveTitle(/Playwright/);
  });

  // 5. Steps: Groups actions together. These show up beautifully in Allure reports. Divides a single test into smaller, readable chunks.When you view the test report, it will display collapsible steps so you can see exactly which part (Navigation or Verification) succeeded or failed.
  test('Using test.step for reporting', async ({ page }) => {
    await test.step('Navigate to website', async () => {
      await page.goto('https://example.com');
    });

    await test.step('Verify the main heading', async () => {
      await expect(page.locator('h1')).toHaveText('Example Domain');
    });
  });
});