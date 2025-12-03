import { Base } from "../base";

class Login extends Base {

    get accountButton () {
        return this.page.locator('.styles_userToolsToggler__c2aHe');
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

    // get inputPhone() {
    //     return this.page.locator('.RegionPhoneField-module__mask');
    // }

    get buttonSubmit() {
        return this.page.locator(`[data-testid="loginSubmit"]`);
    }

    get errorMessage() {
        return this.page.locator('.ErrorMessage-module__error');
    }

    async openLoginModalWindow() {
        await this.accountButton.click();
        await this.loginButton.click();
    }

    async fillCredentialsInLoginModalWindow(email, password) {
        if(email){
            await this.inputEmail.fill(email);
        }
        if(password){
            await this.inputPassword.fill(password);
        }
    }

    async loginWithEmailAndPassword(email, password) {
        await this.fillCredentialsInLoginModalWindow(email, password);
        await this.buttonSubmit.click();
    }
}

export { Login };
