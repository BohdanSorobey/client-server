export default {
    defaultLocale: "en",
    defaultIsModal: false,
    settingsIsModal: false,
    modesOpen:false,
    authInputs: [
        { keyDown:"checkValidLogin", type: "text", placeholderKey:"authLogin", id:"login", resourceKey:"authLogin", class:"some-form__item"},
        { keyDown:"checkValidPassword", type: "password", placeholderKey:"authPassword", id:"password", resourceKey:"authPassword", class:"some-form__item"},
    ],
    authButtons: [
        {KeyCallback:"sendRequestToServer", name: 'loginAuth', resourceKey: "loginAuth", classButton: 'custom-button',  classDiv: 'authorization-form-item'},
        {KeyCallback:"sendRequestToServer", name: 'registrationAuth', resourceKey: "registrationAuth", classButton: 'custom-button',  classDiv: 'authorization-form-item'},
        {KeyCallback:"sendRequestToServer", name: 'forgottenPassword', resourceKey: "forgottenPassword", classButton: 'custom-link-forgotten',  classDiv: 'authorization-form-item'}
    ],
    inputs: [
        { outputClass: 'output-registration', outputText: 'loginOutput', idOutput: 'loginOutputId', classDivOutput: 'registration-output-block', keyDown: "checkEnterLogin", type: "text", placeholderKey:"login", id:"login", labelText:"login", classDiv:"registration-form__item", classInput: "custom-input" },
        { outputClass: 'output-registration', outputText: 'passwordOutput', idOutput: 'passwordOutputId', classDivOutput: 'registration-output-block', keyDown: "checkEnterPassword", type: "password", placeholderKey:"password", id:"password1", labelText:"password", classDiv:"registration-form__item", classInput: "custom-input" },
        { outputClass: 'output-registration', outputText: 'secondPasswordOutput', idOutput: 'secPasswordOutputId', classDivOutput: 'registration-output-block', keyDown: "deleteRedBorder", type: "password", placeholderKey:"secondPassword", id:"secondPassword", labelText:"secondPassword", classDiv:"registration-form__item", classInput: "custom-input" },
        { outputClass: 'output-registration', outputText: 'mailOutput', idOutput: 'mailOutputId', classDivOutput: 'registration-output-block', keyDown: "deleteRedBorder", type: "email", placeholderKey:"email", id:"mail", labelText:"email", classDiv:"registration-form__item", classInput: "custom-input" },
        { classDivSelect: 'div-class-select', classSelect: 'phone-select', outputClass: 'output-registration', outputText: 'phoneOutput', idOutput: 'phoneOutputId', classDivOutput: 'registration-output-block', keyDown: "checkEnterPhone", type: "tel", placeholderKey:"phone", id:"phone", labelText:"phone", classDiv:"registration-form__item", classInput: "custom-input phone-input" },
        { outputText: 'keyWordOutput', outputClass: 'output-id-keyword', type: "text", placeholderKey:"keyword", id:"keyword", labelText:"keyword", keyDown: '', classDiv:"registration-form__item", classInput: "custom-input" }
    ],

    buttons: [
        { click: 'checkValidLogin', name: 'registration', resourceKey: "registration", classButton: 'custom-button',  classDiv: 'dic'},
        {name: 'backToAuth', resourceKey: "backToAuth", classButton: 'custom-button',  classDiv: 'dic'}
    ],
    options: [
        {name: 'langEn', resourceKey: "valueSelectEn"},
        {name: 'langRu', resourceKey: "valueSelectRu"},
        {name: 'langAr', resourceKey: "valueSelectAr"}
    ],

}

