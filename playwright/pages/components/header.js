import { Base } from "../base";

class Header extends Base {

    get logo () {
        return this.page.locator('.logotype');
    }

    get locationButton () {
        return this.page.locator('.styles_localityBtn__qrGFQ');
    }

    get payApartButton () {
        return this.page.locator('.styles_partlyPay__9rxK_');
    }

    get forBusinessButton () {
        return this.page.locator('.styles_business__n9GjQ');
    }

    get forCustomersButton () {
        return this.page.locator('.navMenuItemMore');
    }

    get moreContactOptionsFromHeader () {
        return this.page.locator('//div[@class="styles_communicationItem__IUjz2"]');
    }

    get feedbackButton () {
        return this.page.locator(`(//*[@class='styles_listItem__ZxDwC styles_communicationListItem___jHWt'])[4]`);
    }

    get titleOfFeedbackModalWindow () {
        return this.page.locator('.Form-module__formTitle');
    }

    get catalogButton () {
        return this.page.locator('.styles_catalogIcon__JlC_0');
    }

    get favouritesButton () {
        return this.page.locator(`//*[@class='headerFavoritesBox']`);
    }

    get cartButton () {
        return this.page.locator('.headerCart');
    }

    get topNavPromoLinks () {
        return this.page.locator('.styles_promoItem__aolWq');
    }

    async getDropDownForCustomersOption(optionName) {
        return this.page.locator(`//div[text()='${optionName}']`);
    }

    async openFeedbackModalWindow () {
        await this.moreContactOptionsFromHeader.click();
        await this.feedbackButton.click();
    }

}

export { Header };