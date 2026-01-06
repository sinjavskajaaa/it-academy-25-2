import Base from '../base.js';

class Register extends Base {

    get registerModalWindowTitle () {
        return this.page.locator(`h5.Form-module__formTitle`);
    }

    get registerModalWindow () {
        return this.page.locator(`.RegistrationForm_container__BkpVT`);
    }
}

export { Register };