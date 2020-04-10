import actionTypes from "../../constants/actionTypes";

export const toggleMode = payload => ({ type: actionTypes.TOGGLE_MODE_ASYNC, payload });
export const changeLocale = payload => ({ type: actionTypes.CHANGE_LOCALE, payload });
export const toggleModalWindow = () => ({ type: actionTypes.TOGGLE_MODAL_WINDOW });
export const toggleSettingsModalWindow = payload => ({ type: actionTypes.TOGGLE_MODAL_WINDOW_SETTINGS, payload });
export const insertGroup = payload => ({ type: actionTypes.INSERT_GROUPS, payload });
export const addStudent = payload => ({ type: actionTypes.ADD_STUDENT, payload });
export const addOnlineTeacher = payload => ({ type: actionTypes.ONLINE_TEACHERS, payload });
export const getInfoTeacher = payload => ({ type: actionTypes.GET_INFO_TEACHER_ASYNC, payload });
export const toggleNotifications = () => ({ type: actionTypes.TOGGLE_NOTIFICATION });
export const addUsers = payload => ({ type: actionTypes.GET_INFO_ADMIN_ASYNC, payload });
export const changeTimeStudentMode = payload => ({ type: actionTypes.ADD_TIME_STUDENT_MODE, payload });
export const setChatUsers = payload => ({ type: actionTypes.USERS_INIT, payload });
export const setChats = payload => ({ type: actionTypes.CHAT_INIT, payload });
export const setActiveChat = payload => ({ type: actionTypes.SET_ACTIVE_CHAT, payload });
export const setIsRead = payload => ({ type: actionTypes.SET_IS_READ, payload });
