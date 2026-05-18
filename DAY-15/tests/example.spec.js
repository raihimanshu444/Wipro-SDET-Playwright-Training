// @ts-check
import { test, expect } from '@playwright/test';

//create test
// test('amazon razor products check', async ({ page }) => {
//   await page.goto('https://www.amazon.com/');  //Automatically opens Amazon website.

//   const txtBox = page.locator('#twotabsearchtextbox');  //Identifies the search bar.
//   await txtBox.fill("gaming");  //Types "gaming" into the search bar.
//   const subBtn = page.locator('#nav-search-submit-button');  //Identifies the search button.
//   await subBtn.click();  //Clicks the search button.

  
// });


// Skip Annotation (test.skip):
test.skip('ok', ({page}) => {
  // fghjkjhg
}) 

test('test1', async ({page}) => {
  //test.setTimeout(10);  //10 seconds timeout  This test will almost certainly fail because it will time out instantly Setting it to 10 means the test must complete in 10 milliseconds
  test.step('check if 2 is eq to 3', () => {  //Used to divide test into smaller steps.
    test.fail();  // marks the test as failed
    expect(2).toBe(3); // false. -> fail
  })

  test.step('check if 2 is eq to 2', () => { 
    // test.fail();
    expect(2).toBe(2);  // true -> pass
  })

  test.step('check if 5 is eq to 5', () => {
    // test.fail();  //This test is expected to fail
    expect(5).toBe(5); // assertion is true -> pass
  })
}) 

// fixme annotation
// fixme is used to mark the test as broken and needs updating.Playwright will mark the test as fixme and will not run it.(skips it) It serves as a reminder to the developer/tester that this test code needs maintenance.
test.fixme('test', async ({ page }) => { 
  // test.setTimeout(1000);
  await page.goto('https://www.amazon.com/');  //Automatically opens Amazon website.
  await page.getByRole('searchbox', { name: 'Search Amazon' }).click();  //Identifies the search bar.
  await page.goto('https://www.amazon.com/s?k=gaming&crid=2G6R10NGAR9DY&sprefix=%2Caps%2C313&ref=nb_sb_noss');  //Automatically opens Amazon website.
  await page.getByRole('button', { name: 'Submit' }).first().click();  //Identifies the search button.
  await page.getByRole('link', { name: 'Apply Razer filter to narrow' }).click();  //Identifies the filter button.
  // await page.locator('.a-link-normal').first().click();  //Identifies the filter button.
  // await page.goto('https://www.amazon.com/Razer-Viper-Wireless-Esports-Gaming/dp/B0GMLBSSTD/ref=sr_1_1?crid=2G6R10NGAR9DY&dib=eyJ2IjoiMSJ9.5xaPZtVT1hDMoUOJvsN1IQ3G2Hw-he0Zg2I-IbW5A267jtrSm50XJFHWcA9wMMNRkGIwsOrk9b0xnZGtEa4Rte3_ok4iO3kmctrFf2oQqLQCwKUkbKd6BaWXJE92rE7SnMx5q_WQgx3haqA6jTQc9tO_Gf2fPA78dnmC1grAskbGyLuac48NnY2Nur_cTFxfzT2KzVtPOB4HaZaIxv-R16Hg2Rvmr9DtAeXTYhC1Ons5CpGaguHWwk7oGYyUWLspxPYgort0sRf9BsTiBAUIVY9_tjohOO0iG3u_WXwDCnE.5Bi-h9Hi2uLD3gO-O16ivfnuyhH7Wbun_jgjYfMBEro&dib_tag=se&keywords=gaming&qid=1779076265&refinements=p_123%3A220854&rnid=85457740011&sprefix=%2Caps%2C313&sr=8-1&th=1');
  // await page.getByRole('heading', { name: 'Razer Viper V4 Pro Wireless' }).locator('#productTitle').click();  // Clicking on the product title.
});

// test.slow(); // triple the timeout 30 seconds