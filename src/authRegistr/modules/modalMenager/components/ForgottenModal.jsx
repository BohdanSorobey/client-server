import React from "react";
import Modal from "react-modal";
import * as logic from '../../helpers/forgotPasswordHelpers.js'

const ForgotPassword = props => {
    const { isModal, toggleModalWindow, locale, dictionary, refLoginForgot, refKeyWordForgot, refPasswordForgot} = props;

    const customStyles = {
        content: {
            display: 'flex',
            flexDirection: "column",
            alignItems: 'center',
            width: '30%',
            height: '40%',
            top: '50%',
            left: '50%',
            right: 'auto',
            padding:"10px",
            bottom: 'auto',
            transform: 'translate(-50%, -50%)',
            background:"linear-gradient(to bottom, #ff8f00, #cc5c2c, #8b3731, #471e23, #000000)"
        }
    };
    const getPasswordDB = () => {
        logic.getPassword(refLoginForgot, refKeyWordForgot, refPasswordForgot);
    };
    return (
        <Modal
            isOpen={isModal}
            style={customStyles}
            onRequestClose={toggleModalWindow}
            ariaHideApp={false}
        >
            <div className='close-modal-forgot' onClick={toggleModalWindow}><button className='custom-button'>X</button></div>
            <h2>{dictionary.resources.forgotPassword}</h2>
            <div className='forgot-password-block'>
                <div>
                    <label htmlFor='forgotLogin'>{dictionary.resources.login}</label>
                </div>
                <div className="forgot-password-form__input">
                    <input ref={refLoginForgot} className="custom-input" id='forgotLogin' type="text"/>
                </div>
                <div>
                    <label htmlFor='forgotKeyWord'>{dictionary.resources.keyword}</label>
                </div>
                <div className="forgot-password-form__input">
                    <input ref={refKeyWordForgot} className="custom-input" id='forgotKeyWord' type="text"/>
                </div>
                <div >
                    <label htmlFor='forgotPassword'>{dictionary.resources.yourPassword}</label>
                </div>
                <div className="forgot-password-form__input">
                    <input ref={refPasswordForgot} className="custom-input" id='forgotPassword' type="text" readOnly/>
                </div>
                <button className="custom-button" id="btnRestorePassword" onClick={getPasswordDB}>{dictionary.resources.forgotButton}</button>
            </div>
        </Modal>
    )
};

export default ForgotPassword;