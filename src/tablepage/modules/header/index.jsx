import Component from "./Header.jsx";
import {connect} from "react-redux";
import actionTypes from "../../constants/actionTypes";
import * as selectors from "./selectors";
import * as actions from "./actions";

const mapStateToProps = state => ({
    dictionary: selectors.getDictionary(state),
    isSettingsModal: selectors.getStateModalSettings(state),
    modes: selectors.isModes(state),
    infoTeacher: selectors.infoTeacher(state),
    notificationState: selectors.notificationState(state),
});

const mapDispatchToProps = dispatch => ({
    CHANGE_LOCALE: payload => dispatch(actions.changeLocale(payload)),
    toggleSettingsModalWindow: payload => dispatch(actions.toggleSettingsModalWindow(payload)),
    toggleModes: payload => dispatch(actions.toggleModes(payload)),
    changeModal: payload => dispatch(actions.changeModal(payload)),
    toggleNotifications: () => dispatch(actions.toggleNotifications()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Component);