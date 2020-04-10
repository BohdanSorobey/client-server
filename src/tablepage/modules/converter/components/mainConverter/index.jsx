import {connect} from "react-redux";
import Content from './mainConverter.jsx';
import * as selectors from "./selectors";
import * as actions from "./actions";

const mapStateToProps = state => ({
  dictionary: selectors.getDictionary(state),
  isConvLength: selectors.getConverterMode(state),
});

const mapDispatchToProps = dispatch => ({
  changeConvertorMode: () => dispatch(actions.changeConvertorMode()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Content);
