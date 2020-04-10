import actionTypes from "../../constants/actionTypes";
import config from "../../config/config";
import {getTranslatesByLocale} from "../../translates/translates";

const getCurrentLocale = () => {
    const localeFromLS = localStorage.getItem("locale");
    return localeFromLS ? localeFromLS : config.defaultLocale;
};
const currentLocale = getCurrentLocale();

const initialState = {
    locale: currentLocale,
    dictionary: getTranslatesByLocale(currentLocale),
};

export const translatesReducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.CHANGE_LOCALE: return {
            ...state,
            locale: action.payload,
            dictionary: getTranslatesByLocale(action.payload),
        };
        default:
            return state;
    }
};