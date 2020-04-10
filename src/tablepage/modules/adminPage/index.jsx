import Component from "./AdminPage.jsx";
import {connect} from "react-redux";
import * as actions from "./actions";
import * as selectors from "./selectors";

const mapStateToProps = state => ({
    divss: selectors.divsAdminHead(state),
    allUsers: selectors.allUsers(state),
    allClicks: selectors.allClicks(state),
});

const mapDispatchToProps = dispatch => ({
    addUsers: payload => dispatch(actions.addUsers(payload)),
    addClicks: payload => dispatch(actions.addClicks(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Component);