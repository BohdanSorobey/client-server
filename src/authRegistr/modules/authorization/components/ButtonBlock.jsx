import React from 'react';
import PropTypes from "prop-types";

const ButtonBlock = props => {
    const {nameButton, classNameButton, classNameDiv, dictionary, callback} = props;
    return(
        <div className={classNameDiv}>
            <button onClick={callback} className={classNameButton} >{dictionary.resources[nameButton]}</button>
        </div>
    )
};

ButtonBlock.propTypes = {
    nameButton: PropTypes.string.isRequired,
    classNameButton: PropTypes.string.isRequired,
    dictionary: PropTypes.object.isRequired,
    classNameDiv: PropTypes.string.isRequired,
    callback: PropTypes.func.isRequired,
};

export default React.memo(ButtonBlock);