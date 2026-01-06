import Base from './base.js';

class ProductListingPage extends Base {

    get productNameOnListingPage() {
        return this.page.locator(`(//span[@class="CardInfo_text__GGroD ListingProduct_infoText__VpOUR Text-module__text Text-module__caption Text-module__ellipsis"])[1]`);
    }

    get firstLevelCategories() {
        return this.page.locator(`//span[@class='styles_categoryName__8_D9K styles_categoryName__V55aH']`);
    }

    get secondLevelCategories() {
        return this.page.locator(`//a[@class='LinkButton-module__wrapper LinkButton-module__body LinkButton-module__bold LinkButton-module__black CategoriesScreen_categoryTitle__W9cCS']`);
    }

    get productListingPages() {
        return this.page.locator(`//a[@class='LinkButton-module__wrapper LinkButton-module__altbody LinkButton-module__bold LinkButton-module__black CategoryTile_categoryTitle__9Fd9f']`);
    }

    get discountTag() {
        return this.page.locator(`//div[@class="Label-module__label ListingProductLabels_label__WYOkp Label-module__default Label-module__Red ListingProductLabels_label__WYOkp"]//span[contains(text(), '%')]`);
    }

    get reviewCounterOnListingPage(){
        return this.page.locator(`(//span[@data-testid="card-review-count"])[1]`);
    }

    async openRandomListingPage() {

        const firstLevelCategoriesList = await this.firstLevelCategories.elementHandles();
        const randomIndexOfFirstLevelCategory = Math.floor(Math.random() * firstLevelCategoriesList.length);
        const randomFirstLevelCategory = firstLevelCategoriesList[randomIndexOfFirstLevelCategory];
        await randomFirstLevelCategory.isEnabled();
        await randomFirstLevelCategory.click({timeout: 10000});

        const secondLevelCategoriesList = await this.secondLevelCategories.elementHandles();
        if (secondLevelCategoriesList.length > 0) {
            if (secondLevelCategoriesList.length > 0) {
                const randomIndexOfSecondLevelCategory = Math.floor(Math.random() * secondLevelCategoriesList.length);
                const randomSecondLevelCategory = secondLevelCategoriesList[randomIndexOfSecondLevelCategory];
                await randomSecondLevelCategory.isEnabled();
                await randomSecondLevelCategory.click({timeout: 10000});
            }
        }

        const productListingPagesList = await this.productListingPages.elementHandles();
        const randomIndexOfProductListingPage = Math.floor(Math.random() * productListingPagesList.length);
        const randomProductListingPage = productListingPagesList[randomIndexOfProductListingPage];
        await randomProductListingPage.isEnabled();
        await randomProductListingPage.click({timeout: 10000});
    }

    async addProductToCartFromListingPage() {
        await this.openRandomListingPage();
        await this.addToCartButton.click();
    }

    async addProductToFavouritesFromListingPage() {
        await this.openRandomListingPage();
        await this.addToFavouritesIcon.isEnabled();
        await this.addToFavouritesIcon.click();
    }

    async addProductToCompareFromListingPage() {
        await this.openRandomListingPage();
        await this.addToCompareIcon.isEnabled();
        await this.addToCompareIcon.click();
    }

}

export { ProductListingPage };