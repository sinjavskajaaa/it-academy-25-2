import { $ } from '@wdio/globals'
import Base from './base.js';
import Header from '../pageobjects/components/header.js'

class CartPage extends Base {

    get productNameOnCartPage () {
        return $(`.BasketItem_title__MzCQ9`);
    }

    get promoModalOnCartPage () {
        return $(`.UnicefModal_closeBtn__QmkH_`);
    }

    async closePromoModalOnCartPage (){
        await this.promoModalOnCartPage.waitForClickable();
        await this.promoModalOnCartPage.click();
    }

    async openCartPage () {
        await Header.cartButton.waitForClickable();
        await Header.cartButton.click();
    }

}

export default new CartPage();