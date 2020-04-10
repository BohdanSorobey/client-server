import config from "../../config/config";
import actionTypes from "../../constants/actionTypes";

const initialState = {
    isSettingsModal: config.settingsIsModal
};

export const settingsModalReducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.TOGGLE_MODAL_WINDOW_SETTINGS:
            return {
                ...state,
                isSettingsModal: !state.isSettingsModal,
            };
        default:
            return state;
    }
}