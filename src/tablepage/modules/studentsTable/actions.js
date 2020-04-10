import actionTypes from "../../constants/actionTypes";

export const toggleMode = payload => ({ type: actionTypes.TOGGLE_MODE, payload });
export const changeLocale = payload => ({ type: actionTypes.CHANGE_LOCALE, payload });
export const toggleModalWindow = payload => ({ type: actionTypes.TOGGLE_MODAL_WINDOW, payload });
export const toggleSettingsModalWindow = () => ({ type: actionTypes.TOGGLE_MODAL_WINDOW_SETTINGS });
export const insertGroup = payload => ({ type: actionTypes.INSERT_GROUPS, payload });
export const addStudent = payload => ({ type: actionTypes.ADD_STUDENT, payload });
export const toggleModalOK = () => ({ type: actionTypes.TOGGLE_MODAL_OK_CANSEL });
export const toggleAllMOdels = payload => ({ type: actionTypes.TOGGLE_ALL_MODELS, payload  });
export const deleteGroup = payload => ({ type: actionTypes.DELETE_GROUP, payload  });
export const clearStudents = payload => ({ type: actionTypes.CLEAR_STUDENTS_ASYNC, payload  });
export const resetTeacher = payload => ({ type: actionTypes.RESET_TEACHER_ASYNC, payload  });
export const changeTimeStudentMode = payload => ({ type: actionTypes.ADD_TIME_STUDENT_MODE, payload });