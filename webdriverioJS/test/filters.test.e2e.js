import { expect } from '@wdio/globals'
import Base from '../pageobjects/base.js'
import ProductListingPage from '../pageobjects/productlisting.page.js'
import Filters from "../pageobjects/components/filters.js";
import { MIN_PRICE,MAX_PRICE } from '../helpers/constants.js';

describe('Filters 21vek', async function () {
    beforeEach(async () => {
        await Base.navigateToEndpoint('');
    });

    it('Filter products by Manufacturer on listing page', async () => {
        await Base.closeCookies();
        await Base.closePromoModal();
        await ProductListingPage.openRandomListingPage();
        const filterName = await Filters.nameOfFilterManufacturers.getText();
        await Filters.checkboxFilterManufacturers.click();
        const productNames = await Filters.productNamesOnListingPageAfterFiltration;
        const productNamesTexts = await Promise.all(await productNames.map(productName => productName.getText()));
        productNamesTexts.forEach((productNamesText) => {
            expect(productNamesText).toContain(filterName);
        })
    })

    it('Sort products from chip to expensive on listing page', async () => {
        await ProductListingPage.openRandomListingPage();
        const productPricesNumbers = await Filters.getPricesDiapasonFromMinToMax(MIN_PRICE, MAX_PRICE);
        expect(productPricesNumbers.every(num => num >= MIN_PRICE && num <= MAX_PRICE)).toBe(true);
    })

    it('Sort products by special offer on listing page', async () => {
        await ProductListingPage.openRandomListingPage();
        await Filters.checkboxFilterSpecialOffers.click();
        const productsWithDiscount = await ProductListingPage.discountTag;
        const productWithDiscountTags = await Promise.all(await productsWithDiscount.map(productWithDiscount => productWithDiscount.getText()));
        productWithDiscountTags.forEach((productWithDiscount) => {
            expect(productWithDiscount).toHaveText("%");
        })
    })
});