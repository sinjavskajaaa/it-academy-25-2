import { expect } from '@wdio/globals'
import Base from '../pageobjects/base.js'
import ProductListingPage from '../pageobjects/productlisting.page.js'
import CartPage from '../pageobjects/cart.page.js'
import FavouritesPage from '../pageobjects/favourites.page.js'
import ProductCard from '../pageobjects/productcard.page.js'
import ComparePage from '../pageobjects/compare.page.js'

describe('Listing page 21vek', async function () {

    beforeEach(async () => {
        await Base.navigateToEndpoint('');
    });

    it('Add product to card from listing page', async () => {
        await Base.closeCookies();
        await Base.closePromoModal();
        await ProductListingPage.addProductToCartFromListingPage();
        const productName = await ProductListingPage.productNameOnListingPage.getText();
        await CartPage.openCartPage();
        await CartPage.closePromoModalOnCartPage();
        await expect(await CartPage.productNameOnCartPage).toHaveText(productName)
    })

    it('Add product to favorites from listing page', async () => {
        await ProductListingPage.addProductToFavouritesFromListingPage();
        const productName = await ProductListingPage.productNameOnListingPage.getText();
        await FavouritesPage.openFavouritesPage();
        await expect(await FavouritesPage.productNameOnFavouritesPage).toHaveText(productName)
    })

    it('Open product card from listing page', async () => {
        await ProductListingPage.openRandomListingPage();
        const productName = await ProductListingPage.productNameOnListingPage.getText();
        await ProductListingPage.productNameOnListingPage.click();
        await expect(await ProductCard.productCardName).toHaveText(productName)

    })

    it('Add product to compare from listing page', async () => {
        await ProductListingPage.addProductToCompareFromListingPage();
        const productName = await ProductListingPage.productNameOnListingPage.getText();
        await Base.compareProductSubmitButton.click();
        await expect(await ComparePage.productNameOnComparePage).toHaveText(productName)
    })
})