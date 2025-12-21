import { $ } from '@wdio/globals'
import Base from '../base.js'

class Header extends Base {

    get accountButton () {
        return $('.styles_userToolsToggler__c2aHe');
    }

}

module.exports = new Header();