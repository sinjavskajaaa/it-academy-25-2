import { test, expect } from '@playwright/test';
import Base from '../pageobjects/base.js'
import { Login } from '../pageobjects/components/login.js'
import { Register } from '../pageobjects/components/register.js';
import { UNREGISTERED_CREDENTIAL_NOTIFICATION_BY_EMAIL, INVALIDE_CREDENTIAL_NOTIFICATION_BY_EMAIL, CREDENTIALS, INVALIDE_CREDENTIAL_NOTIFICATION_BY_PHONE, INVALIDE_PHONE, REGISTER_TITLE, SUCCESS_MESSAGE_PASSWORD_RESET } from '../helpers/constants.js';

test.describe('Login 21vek', async () => {

    test.beforeEach(async  ({page}) => {
        const newPage = new Base(page);
        await newPage.navigateToEndpoint();
        await newPage.acceptCookies();
        await newPage.closePromoModal();
    });

    test('Get notification \'Проверьте электронную почту или зарегистрируйтесь\' after login with unregistered email', async ({page}) => {
        const login = new Login(page);
        await login.openLoginModalWindow();
        await login.loginWithEmailAndPassword(CREDENTIALS.unregisteredCredentials.email,CREDENTIALS.unregisteredCredentials.password);
        await expect(await login.errorMessage).toHaveText(UNREGISTERED_CREDENTIAL_NOTIFICATION_BY_EMAIL)
    })

    test('Get message \'Письмо отправлено\' after sending password reset', async ({page}) => {
        const login = new Login(page);
        await login.openLoginModalWindow();
        await login.loginWithEmailAndPassword(CREDENTIALS.wrongCredentials.email,CREDENTIALS.wrongCredentials.password);
        await login.sendPasswordReset(CREDENTIALS.wrongCredentials.email);
        await expect(await login.successMessagePasswordReset).toHaveText(SUCCESS_MESSAGE_PASSWORD_RESET)
    })

    test('Get notification \'Неправильный формат электронной почты\' after login with invalid email', async ({page}) => {
        const login = new Login(page);
        await login.openLoginModalWindow();
        await login.loginWithEmailAndPassword(CREDENTIALS.invalidCredentials.email,CREDENTIALS.invalidCredentials.password);
        await expect(await login.errorMessage).toHaveText(INVALIDE_CREDENTIAL_NOTIFICATION_BY_EMAIL)
    })

    test('Open register form after login with invalid email and password via link from error massage', async ({page}) => {
        const login = new Login(page);
        const register = new Register(page);
        await login.openLoginModalWindow();
        await login.loginWithEmailAndPassword(CREDENTIALS.unregisteredCredentials.email,CREDENTIALS.unregisteredCredentials.password);
        await login.registerLinkInErrorMessage.click();
        await expect(await register.registerModalWindowTitle).toContainText(REGISTER_TITLE);
    })

    test('Get notification \'Укажите стандартный код оператора\' after login with invalid phone', async ({page}) => {
        const login = new Login(page);
        await login.openLoginModalWindow();
        await login.loginWithPhone(INVALIDE_PHONE);
        await expect(await login.errorMessage).toHaveText(INVALIDE_CREDENTIAL_NOTIFICATION_BY_PHONE)
    })
})