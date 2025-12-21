const { browser } = require('@wdio/globals')

module.exports = class Base {


    static get acceptCookiesButton() {
        return $('//button[@class=\'Button-module__button Button-module__blue-primary\']');
    }

    static get closePromoModalButton() {
        return $(`//div[@class="popmechanic-close"]`);
    }

    static async acceptCookies() {
       await this.acceptCookiesButton.isExisting();
       await this.acceptCookiesButton.click();
    }

    static async closePromoModal() {
        await this.closePromoModalButton.isExisting();
        await this.closePromoModalButton.click();
    }

    static async navigateToEndpoint(endpoint = '') {
        return browser.url(`https://www.21vek.by/${endpoint}`)
    }
}
