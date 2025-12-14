import { $ } from '@wdio/globals'
import Base from './base.js';


class FavouritesPage extends Base {

    get productNameOnFavouritesPage() {
        return $(`//span[@class='CardInfo_text__GGroD Text-module__text Text-module__caption Text-module__ellipsis']`);
    }

    async openFavouritesPage() {
        await Base.navigateToEndpoint('/aside/');
    }
}

export default new FavouritesPage();