import { connect } from 'react-redux';
import Component from './GroupBlock';
import actionTypes from '../../../../../../constants/constants';

const mapStateToProps = (state) => ({
    dictionary: state.translates.dictionary,
    groups:state.teacher.groups,
    students:state.teacher.students,
    activeGroup:state.teacher.activeGroup,
    currentModal:state.modal.modal,
});

const mapDispatchToProps = (dispatch) => ({
    CHANGE_LOCALE: (payload) => dispatch({ type: actionTypes.CHANGE_LOCALE, payload }),
    toggleModalWindow: (payload) => dispatch({ type: actionTypes.TOGGLE_MODAL_WINDOW, payload }),
    insertGroups: payload => dispatch({ type: actionTypes.INSERT_GROUPS, payload }),
    addStudent: payload => dispatch({ type: actionTypes.ADD_STUDENT, payload }),
    toggleSettingsModalWindow: (payload) => dispatch({ type: actionTypes.TOGGLE_MODAL_WINDOW_SETTINGS, payload }),
    changeModal: (payload) => dispatch({ type: actionTypes.TOGGLE_ALL_MODELS, payload  }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Component);
