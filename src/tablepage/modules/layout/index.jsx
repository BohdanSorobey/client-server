import Component from "./layout.jsx";
import {connect} from "react-redux";
import actionTypes from "../../constants/actionTypes";
import * as selectors from "./selectors";
import * as actions from "./actions";

const mapStateToProps = state => ({
    pageState: selectors.getPageState(state),
    isSettingsModal: selectors.getStateModalSettings(state),
    dictionary: selectors.getDictionary(state),
    groups:selectors.getTeachersGroups(state),
    students:selectors.getStudents(state),
    currentMode:selectors.getCurrentMode(state),
    onlineTeachers:selectors.getOnlineTeachers(state),
    infoTeacher: selectors.getInfoTeacher(state),
    allUsers: selectors.allUsers(state),
    timeStundentsMode: selectors.timeStundentsMode(state),
    teacher: selectors.getTeachers(state),
    chatUsers: selectors.getChatUsers(state),
    chats: selectors.getChats(state),
    activeChat: selectors.getActiveChat(state),
    isRead: selectors.getIsRead(state),
});

const mapDispatchToProps = dispatch => ({
    CHANGE_LOCALE: payload => dispatch(actions.changeLocale(payload)),
    toggleSettingsModalWindow: payload => dispatch(actions.toggleSettingsModalWindow(payload)),
    insertGroups: payload => dispatch(actions.insertGroup(payload)),
    addStudent: payload => dispatch(actions.addStudent(payload)),
    changeCurrentMode: payload => dispatch(actions.toggleMode(payload)),
    addOnlineTeacher: payload => dispatch(actions.addOnlineTeacher(payload)),
    getInfoTeachers: (payload) => dispatch(actions.getInfoTeacher(payload)),
    addUsers: payload => dispatch(actions.addUsers(payload)),
    changeTimeStudentMode: payload => dispatch(actions.changeTimeStudentMode(payload)),
    setChatUsers: payload => dispatch(actions.setChatUsers(payload)),
    setChats: payload => dispatch(actions.setChats(payload)),
    setActiveChat: payload => dispatch(actions.setActiveChat(payload)),
    setIsRead: payload => dispatch(actions.setIsRead(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Component);