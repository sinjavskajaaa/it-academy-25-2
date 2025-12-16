import { $ } from '@wdio/globals'
import Base from '../base.js';
import Header from './header.js'

class Login extends Base {

    get loginButton () {
        return $(`[data-testid="loginButton"]`);
    }

    get inputEmail() {
        return $(`#login-email`);
    }

    get inputPassword() {
        return $(`#login-password`);
    }

    get inputPhone() {
        return $('[inputmode="numeric"]');
    }

    get loginByEmailButtonSubmit() {
        return $(`[data-testid="loginSubmit"]`);
    }

    get loginByPhoneButtonSubmit() {
        return $(`(//button[.//div[text()="Продолжить"]])[1]`);
    }

    get errorMessage() {
        return $('.ErrorMessage-module__error');
    }

    get registerLinkFromErrorMessage() {
        return $('a.LinkButton-module__wrapper.LinkButton-module__tiny.LinkButton-module__regular.LinkButton-module__blue');
    }

    get byPhoneOption(){
        return $('[class="SvgIcon-module__base BaseRadioButton-module__uncheckedIcon"]');
    }

    async openLoginModalWindow() {
        await Header.accountButton.waitForClickable();
        await Header.accountButton.click();
        await this.loginButton.waitForClickable();
        await this.loginButton.click();
    }

    async fillEmailAndPasswordLInLoginModalWindow(email, password) {
        if(email){
            await this.inputEmail.waitForDisplayed();
            await this.inputEmail.setValue(email);
        }
        if(password){
            await this.inputPassword.waitForDisplayed();
            await this.inputPassword.setValue(password);
        }
    }

    async fillPhoneInLoginModalWindow(phone) {
        if (phone) {
            await this.inputPhone.waitForDisplayed();
            await this.inputPhone.setValue(phone);
        }
    }

    async loginWithEmailAndPassword (email, password) {
        await this.fillEmailAndPasswordLInLoginModalWindow(email, password);
        await this.loginByEmailButtonSubmit.waitForClickable();
        await this.loginByEmailButtonSubmit.click();
    }

    async loginWithPhone(phone) {
        await this.byPhoneOption.waitForClickable();
        await this.byPhoneOption.click();
        await this.fillPhoneInLoginModalWindow(phone);
        await this.loginByPhoneButtonSubmit.waitForClickable();
        await this.loginByPhoneButtonSubmit.click();
    }

}

export default new Login();
