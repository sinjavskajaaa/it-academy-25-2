import {Base} from "./base";

class FavouritesPage extends Base {

    get productNameOnFavouritesPage () {
        return this.page.locator(`//span[@class='CardInfo_text__GGroD Text-module__text Text-module__caption Text-module__ellipsis']`)
    }
}

export { FavouritesPage };