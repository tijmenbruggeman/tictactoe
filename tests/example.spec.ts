import { test, expect } from '@playwright/test';

test('button state', async ({ page }) => {
  await page.goto('http://localhost:5173/');
  const buttonlocator = page.getByRole('button');
  expect(buttonlocator).toHaveText("Let's Play");
});
