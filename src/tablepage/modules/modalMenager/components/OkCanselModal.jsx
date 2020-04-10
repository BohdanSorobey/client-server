import React from "react";
import Modal from "react-modal";

const OkCanselModal = props => {
    const { isOkModal, toggleOkCancelWindow, dictionary, currentModal, callbackClear, callbackDeleteGroup, callbackResetSettings } = props;
    const pickModalCallback = () => {
        switch (currentModal) {
            case "clear":
                return callbackClear;
            case "X":
                return callbackDeleteGroup;
            case "resetSettings":
                return callbackResetSettings;
        }
    };

    const pickModalText = () => {
        switch (currentModal) {
            case "clear":
                return dictionary.resources.clearTextTable;
            case "X":
                return dictionary.resources.deleteTextTable;
            case "resetSettings":
                return dictionary.resources.resetSettingsTextTable;
        }
    };

    const customStyles = {
        content: {
            width: '30%',
            height: '20%',
            top: '50%',
            left: '50%',
            right: 'auto',
            padding:"10px",
            bottom: 'auto',
            border: "none",
            transform: 'translate(-50%, -50%)',
            background:"linear-gradient(to bottom, #ff8f00, #cc5c2c, #8b3731, #471e23, #000000)",
            textAlign:"center",
        }
    };

    return (
        <Modal
            isOpen={isOkModal}
            style={customStyles}
            onRequestClose={toggleOkCancelWindow}
            ariaHideApp={false}
        >
            <div className={"settings-modal-wrapper"}>
                <div className={"header-modal"}><div>{dictionary.resources.modalSettingsText}</div><button className="custom-button" onClick={toggleOkCancelWindow}>x</button></div>
                <h3 style={{color:"#FE1300"}}>{pickModalText()}</h3>
                <div className={"buttons-ok-wrapper"}>
                    <div><button className="custom-button" onClick={pickModalCallback()}>{dictionary.resources.okStudentBtn}</button></div>
                    <div><button className="custom-button" onClick={toggleOkCancelWindow}>{dictionary.resources.cancelStudentBtn}</button></div>
                </div>
            </div>
        </Modal>
    )
};

export default OkCanselModal;