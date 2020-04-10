import React from "react";
import PropTypes from "prop-types";

const InputBlock = props => {
    const { dictionary, resourceKey, placeholderKey, id, inputRef, callbackOnKeyDown, inputType} = props;
    return (
        <div className="authorization-form-item">
            <div className="authorization-form__label">
                <label htmlFor={id}>{`${dictionary.resources[resourceKey]}:`}</label>
            </div>
            <div className="authorization-form__input-wrapper">
                <input id={id} ref={inputRef} className="custom-input" type={inputType}
                       placeholder={dictionary.placeholders[placeholderKey]}
                       onKeyDown={callbackOnKeyDown}
                       required
                />
            </div>
        </div>
    );
};

InputBlock.propTypes = {
    id: PropTypes.string.isRequired,
    inputRef: PropTypes.object.isRequired,
    inputType: PropTypes.string.isRequired,
    dictionary: PropTypes.object.isRequired,
    resourceKey: PropTypes.string.isRequired,
    placeholderKey: PropTypes.string.isRequired,
    callbackOnKeyDown: PropTypes.func.isRequired,
};

export default React.memo(InputBlock);