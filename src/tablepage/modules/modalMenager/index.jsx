import Component from "./ModalMenager";
// import * as selectors from "./selectors";
// import * as actions from "./actions";
import actionTypes from "../../constants/actionTypes";
import {connect} from "react-redux";

const mapStateToProps = state => ({
    locale: state.translates.locale,
    modals: state.modal.modals,
    dictionary: state.translates.dictionary,
    customStyles: state.config.defaultModalSettings.styles,
    isSettingsModal: state.settingsModal.isSettingsModal
});

const mapDispatchToProps = dispatch => ({
    toggleModalWindow: payload => dispatch({ type: actionTypes.TOGGLE_MODAL_WINDOW, payload }),
    toggleSettingsModalWindow: payload => dispatch({ type: actionTypes.TOGGLE_MODAL_WINDOW_SETTINGS, payload }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Component);