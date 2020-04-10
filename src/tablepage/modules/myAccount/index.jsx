import Component from './MyAccount.jsx'
import { connect } from "react-redux";
import * as actions from './actions.js'

const mapStateToProps = state => ({
    inputs: state.config.inputs,
    buttons: state.config.buttons,
    dictionary: state.translates.dictionary,
});


export default connect(mapStateToProps)(Component);