const { $ } = require('@wdio/globals')
const Base = require('./base');


class MainPage extends Base {

    get flashAlert () {
        return $('#flash');
    }
}

module.exports = new MainPage();
