import actionTypes from "../../constants/actionTypes";

export const toggleMode = payload => ({ type: actionTypes.TOGGLE_MODE, payload });
export const changeLocale = payload => ({ type: actionTypes.CHANGE_LOCALE, payload });
export const toggleModalWindow = () => ({ type: actionTypes.TOGGLE_MODAL_WINDOW });
export const toggleSettingsModalWindow = payload => ({ type: actionTypes.TOGGLE_MODAL_WINDOW_SETTINGS, payload });
export const insertGroup = payload => ({ type: actionTypes.INSERT_GROUPS, payload });
export const addStudent = payload => ({ type: actionTypes.ADD_STUDENT, payload });
export const toggleModes = payload => ({ type: actionTypes.TOGGLE_MODES_WINDOW, payload });
export const changeModal = payload => ({ type: actionTypes.TOGGLE_ALL_MODELS, payload  });
export const toggleNotifications = () => ({ type: actionTypes.TOGGLE_NOTIFICATION });