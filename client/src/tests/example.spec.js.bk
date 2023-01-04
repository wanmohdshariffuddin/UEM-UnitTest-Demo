// @ts-check
const { test, expect } = require('@playwright/test');

// test('homepage has title and links to intro page', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Expect a title "to contain" a substring.
//   await expect(page).toHaveTitle(/Playwright/);

//   // create a locator
//   const getStarted = page.getByRole('link', { name: 'Get started' });

//   // Expect an attribute "to be strictly equal" to the value.
//   await expect(getStarted).toHaveAttribute('href', '/docs/intro');

//   // Click the get started link.
//   await getStarted.click();
  
//   // Expects the URL to contain intro.
//   await expect(page).toHaveURL(/.*intro/);
// });


test('test', async ({ page }) => {
  await page.goto('https://www.uemedgenta.com/');
  await page.locator('#navi-img').getByRole('link').first().click();
  await page.getByRole('link', { name: 'Healthcare Support' }).click();
  await page.locator('div:nth-child(2) > .com > .aps-0031-so-wrapper').first().click();
  await page.getByPlaceholder('Search keyword').click();
  await page.getByPlaceholder('Search keyword').press('CapsLock');
  await page.getByPlaceholder('Search keyword').fill('NXT');
  await page.getByPlaceholder('Search keyword').press('CapsLock');
  await page.getByPlaceholder('Search keyword').press('Enter');
});