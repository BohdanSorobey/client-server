import { connect } from 'react-redux';
import Component from './Converter';
import * as selectors from "./selectors"
import * as actions from "./actions";

const mapStateToProps = (state) => ({
    dictionary: selectors.getDictionary(state),
    timeConverterMode: selectors.timeConverterMode(state),
});

const mapDispatchToProps = dispatch => ({
    changeTimeConverterMode: payload => dispatch(actions.changeTimeConverterMode(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Component);
