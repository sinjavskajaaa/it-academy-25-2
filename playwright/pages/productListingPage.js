import {Base} from "./base";

class ProductListingPage extends Base {

    get catalogFirstLevelPage() {
        return this.page.locator(`(//*[contains(@class, 'styles_categoryName__V55aH')])[1]`);
    }

    get catalogSecondLevelPage() {
        return this.page.locator(`(//div[@class='CategoriesScreen_categoryHeadline__kzk6a'])[1]`);
    }

    get productListingPage() {
        return this.page.locator(`(//span[@class='CategoryTile_nowrap__3I58R'])[1]`);
    }

    get productMiniCards() {
        return this.page.locator(`//div[@class='ListingProduct_product__WBPsd']`);
    }

    get addToCartButton () {
        return this.page.locator(`(//button[@data-testid="card-basket-action" and @class="Button-module__button CardBasketBlock_container__Reuou ListingProduct_basketBlock__Bg3cG Button-module__pink-primary Button-module__small Button-module__leftIcon"])[1]`);
    }

    get addToFavouritesButton () {
        return this.page.locator(`(//button[@data-testid="card-favorites"])[1]`);
    }

    get addToFavouritesNotification () {
        return this.page.locator(`'.Snackbar-module__snackbarContent'`);
    }

    get productNameOnListingPage() {
        return this.page.locator(`(//span[@class="CardInfo_text__GGroD ListingProduct_infoText__VpOUR Text-module__text Text-module__caption Text-module__ellipsis"])[1]`);
    }

    async openFirstLevelCategoryPage() {
        await this.catalogFirstLevelPage.click();
    }

    async openSecondLevelCategoryPage() {
        await this.openFirstLevelCategoryPage();
        await this.catalogSecondLevelPage.click();
    }

    async openListingPage() {
        await this.catalogFirstLevelPage.click();
        await this.catalogSecondLevelPage.click();
        await this.productListingPage.click();
    }

    async addProductToCart() {
        await this.openListingPage();
        await this.addToCartButton.click();
    }

    async addProductToFavourites() {
        await this.openListingPage();
        await this.addToFavouritesButton.click();
    }

}

export { ProductListingPage };
