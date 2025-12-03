const { baseURL } = require('../playwright.config');

class Base {

    constructor(page) {
        this.page = page;
        this.baseURL = baseURL;
    }

   get cookiesButton() {
       return this.page.locator('//button[@class=\'Button-module__button Button-module__blue-primary\']');
   }

    get closePromoModalButton() {
        return this.page.locator(`//div[@class="popmechanic-close"]`);
    }

    async navigateToEndpoint(endpoint = '') {
        const url = new URL(endpoint, this.baseURL).toString();
        await this.page.goto(url);
    }

    async closeCookies() {
      await this.cookiesButton.waitFor({ state: 'visible' });
      await this.cookiesButton.click();
   }

    async closePromoModal() {
        await this.closePromoModalButton.waitFor({ state: 'visible' });
        await this.closePromoModalButton.click();
    }
}

export { Base };
