import { test, expect } from '@playwright/test';

test('shows a button', async ({ page }) => {
  await page.goto('http://localhost:5173/');
  await page.getByRole('button', { name: 'Lets Play' }).click();
});

test('if user clicks quick enough, he will see his response time', async ({ page }) => {
  await page.goto('http://localhost:5173/');
  await page.click('text=Lets Play');
  await page.waitForSelector('text=CLICKME!!!!');
  await page.click('text=CLICKME!!!!');
  await page.screenshot({ path: 'screenshot.png' });
});