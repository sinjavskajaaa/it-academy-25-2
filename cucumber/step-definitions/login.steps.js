const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect, $ } = require('@wdio/globals')

const login = require('../pageobjects/components/login');
const Base = require('../pageobjects/base');

Given(/^I am on the website$/, async function () {
    await Base.navigateToEndpoint();
});

When(/^I close cookies and promo modal$/, async function () {
    await Base.acceptCookies();
    await Base.closePromoModal();
});

When(/^I open authorization modal window$/, async function () {
    await login.openLoginModalWindow();
});

When(/^I login with (\w+) and (.+)$/, async function(email, password) {
    await login.loginWithEmailAndPassword(email, password);
});

When(/^I login with (.+)$/, async (phone) => {
    await login.loginWithPhone(phone);
});

Then(/^I should see a flash message saying (.*)$/, async function(message){
    await expect(await login.errorMessage).toBeExisting();
    await expect(await login.errorMessage).toHaveText(expect.stringContaining(message));
});

