import {Base} from "./base";

class CartPage extends Base {

    get productNameOnCartPage () {
        return this.page.locator(`.BasketItem_title__MzCQ9`)
    }

    get promoModalOnCartPage () {
        return this.page.locator(`.UnicefModal_closeBtn__QmkH_`);
    }

    async closePromoModalOnCartPage (){
        await this.promoModalOnCartPage.waitFor({ state: 'visible' });
        await this.promoModalOnCartPage.click();
    }
}

export { CartPage };