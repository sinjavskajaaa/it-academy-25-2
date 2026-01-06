import Base from '../base.js'

class Filters extends Base {

    get nameOfFilterManufacturers () {
        return this.page.locator('(//div[@class=\'ListingOption_labelText__DI9DJ Text-module__text Text-module__caption\'])[1]');
    }

    get productNamesOnListingPageAfterFiltration(){
        return this.page.locator(`//span[@class="CardInfo_text__GGroD ListingProduct_infoText__VpOUR Text-module__text Text-module__caption Text-module__ellipsis"]`);
    }

    get productPricesOnListingPageAfterFiltration(){
        return this.page.locator(`//span[@class="Price-module__price Text-module__text Text-module__large Text-module__bold"]`);
    }

    get checkboxFilterManufacturers () {
        return this.page.locator('(//div[@class=\'ListOfProducers_listContainer__haGh9\']//span[@class=\'SvgIcon-module__base BaseCheckBox-module__uncheckedIcon styles-module__icon16\'])[1]');
    }

    get inputMinPrice(){
        return this.page.locator('#minPrice');
    }

    get inputMaxPrice(){
        return this.page.locator('#maxPrice');
    }

    get checkboxFilterSpecialOffers(){
        return this.page.locator(`//span[contains(text(), 'Товары со скидкой')]`);
    }

    async fillMinPriceAndMaxPriceInFilter(minPrice, maxPrice) {
        if(minPrice){
            await this.inputMinPrice.isVisible();
            await this.inputMinPrice.fill(minPrice);
        }
        if(maxPrice){
            await this.inputMaxPrice.isVisible();
            await this.inputMaxPrice.fill(maxPrice);
        }
    }

    async getPricesDiapasonFromMinToMax(minPrice, maxPrice) {
        await this.fillMinPriceAndMaxPriceInFilter(minPrice, maxPrice);
        const productPrices = await this.productPricesOnListingPageAfterFiltration.elementHandles();

        return await Promise.all(
            productPrices.map(async (productPrice) => {
                const text = await productPrice.innerText();
                return parseFloat(text);
            })
        );
    }

}

export { Filters };