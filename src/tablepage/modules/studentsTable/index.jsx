import Component from "./StudentsMain.jsx";
import {connect} from "react-redux";
import * as actions from "./actions";
import * as selectors from "./selectors";

const mapStateToProps = state => ({
    inputs: selectors.getControlInputs(state),
    pageState: selectors.getPageState(state),
    isModal: selectors.isModal(state),
    isSettingsModal: selectors.getStateModalSettings(state),
    dictionary: selectors.getDictionary(state),
    buttons: selectors.getButtonsControl(state),
    divs: selectors.getDivs(state),
    groups: selectors.getTeachersGroups(state),
    students: selectors.getStudents(state),
    activeGroup: selectors.getActiveGroup(state),
    isModalOkCancel: selectors.getModalOK(state),
    currentModal: selectors.getCurrentModal(state),
    groupToDelete: selectors.getGroupToDelete(state),
    notificationState: selectors.notificationState(state),
    timeStundentsMode: selectors.timeStundentsMode(state),
});

const mapDispatchToProps = dispatch => ({
    CHANGE_LOCALE: payload => dispatch(actions.changeLocale(payload)),
    toggleModalWindow: payload => dispatch(actions.toggleModalWindow(payload)),
    insertGroups: payload => dispatch(actions.insertGroup(payload)),
    addStudent: payload => dispatch(actions.addStudent(payload)),
    toggleSettingsModalWindow: () => dispatch(actions.toggleSettingsModalWindow()),
    toggleOkCancelWindow: () => dispatch(actions.toggleModalOK()),
    changeModal: payload => dispatch(actions.toggleAllMOdels(payload)),
    deleteGroup: payload => dispatch(actions.deleteGroup(payload)),
    clearStudents: payload => dispatch(actions.clearStudents(payload)),
    resetTeacher: payload => dispatch(actions.resetTeacher(payload)),
    changeTimeStudentMode: payload => dispatch(actions.changeTimeStudentMode(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Component);