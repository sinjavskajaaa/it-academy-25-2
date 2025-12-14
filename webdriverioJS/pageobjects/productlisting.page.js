import {$} from '@wdio/globals'
import Base from './base.js';
import Header from '../pageobjects/components/header.js'

class ProductListingPage extends Base {


    get productNameOnListingPage() {
        return $(`(//span[@class="CardInfo_text__GGroD ListingProduct_infoText__VpOUR Text-module__text Text-module__caption Text-module__ellipsis"])[1]`);
    }

    get firstLevelCategories() {
        return $$(`//span[@class='styles_categoryName__8_D9K styles_categoryName__V55aH']`);
    }

    get secondLevelCategories() {
        return $$(`//a[@class='LinkButton-module__wrapper LinkButton-module__body LinkButton-module__bold LinkButton-module__black CategoriesScreen_categoryTitle__W9cCS']`);
    }

    get productListingPages() {
        return $$(`//a[@class='LinkButton-module__wrapper LinkButton-module__altbody LinkButton-module__bold LinkButton-module__black CategoryTile_categoryTitle__9Fd9f']`);
    }

    get discountTag(){
        return $$(`//div[@class="Label-module__label ListingProductLabels_label__WYOkp Label-module__default Label-module__Red ListingProductLabels_label__WYOkp"]//span[contains(text(), '%')]`);
    }

    async openRandomListingPage() {
        await Header.catalogButton.waitForClickable();
        await Header.catalogButton.click();

        const firstLevelCategoriesList = await this.firstLevelCategories.getElements();
        const randomIndexOfFirstLevelCategory = Math.floor(Math.random() * firstLevelCategoriesList.length);
        const randomFirstLevelCategory = firstLevelCategoriesList[randomIndexOfFirstLevelCategory];
        await randomFirstLevelCategory.waitForClickable();
        await randomFirstLevelCategory.click();

        const secondLevelCategoriesList = await this.secondLevelCategories.getElements();
        if (secondLevelCategoriesList.length > 0) {
            if (secondLevelCategoriesList.length > 0) {
                const randomIndexOfSecondLevelCategory = Math.floor(Math.random() * secondLevelCategoriesList.length);
                const randomSecondLevelCategory = secondLevelCategoriesList[randomIndexOfSecondLevelCategory];
                await randomSecondLevelCategory.waitForClickable();
                await randomSecondLevelCategory.click();
            }
        }

        const productListingPagesList = await this.productListingPages.getElements();
        const randomIndexOfProductListingPage = Math.floor(Math.random() * productListingPagesList.length);
        const randomProductListingPage = productListingPagesList[randomIndexOfProductListingPage];
        await randomProductListingPage.waitForClickable();
        await randomProductListingPage.click();
    }


    async addProductToCartFromListingPage() {
        await this.openRandomListingPage();
        await Base.addToCartIcon.waitForClickable({ timeout: 30000 });
        await Base.addToCartIcon.click();
    }

    async addProductToFavouritesFromListingPage() {
        await this.openRandomListingPage();
        await Base.addToFavouritesIcon.waitForClickable();
        await Base.addToFavouritesIcon.click();
    }

    async addProductToCompareFromListingPage() {
        await this.openRandomListingPage();
        await Base.addToCompareIcon.waitForClickable();
        await Base.addToCompareIcon.click();
    }

}

export default new ProductListingPage();