import { connect } from 'react-redux';
import Component from './Paint';
import * as selectors from "./selectors"
import * as actions from "./actions";


const mapStateToProps = (state) => ({
    dictionary: selectors.getDictionary(state),
    timePaintMode: selectors.timePaintMode(state),
});

const mapDispatchToProps = dispatch => ({
    changeTimePaintMode: payload => dispatch(actions.changeTimePaintMode(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Component);
