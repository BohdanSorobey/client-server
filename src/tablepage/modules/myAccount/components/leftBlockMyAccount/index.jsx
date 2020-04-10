import Component from './LeftBlockMyAccount.jsx'
import { connect } from "react-redux";
import * as actions from "./actions";
import * as selectors from "./selectors"

const mapStateToProps = state => ({
    area: state.config.area,
    dictionary: selectors.getDictionary(state),
    inputMy: state.config.inputMy,
    stateButton: state.common.checkStatic,
    stateButtonAdditional: state.common.checkAdditional,
    infoTeacher: state.teacher.infoTeacher,
    buttonImageState: selectors.getButtonImageState(state),
});

const mapDispatchToProps = dispatch => ({
    toggleStaticButton: () => dispatch(actions.toggleStaticButton()),
    toggleAdditionalButton: () => dispatch(actions.toggleAdditionalButton()),
    getInfoTeachers: (payload) => dispatch(actions.getInfoTeacher(payload)),
    updateInfoTeacher: (payload) => dispatch(actions.updateInfoTeacher(payload)),
    toggleButtonImage: () => dispatch(actions.toggleButtonImage()),
    sendImage: (payload) => dispatch(actions.sendImage(payload)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Component);