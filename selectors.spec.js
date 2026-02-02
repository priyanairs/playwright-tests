const { test, expect } = require('@playwright/test');

test.use({ 
  headless: false,
  slowMo: 1500
});

test('simple login test', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/login');
  
  await page.fill('#username', 'tomsmith');
  console.log('✓ Filled username');
  
  await page.fill('#password', 'SuperSecretPassword!');
  console.log('✓ Filled password');
  
  await page.click('button[type="submit"]');
  console.log('✓ Clicked login');
  
  await page.waitForTimeout(3000);
  console.log('✓ Test completed');
});