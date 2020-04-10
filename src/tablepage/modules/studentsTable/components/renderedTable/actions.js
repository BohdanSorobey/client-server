import actionTypes from "../../../../constants/actionTypes";

export const toggleMode = payload => ({ type: actionTypes.TOGGLE_MODE, payload });
export const changeLocale = payload => ({ type: actionTypes.CHANGE_LOCALE, payload });
export const toggleModalWindow = payload => ({ type: actionTypes.TOGGLE_MODAL_WINDOW, payload });
export const toggleSettingsModalWindow = () => ({ type: actionTypes.TOGGLE_MODAL_WINDOW_SETTINGS });
export const insertGroups = payload => ({ type: actionTypes.INSERT_GROUPS, payload });
export const addStudent = payload => ({ type: actionTypes.ADD_STUDENT, payload });
export const toggleModalOK = () => ({ type: actionTypes.TOGGLE_MODAL_OK_CANSEL });
export const toggleAllMOdels = payload => ({ type: actionTypes.TOGGLE_ALL_MODELS, payload  });
export const activeGroup = payload => ({ type: actionTypes.ACTIVE_GROUP, payload });
export const deleteStudent = payload => ({ type: actionTypes.DELETE_STUDENT, payload });
export const toggleButtonsStudent = () => ({ type: actionTypes.TOGGLE_BUTTONS_STUDENT });
export const changeCurrentStudent = payload => ({ type: actionTypes.CURRENT_STUDENT, payload });
export const changeGroupName = payload => ({ type: actionTypes.CHANGE_GROUP_NAME, payload });
export const changeGroupToDelete = payload => ({ type: actionTypes.GROUP_TO_DELETE, payload });
