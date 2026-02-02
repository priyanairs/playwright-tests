const { test, expect } = require('@playwright/test');

test.use({ 
  headless: false,
  slowMo: 2000
});

test('search on Wikipedia', async ({ page }) => {
  // 1. Go to Wikipedia
  await page.goto('https://www.wikipedia.org');
  
  // 2. Type in the search box (you need to find the selector!)
  // Hint: Look at the Wikipedia page - the search box has id="searchInput"
  await page.fill('#searchInput', 'JavaScript');
  
  // 3. Press Enter
  await page.press('#searchInput', 'Enter');
  
  // 4. Wait to see results
  await page.waitForTimeout(3000);
  
  // 5. Check that the page title contains "JavaScript"
  await expect(page).toHaveTitle(/JavaScript/);
  
  console.log('✓ Wikipedia test passed!');
});