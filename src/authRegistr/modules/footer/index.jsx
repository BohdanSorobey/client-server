import Component from "./Footer.jsx";
import {connect} from "react-redux";

const mapStateToProps = state => ({
    dictionary: state.translates.dictionary,
});


export default connect(mapStateToProps)(Component);