import { $ } from '@wdio/globals'
import Base from '../base.js'

class Header extends Base {

    get catalogButton () {
        return $('.styles_catalogButton__z9L_j');
    }

    get favouritesButton () {
        return $(`[class='headerFavoritesBox headerCartBoxEmpty']`);
    }

    get cartButton () {
        return $('.headerCartBox');
    }

    get accountButton () {
        return $('.styles_userToolsToggler__c2aHe');
    }

}

export default new Header();
