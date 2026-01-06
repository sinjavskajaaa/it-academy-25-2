import Base from './base.js';

class ComparePage extends Base {

    get productNameOnComparePage () {
        return this.page.locator(`//p[@class="CardInfo_info__cUeVj Product_cardName__JXQVc"]`);
    }

}

export { ComparePage };