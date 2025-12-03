import { test, expect } from '@playwright/test';
import { Base } from '../pages/base';
import { Header } from '../pages/components/header';
import { Login } from '../pages/components/login';
import { Search } from '../pages/components/search';
import { CartPage } from '../pages/cartPage';
import { FavouritesPage } from '../pages/favouritesPage';
import { ProductCard } from '../pages/productCard';
import { ProductListingPage } from '../pages/productListingPage';
import { WRONG_CREDENTIAL_NOTIFICATION, CREDENTIALS,TITLE_FEEDBACK_MODAL_WINDOW } from '../helpers/constants';

test.describe('21vek', async () => {

    test.beforeEach(async ({page}) => {
        const newPage = new Base(page);
        await newPage.navigateToEndpoint();
        await newPage.closeCookies();
        await newPage.closePromoModal();
    });

    test.skip('Get notification \'Проверьте электронную почту или зарегистрируйтесь\' after login with invalid credentials', async ( {page} ) => {
        const login = new Login(page);
        await login.openLoginModalWindow();
        await login.loginWithEmailAndPassword(CREDENTIALS.invalidCredentials.email,CREDENTIALS.invalidCredentials.password);
        await expect(await login.errorMessage).toHaveText(WRONG_CREDENTIAL_NOTIFICATION)
    })

    test('Open product card via search by code', async ({ page}) => {
        const search = new Search(page);
        const productCard = new ProductCard(page);
        await search.findProductByCode(`10.019.147`);
        await expect(await productCard.productCardCode).toContainText(`10.019.147`)
    })

    test.skip('Add product to card from listing page', async ({ page}) => {
        const header = new Header(page);
        const productListingPage = new ProductListingPage(page);
        const cartPage = new CartPage(page);
        await header.catalogButton.click();
        await productListingPage.addProductToCart();
        const productName = await productListingPage.productNameOnListingPage.innerText();
        await header.cartButton.click();
        await cartPage.closePromoModalOnCartPage();
        await expect(await cartPage.productNameOnCartPage).toHaveText(productName)
    })

    test.skip('Add product to favorites from listing page', async ({ page}) => {
        const header = new Header(page);
        const productListingPage = new ProductListingPage(page);
        const favouritesPage = new FavouritesPage(page);
        await header.catalogButton.click();
        await productListingPage.addProductToFavourites();
        const productName = await productListingPage.productNameOnListingPage.innerText();
        await header.favouritesButton.click();
        await expect(await favouritesPage.productNameOnFavouritesPage).toHaveText(productName)
    })

    test.skip('Open feedback modal window', async ({ page}) => {
        const header = new Header(page);
        await header.openFeedbackModalWindow();
        await expect(await header.titleOfFeedbackModalWindow).toContainText(TITLE_FEEDBACK_MODAL_WINDOW)
    })
})