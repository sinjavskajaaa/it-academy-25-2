import { test, expect } from '@playwright/test';
import { Base } from '../pageobjects/base.js'
import { ProductListingPage } from '../pageobjects/productlisting.page.js'
import { CartPage } from '../pageobjects/cart.page.js'
import { FavouritesPage } from '../pageobjects/favourites.page.js'
import { ProductCard } from '../pageobjects/productcard.page.js'
import { ComparePage } from '../pageobjects/compare.page.js'
import { Header } from "../pageobjects/components/header";
import { TAB_REVIEWS_NAME } from '../helpers/constants.js';

test.describe('Listing page 21vek', async () => {

    test.beforeEach(async  ({page}) => {
        const newPage = new Base(page);
        await newPage.navigateToEndpoint();
        await newPage.acceptCookies();
        await newPage.closePromoModal();
    });

    test('Add product to cart from listing page', async ({page}) => {
        const newPage = new Base(page);
        const header = new Header(page);
        const productListingPage = new ProductListingPage(page);
        const cartPage = new CartPage(page);

        await header.catalogButton.click();
        await productListingPage.addProductToCartFromListingPage();
        const productName = await newPage.productNameAddedToCart.innerText();
        await header.cartButton.click();
        await cartPage.closePromoModalOnCartPage();
        await expect(await cartPage.productNameOnCartPage).toHaveText(productName)
    })

    test('Add product to favorites from listing page', async ({page}) => {
        const newPage = new Base(page);
        const header = new Header(page);
        const productListingPage = new ProductListingPage(page);
        const favouritesPage = new FavouritesPage(page);

        await header.catalogButton.click();
        await productListingPage.addProductToFavouritesFromListingPage();
        const productName = await productListingPage.productNameOnListingPage.innerText({timeout: 10000});
        await newPage.navigateToEndpoint('/aside/');
        await expect(await favouritesPage.productNameOnFavouritesPage).toHaveText(productName)
    })

    test('Open product card from listing page', async ({page}) => {
        const newPage = new Base(page);
        const header = new Header(page);
        const productListingPage = new ProductListingPage(page);
        const productCard = new ProductCard(page);

        await header.catalogButton.click();
        await productListingPage.openRandomListingPage();
        const productName = await productListingPage.productNameOnListingPage.innerText();
        await productListingPage.productNameOnListingPage.click();
        await expect(await productCard.productCardName).toHaveText(productName)

    })

    test('Add product to compare from listing page', async ({page}) => {
        const newPage = new Base(page);
        const header = new Header(page);
        const productListingPage = new ProductListingPage(page);
        const comparePage = new ComparePage(page);

        await header.catalogButton.click();
        await productListingPage.addProductToCompareFromListingPage();
        const productName = await productListingPage.productNameOnListingPage.innerText();
        await newPage.compareProductSubmitButton.click({timeout: 10000});
        await expect(await comparePage.productNameOnComparePage).toHaveText(productName)
    })

    test('Open reviews of product from listing page', async ({page}) => {
        const header = new Header(page);
        const productListingPage = new ProductListingPage(page);
        const productCard = new ProductCard(page);

        await header.catalogButton.click();
        await productListingPage.addProductToCompareFromListingPage();
        await productListingPage.reviewCounterOnListingPage.click();
        const activeTabName = await productCard.activeTab.innerText();
        await expect(activeTabName).toContain(TAB_REVIEWS_NAME)
    })
})