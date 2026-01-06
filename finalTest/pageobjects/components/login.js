import Base from '../base.js';

class Login extends Base {

    get accountButton () {
        return this.page.locator(`button.styles_userToolsToggler__c2aHe`);
    }

    get loginButton () {
        return this.page.locator(`[data-testid="loginButton"]`);
    }

    get inputEmail() {
        return this.page.locator(`#login-email`);
    }

    get inputPassword() {
        return this.page.locator(`#login-password`);
    }

    get inputPhone() {
        return this.page.locator('[inputmode="numeric"]');
    }

    get loginByEmailButtonSubmit() {
        return this.page.locator(`[data-testid="loginSubmit"]`);
    }

    get loginByPhoneButtonSubmit() {
        return this.page.locator(`(//button[.//div[text()="Продолжить"]])[1]`);
    }

    get errorMessage() {
        return this.page.locator('.ErrorMessage-module__error');
    }

    get registerLinkInErrorMessage() {
        return this.page.locator('a.LinkButton-module__wrapper.LinkButton-module__tiny.LinkButton-module__regular.LinkButton-module__blue');
    }

    get byPhoneOption(){
        return this.page.locator('[class="SvgIcon-module__base BaseRadioButton-module__uncheckedIcon"]');
    }

    get resetPasswordLink(){
        return this.page.locator('//a[@class="LinkButton-module__wrapper LinkButton-module__tiny LinkButton-module__regular LinkButton-module__blue"]');
    }

    get resetPasswordSubmitButton(){
        return this.page.locator('//button[@class="Button-module__button Button-module__blue-primary"]');
    }

    get inputEmailPasswordReset(){
        return this.page.locator('#reset-password-email');
    }

    get successMessagePasswordReset(){
        return this.page.locator('h5.SuccessScreen_successTitle__cCZL9');
    }

    async openLoginModalWindow() {
        await this.accountButton.click();
        await this.loginButton.isVisible();
        await this.loginButton.click();
    }

    async fillCredentialsInLoginModalWindow(email, password) {
        if(email){
            await this.inputEmail.isVisible();
            await this.inputEmail.fill(email);
        }
        if(password){
            await this.inputPassword.isVisible();
            await this.inputPassword.fill(password);
        }
    }

    async fillPhoneInLoginModalWindow(phone) {
        if (phone) {
            await this.inputPhone.isVisible();
            await this.inputPhone.fill(phone);
        }
    }

    async loginWithEmailAndPassword (email, password) {
        await this.fillCredentialsInLoginModalWindow(email, password);
        await this.loginByEmailButtonSubmit.isVisible();
        await this.loginByEmailButtonSubmit.click();
    }

    async loginWithPhone(phone) {
        await this.byPhoneOption.isVisible();
        await this.byPhoneOption.click();
        await this.fillPhoneInLoginModalWindow(phone);
        await this.loginByPhoneButtonSubmit.isVisible();
        await this.loginByPhoneButtonSubmit.click();
    }

    async sendPasswordReset(email){
        await this.resetPasswordLink.isVisible();
        await this.resetPasswordLink.click();
        if(email){
            await this.inputEmailPasswordReset.isVisible();
            await this.inputEmailPasswordReset.fill(email);
        }
        await this.resetPasswordSubmitButton.isVisible();
        await this.resetPasswordSubmitButton.click();
    }

}

export { Login };