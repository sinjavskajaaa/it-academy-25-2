import { $ } from '@wdio/globals'
import Base from './base.js';

class ProductCard extends Base {

    get productCardName () {
        return $(`//h1[@class="ProductCardScreen_title__1vng6 Title-module__title Title-module__h1 Title-module__ellipsis"]`);
    }
}

export default new ProductCard();