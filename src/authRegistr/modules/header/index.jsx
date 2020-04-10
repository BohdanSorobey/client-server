import Component from "./Header.jsx";
import {connect} from "react-redux";

const mapStateToProps = state => ({
    inputs: state.config.authInputs,
    dictionary: state.translates.dictionary,
    authButtons: state.config.authButtons,
});

const mapDispatchToProps = dispatch => ({
    toggleAuthPage: () => dispatch({ type: "TOGGLE_PAGE" }),
    CHANGE_LOCALE: payload => dispatch({ type: "CHANGE_LOCALE", payload }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Component);