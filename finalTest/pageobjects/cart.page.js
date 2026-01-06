import Base from './base.js';

class CartPage extends Base {

    get productNameOnCartPage() {
        return this.page.locator(`.BasketItem_title__MzCQ9`);
    }

    get counterValue() {
        return this.page.locator(`div.Counter_counter__ftQCi`);
    }

    get promoModalOnCartPage() {
        return this.page.locator(`.UnicefModal_closeBtn__QmkH_`);
    }

    get addToFavouritesButton() {
        return this.page.locator(`button[aria-label="Избранное"]`);
    }

    get deleteFromCartButton() {
        return this.page.locator(`button[aria-label="Удалить товар"]`);
    }

    get deleteSubmitButton() {
        return this.page.locator(`button[class="Button-module__button Button-module__pink-primary"]`);
    }

    get emptyCartMessage() {
        return this.page.locator(`//h2[@class="EmptyBasket_title__fTZV_ Title-module__title Title-module__h2 Title-module__bold"]`);
    }

    get plusCounterIcon(){
        return this.page.locator(`button[aria-label="Увеличение количества"]`);
    }

    get totalCounterValue(){
        return this.page.locator(`(//div[@class="OrderPrice_info__D7uDi OrderPrice_row__N0qvn"])[1]`);
    }

    get promoCodeInput(){
        return this.page.locator(`//input[@name="promocode"]`);
    }

    get discountInformation(){
        return this.page.locator(`[data-testid="total-discount"]`);
    }

    get promoCodeConfirmationButton(){
        return this.page.locator(`[data-testid="promocodeConfirmation"]`);
    }

    get promoCodeTag(){
        return this.page.locator(`[class="Promocode_code__UU7wD"]`);
    }

    get basketConfirmationButton(){
        return this.page.locator(`[data-testid="basketConfirmation"]`);
    }

    async closePromoModalOnCartPage (){
        await this.promoModalOnCartPage.isEnabled();
        await this.promoModalOnCartPage.click();
    }

    async deleteProductFromCart(){
        await this.deleteFromCartButton.isEnabled();
        await this.deleteFromCartButton.click();
        await this.deleteSubmitButton.isEnabled();
        await this.deleteSubmitButton.click();
    }

    async getCounterValue() {
        const valueStr = await this.counterValue.getAttribute('value');
        return parseFloat(valueStr);
    }

    async getTotalCounterValue() {
        const inputText = await this.totalCounterValue.innerText({timeout: 10000});
        return parseFloat(inputText);
    }

    async addPromoCodeToCart(code){
        if (code) {
            await this.promoCodeInput.isVisible();
            await this.promoCodeInput.fill(code);
        }
        await this.promoCodeConfirmationButton.click();
    }

}

export { CartPage };