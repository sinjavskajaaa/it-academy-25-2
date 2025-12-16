import { $ } from '@wdio/globals'
import Base from './base.js';

class ComparePage extends Base {

    get productNameOnComparePage () {
        return $(`//p[@class="CardInfo_info__cUeVj Product_cardName__JXQVc"]`);
    }

}

export default new ComparePage();