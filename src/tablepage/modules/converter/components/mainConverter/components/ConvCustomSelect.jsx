import React from "react";
import PropTypes from "prop-types";

const CustomSelect = props => {
    const { callback, classSelect, options, dictionary } = props;
    return (
        <select className={classSelect} onChange={callback && callback}>
            {options.map(option => <option key={option.value} value={option.value}>{dictionary.langOptions[option.resourceKey]}</option>)}
        </select>
    );
};

CustomSelect.propTypes = {
    options: PropTypes.array,
    callback: PropTypes.func,
    className: PropTypes.string,
};

CustomSelect.defaultProps = {
    options: [],
    callback: null,
    className: "select-wrapper",
};

export default React.memo(CustomSelect);






