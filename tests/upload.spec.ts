import { test, expect } from '@playwright/test';
import CartPage from '../pages/cart.page';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

test.describe('Upload File', () => {
  let cartPage: CartPage;

const fileName = ['puppy.jpg','puppy1.jpg']

for (const name of fileName) {

  //kinda manam test dantlo backtick (`) idi vaadamu. deenni manam oka string lo internal ga oka expression add cheyadaniki use chesthaamu.
// eslint-disable-next-line playwright/expect-expect
test(`should upload a ${name} file`, async ({ page }) => {
    cartPage = new CartPage(page);

    // Open url
    await page.goto("/cart/");

    // provide test file path
    const filePath = path.join(__dirname, `../data/${name}`);

    // upload test file
    await page.setInputFiles('input#upfile_1', filePath);

    // click the submit button
    await page.locator('#upload_1').click();
    await page.waitForTimeout(10000);
    // hardcoded sleep - WRONG WAY
    // await page.waitForTimeout(5000);

    // wait for condition
    // await page.locator('#wfu_messageblock_header_1_1')
    //   .waitFor({ state: 'visible', timeout: 10000 })
    cartPage.uploadComponent().uploadFile(filePath);

    // assertion
    // eslint-disable-next-line playwright/valid-expect
   // expect(page.locator('#wfu_messageblock_header_1_1'))
    //await expect(cartPage.uploadComponent().successTxt)
     // .toContainText('File ${name} uploaded successfully', {timeout: 10000});
  })
}
  test('should upload a test file on a hidden input field', async ({ page }) => {
    // Open url
    await page.goto("/cart/");
    // provide test file path
    const filePath = path.join(__dirname, '../data/K-Bro Video.mp4');
    
    // DOM manipulation
    await page.evaluate(() => {
      const selector = document.querySelector('input#upfile_1');
      if (selector) {
        selector.className = ''
      }
    })
    // upload test file
    await page.setInputFiles('input#upfile_1', filePath); // throws error
    // click the submit button
    await page.locator('#upload_1').click();
    // assertion
    await expect(page.locator('#wfu_messageblock_header_1_1'))
      .toContainText('K-Bro-Video.mp4 uploaded successfully');
  })
})