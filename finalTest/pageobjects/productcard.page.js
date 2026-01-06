import Base from './base.js';

class ProductCard extends Base {

    get productCardName () {
        return this.page.locator(`//h1[@class="ProductCardScreen_title__1vng6 Title-module__title Title-module__h1 Title-module__ellipsis"]`);
    }

    get activeTab() {
        return this.page.locator(`//button[@class="Tabs-module__tab Tabs-module__active"]`);
    }

}

export { ProductCard };