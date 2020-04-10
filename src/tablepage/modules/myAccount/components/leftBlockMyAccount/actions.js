import actionTypes from "../../../../constants/actionTypes";

export const toggleStaticButton = () => ({ type: actionTypes.TOGGLE_BUTTON_STATIC});
export const toggleAdditionalButton = () => ({ type: actionTypes.TOGGLE_BUTTON_ADDITIONAL});
export const getInfoTeacher = payload => ({ type: actionTypes.GET_INFO_TEACHER_ASYNC, payload });
export const updateInfoTeacher = payload => ({ type: actionTypes.UPDATE_INFO_TEACHER_ASYNC, payload });
export const toggleButtonImage = () => ({ type: actionTypes.TOGGLE_BUTTON_IMAGE });
export const sendImage = payload => ({ type: actionTypes.SEND_IMAGE_ASYNC, payload });