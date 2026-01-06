import {baseURL} from "../playwright.config";

export default class Base {

    constructor(page) {
        this.page = page;
        this.baseURL = baseURL;
    }

    get acceptCookiesButton() {
        return this.page.locator('//button[@class=\'Button-module__button Button-module__blue-primary\']');
    }

    get closePromoModalButton() {
        return this.page.locator(`//div[@class="popmechanic-close"]`);
    }

    get addToCartButton(){
        return this.page.locator(`(//button[@data-testid="card-basket-action"])[1]`);
    }

    get addToFavouritesIcon() {
        return this.page.locator(`(//button[@data-testid="card-favorites"])[1]`);
    }

    get compareProductSubmitButton() {
        return this.page.locator(`//div[@class="CompareModal_controls__UwJEu"]`);
    }

    get addToCompareIcon() {
        return this.page.locator(`(//button[@data-testid="card-comparison"])[1]`);
    }

    get productNameAddedToCart() {
        return this.page.locator(`(//span[contains(@class,'CardInfo_text__GGroD')])[1]`);
    }

    async navigateToEndpoint(endpoint = '') {
        const url = new URL(endpoint, this.baseURL).toString();
        await this.page.goto(url);
    }

    async acceptCookies() {
        await this.acceptCookiesButton.click();
    }

    async closePromoModal() {
        await this.closePromoModalButton.click();
    }

}

export { Base };