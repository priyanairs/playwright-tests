const { test, expect } = require('@playwright/test');

test.use({ 
  headless: false,
  slowMo: 7000 
});

test('my first test', async ({ page }) => {
  // Go to a website
  await page.goto('https://www.example.com');
  
  // Check if the page title contains "Example"
  await expect(page).toHaveTitle(/Example/);
  
  // Print success message
  console.log('Test passed! 🎉');
});