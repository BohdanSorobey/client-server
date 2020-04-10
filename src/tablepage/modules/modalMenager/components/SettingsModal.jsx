import React from "react";
import Modal from "react-modal";
import SelectHeaderBlock from "../../header/components/SelectHeaderBlock";


const SettingsModal = props => {
    const {CHANGE_LOCALE, isSettingsModals, toggleSettingsWindow, dictionary, refSelect, changeLocation, changeModal, toggleNotifications, notificationState } = props;
    const customStyles = {
        content: {
            width: '30%',
            height: '30%',
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
                <h3>{dictionary.resources.notifications}</h3>
               <div><input type={"range"} min={0} max={1} step={1} onChange={toggleNotifications}/></div>
                <h3>{dictionary.resources.modalSettingsMainText}</h3>
            <SelectHeaderBlock classNameDiv={"header__cabinet cabinet"} classSelect={"custom-button authorization-form__sel--language"}
                               dictionary = {dictionary}
                               refSelect={refSelect}
                               callback={() => changeLocation(CHANGE_LOCALE, refSelect)}/>
                <div><button onClick={()=>changeModal("resetSettings")} className={"custom-button"}>{dictionary.resources.resetBtn}</button></div>

            </div>
        </Modal>
    )
}

export default SettingsModal;