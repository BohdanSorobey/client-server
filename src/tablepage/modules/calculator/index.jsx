import Component from "./Calculator.jsx";
import {connect} from "react-redux";
import * as actions from "./actions";
import * as selectors from "./selectors";

const mapStateToProps = state => ({
    timeCalculatorMode: selectors.timeCalculatorMode(state),
});

const mapDispatchToProps = dispatch => ({
    changeTimeCalcMode: payload => dispatch(actions.changeTimeCalcMode(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Component);