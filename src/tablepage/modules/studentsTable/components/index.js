import Component from "./layout.jsx";
import {connect} from "react-redux";
import actionTypes from "../../constants/actionTypes";

const mapStateToProps = state => ({
    data: state.common.data,
    inputs: state.config.inputs,
    pageState: state.common.pageState,
    isModal:state.modal.isModal,
    isSettingsModal: state.settingsModal.isSettingsModal,
    dictionary: state.translates.dictionary,
});

const mapDispatchToProps = dispatch => ({
    addData: payload => dispatch({ type: "ADD_DATA", payload }),
    toggleAuthPage: () => dispatch({ type: "TOGGLE_PAGE" }),
    CHANGE_LOCALE: payload => dispatch({ type: actionTypes.CHANGE_LOCALE, payload }),
    toggleModalWindow: payload => dispatch({ type: actionTypes.TOGGLE_MODAL_WINDOW, payload }),
    toggleSettingsModalWindow: payload => dispatch({ type: actionTypes.TOGGLE_MODAL_WINDOW_SETTINGS, payload }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Component);