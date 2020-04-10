import React from "react";
import PropTypes from "prop-types";

const CustomInput = props => {
    const {classDivSelect,  outputClass, outputText, outputRef, idOutput, classNameDivOutput, inputRef, dictionary, inputType, inputId, labelText, classnameDiv, classNameInput, placeholderKey, callbackOnKeyDown } = props;
    return(
        <div className={classnameDiv}>
            <p><label htmlFor={inputId}>{dictionary.resources[labelText]}</label></p>
            <div className={classDivSelect}>
              <input ref={inputRef} className={classNameInput} type={inputType} placeholder={dictionary.placeholders[placeholderKey]} id={inputId} onKeyDown={callbackOnKeyDown}/>
            </div>
            <div className={classNameDivOutput}>
                <output className={outputClass} id={idOutput} ref={outputRef}>{dictionary.dialogs[outputText]}</output>
            </div>
        </div>
    )
};

CustomInput.propTypes = {
    inputId: PropTypes.string.isRequired,
    inputRef: PropTypes.object,
    inputType: PropTypes.string.isRequired,
    dictionary: PropTypes.object.isRequired,
    placeholderKey: PropTypes.string.isRequired,
    callbackOnKeyDown: PropTypes.func,
};

export default React.memo(CustomInput);
