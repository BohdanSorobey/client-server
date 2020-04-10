import Component from "./Auth.jsx";
import {connect} from "react-redux";
import actionTypes from "../../constants/actionTypes";


const mapStateToProps = state => ({
    inputs: state.config.authInputs,
    dictionary: state.translates.dictionary,
    authButtons: state.config.authButtons,
    data: state.common.data
});

const mapDispatchToProps = dispatch => ({
    addData: payload => dispatch({ type: "ADD_DATA", payload }),
    toggleAuthPage: () => dispatch({ type: "TOGGLE_PAGE" }),
    toggleModalWindow: payload => dispatch({ type: actionTypes.TOGGLE_MODAL_WINDOW, payload }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Component);