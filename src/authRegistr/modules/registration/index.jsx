import Component from './MainRegistration.jsx'
import { connect } from "react-redux";

const mapStateToProps = state => ({
    inputs: state.config.inputs,
    buttons: state.config.buttons,
    dictionary: state.translates.dictionary,
});
const mapDispatchToProps = dispatch => ({
    toggleAuthPage: () => dispatch({ type: "TOGGLE_PAGE" }),

});

export default connect(mapStateToProps, mapDispatchToProps)(Component);