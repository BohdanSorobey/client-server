import React from 'react';
import validation from '../../helpers/registrationValidation'
const Button = props => {
    const {nameButton, classNameButton, classNameDiv, idButton, dictionary, callbackOnClick, refLink} = props;
    return(
    <div className={classNameDiv}>
        <button ref={refLink} onClick={callbackOnClick} className={classNameButton} id={idButton}>{dictionary.resources[nameButton]}</button>
    </div>
    )
};

export default React.memo(Button);