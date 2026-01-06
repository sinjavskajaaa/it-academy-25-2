import { test, expect } from '@playwright/test';
import Base from '../pageobjects/base.js'
import { CartPage } from '../pageobjects/cart.page.js'
import { FavouritesPage } from '../pageobjects/favourites.page.js'
import { Header } from "../pageobjects/components/header.js";
import { EMPTY_CART_MESSAGE, PROMO_CODE, AUTH_GET_PARAMETER } from '../helpers/constants.js';

test.describe('Cart page 21vek', async () => {

    test.beforeEach(async  ({page}) => {
        const newPage = new Base(page);
        await newPage.navigateToEndpoint();
        await newPage.acceptCookies();
        await newPage.closePromoModal();
    });

    test('Add product to favorites from cart page', async ({ page}) => {
        const newPage = new Base(page);
        const header = new Header(page);
        const favouritesPage = new FavouritesPage(page);
        const cartPage = new CartPage(page);

        await newPage.addToCartButton.click();
        await header.cartButton.click();
        await cartPage.closePromoModalOnCartPage();
        await cartPage.addToFavouritesButton.click();
        const productName = await cartPage.productNameOnCartPage.innerText({timeout: 10000});
        await newPage.navigateToEndpoint('/aside/');
        await expect(await favouritesPage.productNameOnFavouritesPage).toHaveText(productName)
    })

    test('Delete product from cart page', async ({ page}) => {
        const newPage = new Base(page);
        const header = new Header(page);
        const cartPage = new CartPage(page);

        await newPage.addToCartButton.click();
        await header.cartButton.click();
        await cartPage.closePromoModalOnCartPage();
        await cartPage.deleteProductFromCart();
        await expect(await cartPage.emptyCartMessage).toHaveText(EMPTY_CART_MESSAGE)
    })

    test('Add product to cart throw counter on cart page', async ({ page}) => {
        const newPage = new Base(page);
        const header = new Header(page);
        const cartPage = new CartPage(page);

        await newPage.addToCartButton.click();
        await header.cartButton.click();
        await cartPage.closePromoModalOnCartPage();
        await cartPage.plusCounterIcon.click();
        const productCounter = await cartPage.getCounterValue();
        const totalCounter = await cartPage.getTotalCounterValue();
        await expect(productCounter).toEqual(totalCounter);
    })

    test('Add promocode to cart on cart page', async ({ page}) => {
        const newPage = new Base(page);
        const header = new Header(page);
        const cartPage = new CartPage(page);

        await newPage.addToCartButton.click();
        await header.cartButton.click();
        await cartPage.closePromoModalOnCartPage();
        await cartPage.addPromoCodeToCart(PROMO_CODE);
        const promoCodeTagText = await cartPage.promoCodeTag.innerText();
        await expect(promoCodeTagText).toContain(PROMO_CODE);
        await expect(await cartPage.discountInformation).toBeVisible();
    })

    test('Redirect to authorization when trying to checkout anonymously', async ({ page}) => {
        const newPage = new Base(page);
        const header = new Header(page);
        const cartPage = new CartPage(page);

        await newPage.addToCartButton.click();
        await header.cartButton.click();
        await cartPage.closePromoModalOnCartPage();
        await cartPage.basketConfirmationButton.click();
        const currentURL = page.url();
        await expect(currentURL).toContain(AUTH_GET_PARAMETER);
    })

})