import {Page, Locator } from "@playwright/test";

class HomePage {


    page: Page;
    getStartedBtn: Locator;
    headingText: Locator;
    homeLink: Locator;
    contactForm1: Locator;
    static GetStartedBtn: Locator;
    static headingText: Locator;
    static homeLink: Locator;
    contactForm2: Locator;
    contactForm3: Locator;
    contactForm4: Locator;
    static contactForm1: Locator;
    static contactForm2: Locator;
    static contactForm3: Locator;
    static contactForm4: Locator;
    successAlert: Locator;
    static successAlert: Locator;
    static getStartedBtn: Locator;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    static page: any;

    constructor(page: Page) {
        this.page = page;
        this.getStartedBtn = page.getByRole('link', { name: 'get started', exact: true })
        this.headingText = page.locator('text=Think different, Make different.')
        this.homeLink = page.locator('#primary-menu >> text=Home')
        this.contactForm1 = page.getByLabel('Name *')
        this.contactForm2 = page.getByLabel('Email *')
        this.contactForm3 = page.getByLabel('Phone *')
        this.contactForm4 = page.getByLabel('Message')
        this.successAlert = page.getByText('Thanks for contacting us! We will be in touch with you shortly')
    }
async navigate() {
    await this.page.goto('/');
}

async navigate1(){
    await this.page.goto('/contact');
}

}
//So ee paina unnadi mana basic page template annamaata.Deenne manam 
//page ani ekkada use chesthamo akada vaduthaamu.
//First manam em chestham ante manam class create chesi class export chesthamu.
//tarvatha oka constructor create chesi through aa constructor page ni access chesthaamu.
export default HomePage;
