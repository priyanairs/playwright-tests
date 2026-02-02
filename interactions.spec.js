const { test, expect } = require('@playwright/test');

test.use({ 
  headless: false,
  slowMo: 1500
});

test('learn different interactions', async ({ page }) => {
  // Go to a demo website
  await page.goto('https://the-internet.herokuapp.com/');
  
  // CLICK on a link
  await page.click('text=Form Authentication');
  console.log('✓ Clicked a link');
  await page.waitForTimeout(2000);
  
  // FILL multiple fields
  await page.fill('#username', 'tomsmith');
  await page.fill('#password', 'SuperSecretPassword!');
  console.log('✓ Filled username and password');
  await page.waitForTimeout(2000);
  
  // CLICK a button
  await page.click('button[type="submit"]');
  console.log('✓ Clicked login button');
  await page.waitForTimeout(2000);
  
  // CHECK if text appears
  await expect(page.locator('.flash.success')).toBeVisible();
  console.log('✓ Login successful!');
  
  await page.waitForTimeout(3000);
});