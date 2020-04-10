import config from "../../config/config";
import actionTypes from "../../constants/actionTypes";

const initialState = {
    isModal: config.defaultIsModal,
    modalOkCancel:config.modalOkCancel,
    modal:config.modal,
};

export const modalReducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.TOGGLE_MODAL_WINDOW:
            return {
                ...state,
                isModal: !state.isModal,
            };
        case actionTypes.TOGGLE_MODAL_OK_CANSEL:
            return {
                ...state,
                modalOkCancel: !state.modalOkCancel,
            };
        case actionTypes.TOGGLE_ALL_MODELS:
            return {
                ...state,
                modal: action.payload,
                modalOkCancel: !state.modalOkCancel,
            };
        default:
            return state;
    }
};