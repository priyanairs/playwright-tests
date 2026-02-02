const { test, expect } = require('@playwright/test');

test.use({ 
  headless: false,
  slowMo: 2000  // Slower!
});

test('search on Google', async ({ page }) => {
  // Go to Google
  await page.goto('https://www.google.com');
  console.log('✓ Opened Google');
  
  // Wait to see it
  await page.waitForTimeout(2000);
  
  // Type in the search box
  await page.fill('textarea[name="q"]', 'Playwright testing');
  console.log('✓ Typed search term');
  
  // Wait to see the typing
  await page.waitForTimeout(2000);
  
  // Press Enter
  await page.press('textarea[name="q"]', 'Enter');
  console.log('✓ Pressed Enter');
  
  // Wait to see results
  await page.waitForTimeout(3000);
  
  // Check that we got to results page
  await expect(page).toHaveURL(/search/);
  
  console.log('✓ Search test passed! 🔍');
  
  // Keep browser open a bit longer
  await page.waitForTimeout(3000);
});

