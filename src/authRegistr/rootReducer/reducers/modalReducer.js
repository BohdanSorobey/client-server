import config from "../../config/config";
import actionTypes from "../../constants/actionTypes";

const initialState = {
    isModal: config.defaultIsModal
}

export const modalReducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.TOGGLE_MODAL_WINDOW:
            return {
                ...state,
                isModal: !state.isModal,
            };
        default:
            return state;
    }
}