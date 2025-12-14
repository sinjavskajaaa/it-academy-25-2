import { $, browser } from '@wdio/globals'

export default class Base {

    static get closeCookiesButton() {
        return $('//button[@class=\'Button-module__button Button-module__blue-primary\']');
    }

    static get closePromoModalButton() {
        return $(`//div[@class="popmechanic-close"]`);
    }

    static get addToCartIcon() {
        return $(`(//button[@class="Button-module__button CardBasketBlock_container__Reuou ListingProduct_basketBlock__Bg3cG Button-module__pink-primary Button-module__small Button-module__leftIcon"]//div[@class="Button-module__iconStart"])[1]`);
    }

    static get addToFavouritesIcon() {
        return $(`(//button[@data-testid="card-favorites"])[1]`);
    }

    static get compareProductSubmitButton() {
        return $(`//a[@class="Button-module__button Button-module__blue-primary Button-module__small"]`);
    }

    static get addToCompareIcon() {
        return $(`(//button[@data-testid="card-comparison"])[1]`);
    }

    static async closeCookies() {
        await this.closeCookiesButton.waitForClickable();
        await this.closeCookiesButton.click();
    }

    static async closePromoModal() {
        await this.closePromoModalButton.waitForClickable();
        await this.closePromoModalButton.click();
    }

    static async navigateToEndpoint(endpoint = '') {
        return browser.url(`https://www.21vek.by/${endpoint}`)
    }

}

