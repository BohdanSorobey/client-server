import actionTypes from "../../constants/actionTypes";

export const changeMode = () => ({ type: actionTypes.CHANGE_MODE });
export const changeLocale = payload => ({ type: actionTypes.CHANGE_LOCALE, payload });
export const toggleModalWindow = () => ({ type: actionTypes.TOGGLE_MODAL_WINDOW });
export const toggleSettingsModalWindow = () => ({ type: actionTypes.TOGGLE_MODAL_WINDOW_SETTINGS });