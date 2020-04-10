import React from "react";
import PropTypes from "prop-types";

const CustomInput = props => {
    const {classDivSelect, classSelect, outputClass, outputText, outputRef, idOutput, classNameDivOutput, inputRef, dictionary, inputType, inputId, labelText, classnameDiv, classNameInput, placeholderKey, callbackOnKeyDown } = props;
    return(
        <div className={classnameDiv}>
            <p><label htmlFor={inputId}>{inputId !== 'keyword' ? `${dictionary.resources[labelText]}*` : `${dictionary.resources[labelText]}`}</label></p>
            <div className={classDivSelect}>
            {classSelect === "phone-select" ? <div className='select-div'><select className={classSelect} >
                <option value="">+380</option></select></div> : null} <div className={classSelect === "phone-select" ? 'input-phone-div' : null}><input ref={inputRef} className={classNameInput} type={inputType} placeholder={dictionary.placeholders[placeholderKey]} id={inputId} onKeyDown={callbackOnKeyDown}/>
            </div>
            </div>
            <div className={classNameDivOutput}>
                <output className={outputClass} id={idOutput} ref={outputRef}>{dictionary.dialogs[outputText]}</output>
            </div>
        </div>
    )
};

CustomInput.propTypes = {
    inputId: PropTypes.string.isRequired,
    inputRef: PropTypes.object.isRequired,
    inputType: PropTypes.string.isRequired,
    dictionary: PropTypes.object.isRequired,
    placeholderKey: PropTypes.string.isRequired,
    callbackOnKeyDown: PropTypes.func,
};

export default React.memo(CustomInput);
