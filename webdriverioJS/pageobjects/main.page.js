import { $ } from '@wdio/globals'
import Base from './base.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class MainPage extends Base {
    /**
     * define selectors using getter methods
     */
    get flashAlert () {
        return $('#flash');
    }
}

export default new MainPage();
