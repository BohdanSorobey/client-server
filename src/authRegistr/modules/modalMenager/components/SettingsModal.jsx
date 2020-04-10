import React from "react";
import Modal from "react-modal";
import SelectHeaderBlock from "../../header/components/SelectHeaderBlock";


const SettingsModal = props => {
    const { isSettingsModals, toggleSettingsWindow, dictionary, refSelect, changeLocation, options } = props;
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
        }
    };

    return (
        <Modal
            isOpen={isSettingsModals}
            style={customStyles}
            onRequestClose={toggleSettingsWindow}
            ariaHideApp={false}
        >
            <div className={"settings-modal-wrapper"}>
                <div className={"header-modal"}><div>{dictionary.resources.modalSettingsText}</div><button className="custom-button" onClick={toggleSettingsWindow}>x</button></div>
                <h1>{dictionary.resources.modalSettingsMainText}</h1>
            <SelectHeaderBlock classNameDiv={"header__cabinet cabinet"} classSelect={"custom-button authorization-form__sel--language"}
                               dictionary = {dictionary}
                               refSelect={refSelect}
                               callback={changeLocation}
                               options ={options}
            />

            </div>
        </Modal>
    )
}

export default SettingsModal;