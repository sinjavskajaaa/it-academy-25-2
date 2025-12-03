import {Base} from "../base";

class Search extends Base {

    get searchInput () {
        return this.page.locator('#catalogSearch');
    }

    get searchSubmitButton () {
        return this.page.locator(`.Search_searchBtn__Tk7Gw`);
    }

    async findProductByCode (productCode) {
        await this.searchInput.fill(productCode);
        await this.searchSubmitButton.click({ force: true });
    }
}

export { Search };