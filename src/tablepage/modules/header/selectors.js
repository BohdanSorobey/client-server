export const getPageState = state => state.common.pageState;
export const getLocale = state => state.translates.locale;
export const getDictionary = state => state.translates.dictionary;
export const getTeachersGroups = state => state.teacher.groups;
export const getStateModalSettings = state => state.settingsModal.isSettingsModal;
export const getStudents = state => state.teacher.students;
export const getCurrentMode = state => state.teacher.currentMode;
export const isModes = state => state.common.isModes;
export const infoTeacher = state => state.teacher.infoTeacher;
export const notificationState = state => state.common.notificationState;