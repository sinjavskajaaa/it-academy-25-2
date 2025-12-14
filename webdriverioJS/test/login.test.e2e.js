import { expect } from '@wdio/globals'
import Base from '../pageobjects/base.js'
import Login from '../pageobjects/components/login.js'
import Register from '../pageobjects/components/register.js';
import { WRONG_CREDENTIAL_NOTIFICATION_BY_EMAIL, CREDENTIALS,WRONG_CREDENTIAL_NOTIFICATION_BY_PHONE, INVALIDE_PHONE } from '../helpers/constants.js';

describe('Login 21vek', async function (){

    beforeEach(async () => {
        await Base.navigateToEndpoint('');
    });

    it('Get notification \'Проверьте электронную почту или зарегистрируйтесь\' after login with invalid email and password', async () => {
        await Base.closeCookies();
        await Base.closePromoModal();
        await Login.openLoginModalWindow();
        await Login.loginWithEmailAndPassword(CREDENTIALS.invalidCredentials.email,CREDENTIALS.invalidCredentials.password);
        await expect(await Login.errorMessage).toHaveText(WRONG_CREDENTIAL_NOTIFICATION_BY_EMAIL)
    })

    it('Get notification \'Укажите стандартный код оператора\' after login with invalid phone', async () => {
        await Login.openLoginModalWindow();
        await Login.loginWithPhone(INVALIDE_PHONE);
        await expect(await Login.errorMessage).toHaveText(WRONG_CREDENTIAL_NOTIFICATION_BY_PHONE)
    })

    it('Open register form after login with invalid email and password via link from error massage', async () => {
        await Login.openLoginModalWindow();
        await Login.loginWithEmailAndPassword(CREDENTIALS.invalidCredentials.email,CREDENTIALS.invalidCredentials.password);
        await Login.registerLinkFromErrorMessage.waitForClickable();
        await Login.registerLinkFromErrorMessage.click();
        await expect(await Register.registerModalWindow)
    })
})

