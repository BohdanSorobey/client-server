import config from "../../config/config";
import actionTypes from "../../constants/actionTypes";


const initialState = {
    data: {},
    pageState: config.pageState,
    isModes: config.modesOpen,
    checkStatic: config.checkStatic,
    checkAdditional: config.checkAdditional,
    buttonImageState: config.buttonImageState,
    notificationState: config.notificationState,
    divsAdminHead: config.divsAdminTable,
    isConvLength: config.isConvLength,
};

export const commonReducer = (state = initialState, action) => {

    switch (action.type) {
        case actionTypes.TOGGLE_PAGE: return {
            ...state,
            pageState: !state.pageState
        };
        case actionTypes.ADD_DATA: return {
            ...state,
            data: action.payload
        };
        case actionTypes.TOGGLE_MODES_WINDOW: return {
            ...state,
            isModes: !state.isModes
        };
        case actionTypes.TOGGLE_BUTTON_STATIC: return {
            ...state,
            checkStatic: !state.checkStatic
        };
        case actionTypes.TOGGLE_BUTTON_ADDITIONAL: return {
            ...state,
            checkAdditional: !state.checkAdditional
        };
        case actionTypes.TOGGLE_BUTTON_IMAGE: return {
            ...state,
            buttonImageState: !state.buttonImageState
        };
        case actionTypes.TOGGLE_NOTIFICATION: return {
            ...state,
            notificationState: !state.notificationState
        };
        case actionTypes.TOGGLE_CONVECTOR_MODE: return {
            ...state,
            isConvLength: !state.isConvLength
        };
        default: return state
    }
};