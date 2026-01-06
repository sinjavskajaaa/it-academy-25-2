const UNREGISTERED_CREDENTIAL_NOTIFICATION_BY_EMAIL = 'Проверьте электронную почту или \nзарегистрируйтесь';
const INVALIDE_CREDENTIAL_NOTIFICATION_BY_EMAIL = 'Неправильный формат электронной почты';
const INVALIDE_CREDENTIAL_NOTIFICATION_BY_PHONE = 'Укажите стандартный код оператора';
const SUCCESS_MESSAGE_PASSWORD_RESET = 'Письмо отправлено';
const REGISTER_TITLE = 'Регистрация';
const CREDENTIALS = {
    unregisteredCredentials: {
        email: 'login@email.by',
        password: 'password'
    },
    invalidCredentials: {
        email: 'login',
        password: 'password'
    },
    wrongCredentials: {
        email: 'shall_we_dance@tut.by',
        password: 'password'
    },
};

const INVALIDE_PHONE = '111111111';
const MIN_PRICE = '10';
const MAX_PRICE = '1000';
const EMPTY_CART_MESSAGE = 'Корзина пуста';
const PROMO_CODE = 'qulix';
const AUTH_GET_PARAMETER = '?step=auth';
const TAB_REVIEWS_NAME = 'Отзывы';

export {
    UNREGISTERED_CREDENTIAL_NOTIFICATION_BY_EMAIL,
    CREDENTIALS,
    INVALIDE_CREDENTIAL_NOTIFICATION_BY_EMAIL,
    INVALIDE_CREDENTIAL_NOTIFICATION_BY_PHONE,
    INVALIDE_PHONE,
    MIN_PRICE,
    MAX_PRICE,
    REGISTER_TITLE,
    SUCCESS_MESSAGE_PASSWORD_RESET,
    EMPTY_CART_MESSAGE,
    PROMO_CODE,
    AUTH_GET_PARAMETER,
    TAB_REVIEWS_NAME
}