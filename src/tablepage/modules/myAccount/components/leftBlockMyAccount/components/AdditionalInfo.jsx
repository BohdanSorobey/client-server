import React from 'react';
import PropTypes from "prop-types";

const AdditionalInfo = props => {
    const { stateInfo, callbackOnClick, placeholderKey, titleAdditional, dictionary, textAreaRef, stateButtonAdditional, classTextArea, nameButton, classButton, classDiv, nameButtons, stateButton} = props;
    return(
        <div className={'additional-info'}>
            <div className={classDiv}>
            <h1>{`${dictionary.resources[titleAdditional]}:`}</h1>
            <button className={classButton} onClick={callbackOnClick}>{stateButtonAdditional === false ? dictionary.resources[nameButton] : dictionary.resources[nameButtons]}</button>
            </div>
            <textarea defaultValue={stateInfo} ref={textAreaRef} disabled='disabled' maxLength='500' placeholder={dictionary.placeholders[placeholderKey]}  className={classTextArea}/>
        </div>
    )
};
AdditionalInfo.propTypes = {
    dictionary: PropTypes.object,
};
export default React.memo(AdditionalInfo);