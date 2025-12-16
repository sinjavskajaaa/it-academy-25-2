import { $ } from '@wdio/globals'
import Base from '../base.js';

class Register extends Base {

    get registerModalWindow () {
        return $('.RegistrationForm_form__WqPXC');
    }
}

export default new Register();