import { test, expect } from '@playwright/test';
import Base from '../pageobjects/base.js';
import { ProductListingPage } from '../pageobjects/productlisting.page.js'
import { Filters } from "../pageobjects/components/filters.js";
import { Header } from '../pageobjects/components/header.js';
import { MIN_PRICE,MAX_PRICE } from '../helpers/constants.js';


test.describe('Filters 21vek', async () => {

    test.beforeEach(async  ({page}) => {
        const newPage = new Base(page);
        await newPage.navigateToEndpoint();
        await newPage.acceptCookies();
        await newPage.closePromoModal();
    });

    test('Filter products by Manufacturer on listing page', async ({page}) => {
        const productListingPage = new ProductListingPage(page);
        const filters = new Filters(page);
        const header = new Header(page);

        await header.catalogButton.click();
        await productListingPage.openRandomListingPage();
        const filterName = await filters.nameOfFilterManufacturers.innerText();
        await filters.checkboxFilterManufacturers.click();
        const productNames = await filters.productNamesOnListingPageAfterFiltration.elementHandles();
        const productNamesTexts = await Promise.all(productNames.map(productName => productName.innerText()));
        for (const text of productNamesTexts) {
            await expect(text).toContain(filterName);
        }
    })

    test('Sort products from chip to expensive on listing page', async ({page}) => {
        const productListingPage = new ProductListingPage(page);
        const filters = new Filters(page);
        const header = new Header(page);

        await header.catalogButton.click();
        await productListingPage.openRandomListingPage();
        const productPricesNumbers = await filters.getPricesDiapasonFromMinToMax(MIN_PRICE, MAX_PRICE);
        expect(productPricesNumbers.every(num => num >= MIN_PRICE && num <= MAX_PRICE)).toBe(true);
    })

    test('Sort products by special offer on listing page', async ({page}) => {
        const filters = new Filters(page);
        const header = new Header(page);
        const productListingPage = new ProductListingPage(page);

        await header.catalogButton.click();
        await productListingPage.openRandomListingPage();
        await filters.checkboxFilterSpecialOffers.click();
        const productsWithDiscount = await productListingPage.discountTag.elementHandles();
        const productWithDiscountTags = await Promise.all(productsWithDiscount.map(product => product.innerText()));
        for (const tagText of productWithDiscountTags) {
            await expect(tagText).toContain('%');
        }
    })
});