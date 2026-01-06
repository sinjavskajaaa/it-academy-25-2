import Base from '../base.js'

class Header extends Base {

    get catalogButton () {
        return this.page.locator(`.styles_catalogButton__z9L_j`);
    }

    get cartButton () {
        return this.page.locator(`.headerCartBox`);
    }

    get logo() {
        return this.page.locator(`//a[@class="logotypeImg"]`);
    }

}

export { Header };