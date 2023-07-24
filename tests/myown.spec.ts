import { expect, test } from '@playwright/test';

test.describe('myOwn',()=>{
test('Verify text in page using text selector', async ({ page }) => {

    await page.goto('https://www.philips.co.in/');

    const Philips = page.locator('text=Healthy lifestyles start here.​');
     expect(Philips).toBeVisible;

})

test('Verify text in page using text and css selector', async ({ page }) => {

    await page.goto('https://www.philips.co.in/');
    //await page.pause();
    const Philips = page.locator('#n02v3 << text=Sound&vision​'); 
    await page.pause();
    expect (Philips).toBeEnabled;
        await page.pause();
    page.getByRole('listitem').filter({ hasText: 'Rs.2,199.00* OneBlade Face QP2525/10 Overall rating 4.7/ 5 (705) View product' }).getByRole('link', { name: 'View product' }).click();
    await page.pause();


})

test('Verify text in other page using text and css selector', async ({ page }) => {
    await page.goto('https://demo.guru99.com/');
    await page.pause();
    page.getByRole('button', { name: 'Submit' }).click(); 
    await page.pause();
    
})
test('Verify search icon visibilty using xpath', async ({ page }) => {
    await page.goto('https://www.philips.co.in/');

    const Philips = page.locator('//span[@class="pv-icon pv-icon-search"]​');
     expect(Philips).toBeVisible;
})

test('Enter input into a textbox', async({page}) => {
    await page.goto('https://na.account.amazon.com/ap/signin?ie=UTF8&clientContext=132-5850572-6943913&openid.pape.max_auth_age=0&use_global_authentication=false&enableGlobalAccountCreation=1&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&marketPlaceId=ATVPDKIKX0DER&signedMetricIdentifier=pjdsmDnaXhj%2FNbw9hCvWIQvTgX0htu%2BjAbCBVOtDWHM%3D&language=en_IN&pageId=lwa&arb=b09f3bcf-e644-4ffa-b0ed-0c8908e62bd1&openid.return_to=https%3A%2F%2Fna.account.amazon.com%2Fap%2Foa%3FmarketPlaceId%3DATVPDKIKX0DER%26arb%3D4340e11f-4744-46c2-b307-7418317adbe6%26language%3Den_IN&metricIdentifier=amzn1.application.7ff8a2be5dae490b9914b4f430ca5c4c&openid.assoc_handle=amzn_lwa_na&openid.mode=checkid_setup&openid.ns.pape=http%3A%2F%2Fspecs.openid.net%2Fextensions%2Fpape%2F1.0&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0');
    await page.pause();
    page.getByLabel('Email or mobile phone number').fill('kasula.jayanthi@gmail.com');
    await page.pause();
    page.getByLabel('password').fill('Vanishyam143');
    await page.pause();
    page.getByRole('button', { name: 'Sign In' }).click();
    await page.pause();
    
})

test('Enter text in textbook', async({page}) => {
    await page.goto('https://intapidm.infosysapps.com/auth/realms/careersite/protocol/openid-connect/auth?client_id=careersite&redirect_uri=https%3A%2F%2Fcareer.infosys.com%2Fjobs%2Fprivacy-consent&state=b0cd6e7b-df31-42d2-88bf-410fcab9619a&response_mode=fragment&response_type=code&scope=openid&nonce=27488ecd-9f16-43d5-9df8-51f592f827fa');
    await page.pause();
    page.locator('#username').click();
    await page.pause();
    page.locator('#username').fill('kasula.jayanthi@gmail.com');
    await page.pause();
    page.getByLabel('password').fill('Mypassword@123');
    await page.pause();
    page.getByRole('button', { name: 'Login' });
    await page.pause();
})

const path = require('path');
test.describe('Upload a file', () => {
    test('should upload a test file', async ({ page }) => {

        //open url
        await page.goto("https://demo.guru99.com/test/upload/");
        //provide test file path
        const filePath = path.join(__dirname, '../data/puppy1.jpg');
        //upload test file
        await page.setInputFiles('input#uploadfile_0', filePath);
        await page.pause();
        //click checkbox
        await page.locator('#terms').click();
        await page.pause();
        //click the submit button
        page.getByRole('button', { name: 'Submit File' }).click();
        await page.pause();
        //assertion
        await expect(page.getByText('1 file has been successfully uploaded.'))
        .toHaveText('1 file has been successfully uploaded.');
        await page.pause();
    })
})

// eslint-disable-next-line @typescript-eslint/no-var-requires
const path1 = require('path');
test.describe('Upload a file', () => {
    test('should upload a test file with wait', async ({ page }) => {

        //open url
        await page.goto("https://demo.guru99.com/test/upload/");
        //provide test file path
        const filePath = path1.join(__dirname, '../data/puppy1.jpg');
        //upload test file
        await page.setInputFiles('input#uploadfile_0', filePath);
        
        //click checkbox
        await page.locator('#terms').click();
       
        //click the submit button
        page.getByRole('button', { name: 'Submit File' }).click();
        //await page.waitForTimeout(5000);
        
        //wait for condition
         await page.getByText('1 file has been successfully uploaded.')
        .waitFor({ state: 'visible', timeout: 5000});
        
        //assertion
        //await expect(page.getByText('1 file has been successfully uploaded.')).toContainText('1 file has been successfully uploaded.',{timeout: 10000});
    })
})
})

