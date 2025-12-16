import { Base } from "./base";

class ProductCard extends Base {

    get productCardCode () {
        return this.page.locator(`//span[@class='ProductCode_code__bD1_B Text-module__text Text-module__caption']`, { timeout: 10000 });
    }
}

export { ProductCard };