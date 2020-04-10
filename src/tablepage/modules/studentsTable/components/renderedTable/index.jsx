import { connect } from 'react-redux';
import Component from './RenderedTable';
import * as selectors from "./selectors";
import * as actions from "./actions";

const mapStateToProps = (state) => ({
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
  buttonsStudent: selectors.getButtonsStudent(state),
  currentStudent: selectors.getCurrentStudent(state),
  notificationState: selectors.notificationState(state),
});

const mapDispatchToProps = (dispatch) => ({
  CHANGE_LOCALE: (payload) => dispatch(actions.changeLocale(payload)),
  toggleModalWindow: (payload) => dispatch(actions.toggleModalWindow(payload)),
  insertGroups: payload => dispatch(actions.insertGroups(payload)),
  addStudent: payload => dispatch(actions.addStudent(payload)),
  makeGroupActive: payload => dispatch(actions.activeGroup(payload)),
  toggleSettingsModalWindow: () => dispatch(actions.toggleSettingsModalWindow()),
  deleteStudent:payload => dispatch(actions.deleteStudent(payload)),
  toggleRowButtons: () => dispatch(actions.toggleButtonsStudent()),
  changeCurrentStudent: payload => dispatch(actions.changeCurrentStudent(payload)),
  changeGroupName: payload => dispatch(actions.changeGroupName(payload)),
  changeGroupToDelete: payload => dispatch(actions.changeGroupToDelete(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Component);
