import {Base} from "../base";

class Footer extends Base {

    get itemsLinksFromFooter() {
        return this.page.locator('.Sitemap_sitemapItem__kziM1');
    }

    get qrCodeContainer () {
        return this.page.locator('.QrBlock_container__DkaAn');
    }

    get contactOptionsFromFooter() {
        return this.page.locator('.Contacts_contactsBlockItem__Q_Lbt');
    }

    get socialMediaButtonsFromFooter() {
        return this.page.locator('.SocialButton-module__socialButton');
    }

}