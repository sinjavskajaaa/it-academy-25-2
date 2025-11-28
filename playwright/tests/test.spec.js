import { test, expect } from '@playwright/test';

test.describe('21vek', async () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('');
        await page.click('//button[@class=\'Button-module__button Button-module__blue-primary\']');
    });

    test('Получение ошибки при авторизации', async ({ page}) => {
        await page.locator('button.styles_userToolsToggler__c2aHe').click();
        await page.locator('[data-testid=loginButton]').click();
        await page.locator('#login-email').fill('login@email.by');
        await page.locator('#login-password').fill('password');
        await page.locator('[data-testid=loginSubmit]').click();
        await expect(await page.locator('.ErrorMessage-module__error')).toHaveText('Проверьте электронную почту или зарегистрируйтесь')
    })

    test('Успешный поиск товара по коду', async ({ page}) => {
        await page.locator('input#catalogSearch').fill('10.019.147');
        await page.locator('.Search_searchBtn__Tk7Gw').click();
        await expect(await page.locator('.ProductCode_container__mu6wI')).toContainText('10.019.147')
    })

    test('Добавление товара в корзину', async ({ page}) => {
        await page.locator('(//button[@data-testid=\'card-basket-action\'])[1]').click();
        const productName = await page.locator('(//span[@class=\'CardInfo_text__GGroD Text-module__text Text-module__caption Text-module__ellipsis\'])[1]').innerText();
        await page.locator('.headerCart').click();
        await expect(await page.locator('.BasketItem_title__MzCQ9')).toHaveText(productName)
    })

    test('Добавление товара в избранное', async ({ page}) => {
        await page.locator('(//button[@data-testid=\'card-favorites\'])[1]').click();
        await expect(await page.locator('.Snackbar-module__snackbarContent')).toHaveText('Товар добавлен в избранное')
    })

    test('Открыть форму обратной связи', async ({ page}) => {
        await page.locator('div.styles_communicationItem__IUjz2').click();
        await page.locator('(//button[@class=\'styles_communicationItemBox__K66_y\'])[2]').click();
        const formName = await page.locator('.Form-module__formTitle').innerText();
        await expect(await page.locator('.ModalDesktop-module__modalContent')).toContainText(formName)
    })
})