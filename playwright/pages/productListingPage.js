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

    // async openRandomListingPage() {
    //     const firstLevelCategories = (await this.catalogFirstLevelPages.elementHandles()).slice(1);
    //     if (firstLevelCategories.length === 0) {
    //         console.warn('Нет доступных категорий первого уровня');
    //         return;
    //     }
    //     const randomIndexOfFirstLevelCategory = Math.floor(Math.random() * firstLevelCategories.length);
    //     const randomFirstLevelCategory = firstLevelCategories[randomIndexOfFirstLevelCategory];
    //     await randomFirstLevelCategory.waitFor({ state: 'visible' });
    //     await randomFirstLevelCategory.click();
    //
    //     const secondLevelCategories = await this.catalogSecondLevelPages.elementHandles();
    //     if (secondLevelCategories.length > 0) {
    //         if (secondLevelCategories.length > 0) {
    //             const randomIndexOfSecondLevelCategory = Math.floor(Math.random() * secondLevelCategories.length);
    //             const randomSecondLevelCategory = secondLevelCategories[randomIndexOfSecondLevelCategory];
    //             await randomSecondLevelCategory.waitFor({ state: 'visible' });
    //             await randomSecondLevelCategory.click();
    //         }
    //     }
    //
    //     const productListingPages = (await this.productListingPages.elementHandles()).slice(1);
    //     if (productListingPages.length === 0) {
    //         console.warn('Нет доступных страниц товаров');
    //         return;
    //     }
    //     const randomIndexOfProductListingPage = Math.floor(Math.random() * productListingPages.length);
    //     const randomProductListingPage = productListingPages[randomIndexOfProductListingPage];
    //     await randomProductListingPage.waitFor({ state: 'visible' });
    //     await randomProductListingPage.click();
    // }

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