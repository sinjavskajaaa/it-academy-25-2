import {$} from '@wdio/globals'
import Base from '../base.js';

class Filters extends Base {

    get nameOfFilterManufacturers () {
        return $('(//div[@class=\'ListingOption_labelText__DI9DJ Text-module__text Text-module__caption\'])[1]');
    }

    get productNamesOnListingPageAfterFiltration(){
        return $$(`//span[@class="CardInfo_text__GGroD ListingProduct_infoText__VpOUR Text-module__text Text-module__caption Text-module__ellipsis"]`);
    }

    get productPricesOnListingPageAfterFiltration(){
        return $$(`//span[@class="Price-module__price Text-module__text Text-module__large Text-module__bold"]`);
    }

    get checkboxFilterManufacturers () {
        return $('(//div[@class=\'ListOfProducers_listContainer__haGh9\']//span[@class=\'SvgIcon-module__base BaseCheckBox-module__uncheckedIcon styles-module__icon16\'])[1]');
    }

    get inputMinPrice(){
        return $('#minPrice');
    }

    get inputMaxPrice(){
        return $('#maxPrice');
    }

    get checkboxFilterSpecialOffers(){
        return $(`//div[contains(text(), 'Товары со скидкой')]`);
    }

    async fillMinPriceAndMaxPriceInFilter(minPrice, maxPrice) {
        if(minPrice){
            await this.inputMinPrice.waitForDisplayed();
            await this.inputMinPrice.setValue(minPrice);
        }
        if(maxPrice){
            await this.inputMaxPrice.waitForDisplayed();
            await this.inputMaxPrice.setValue(maxPrice);
        }
    }

    async getPricesDiapasonFromMinToMax(minPrice, maxPrice) {
        await this.fillMinPriceAndMaxPriceInFilter(minPrice, maxPrice);

        const productPrices = this.productPricesOnListingPageAfterFiltration;
        const values = await Promise.all(await productPrices.map(productPrice => productPrice.getText()));
        return values.map(text => parseFloat(text));
    }

}

export default new Filters();