import { test, expect } from '@playwright/test';
import HomePage from '../pages/home.page';


test.describe('Home', () => {
    let homePage: HomePage; 

    test.beforeEach(async ({ page }) => {
        homePage = new HomePage(page); 
        await homePage.navigate() 
    })
    

    test('Open HomePage and verify title', async ({ page }) => {
    
    //open url(e line manaki webdriver laaga work avthundi)
    await page.goto('https://practice.automationbro.com/');
    
    //await keyword manaki complete line execute ayedaaka wait chesela chesthundi.
    //Await use cheyakapothey manaki oka line execution complete ga avakamunde next line ki pothadi.
    //async and await rendu undali okati miss ayina error vasthundi
    //verify title(Kinda line same manaki selenium lo title assertion laaga work avthundi)
    
     await expect(page).toHaveTitle('Practice E-Commerce Site – Automation Bro');
    })

    //manam await use cheyala vadda anedi telvali ante edaina 
    //keyword meeda hover chesinapudu manaki akkada promise ane word unte await pakka vadali
    //await anedi epudu manam line starting lo vaadali

    // eslint-disable-next-line playwright/no-skipped-test
    test.skip('Open About and verify Title', async ({ page })=> {
        homePage = new HomePage(page)
        await homePage.navigate()
    
        await expect(page).toHaveTitle('Practice E-Commerce Site – Automation Bro')
    })

    test('Click get started button using css selector', async ({ page }) => {
    
       // await page.pause()
        //click button
       // await page.locator('#get-started').click();
       homePage.getStartedBtn.click({timeout:5000})

        //verify url has #get-started
        await expect(page).toHaveURL('https://practice.automationbro.com/#get-started')
        await expect(page).toHaveURL(/.*#get-started/)
        //paina line oka url lo oka part
    })

    // eslint-disable-next-line no-empty-pattern
test('Verify text using text selector', async ({ }) => {
     
        //find text locator 
        //epudu text locator use chesina manam use cheyalsina text anedi epudu unique undali
       const headingText =  homePage.headingText
        
        //verify heading text is visible
        await expect(headingText).toBeHidden({timeout: 10000});
    })


    // eslint-disable-next-line @typescript-eslint/no-unused-vars
test('Verify home link using text and css selector', async ({ page }) => {
    
    // eslint-disable-next-line prefer-const
    //find home text
    //ikada 2 frwd arrows add chesam daanivalla manam playwright ki first css tarvata text use chesi find cheyamani chepthunnam
   const homeText =  homePage.homeLink;
    
    //verify home text is visible
    await expect(homeText).toBeEnabled({timeout: 10000});
})


test('Fill contact form and verify success message', async ({ page }) => {
    
    
    // open contact page
    await homePage.navigate1()

    // eslint-disable-next-line playwright/no-page-pause
    await page.pause()
    // fill out the input fields
    await homePage.contactForm1.fill('Test Name')
    await homePage.contactForm2.fill('test@mail.com')
    await homePage.contactForm3.fill('134567864')
    await homePage.contactForm4.fill('This is a text msg')

    //add a soft assertion
    await expect.soft(page.locator('.contact-message textarea')).not.toHaveText("Fail test message")
   
    // click submit
    await page.locator('button[type=submit]').click()

    //expect(test.info().errors.length).toBeLessThan(1)

    //verify success message
    const successAlert = homePage.successAlert
    await expect(successAlert).toHaveText('Thanks for contacting us! We will be in touch with you shortly',{timeout:10000})

    })
})

