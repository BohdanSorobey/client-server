import React from "react";
import Modal from "react-modal";
import SettingsModal from "./components/ForgottenModal";

export default class ModalManager extends React.Component {
    getModalWindow = () => {
        const { modals, dictionary, toggleModalWindow } = this.props;
        if (modals.settings.isOpen) {
            return (
                <SettingsModal
                    toggleModalWindow={toggleModalWindow}
                    dictionary={dictionary}
                />);
        } else if (modals.forgotPassword.isOpen) {
            return (
                <SettingsModal
                    toggleModalWindow={toggleModalWindow}
                    dictionary={dictionary}
                />);
        }
    };

    render() {
        const { customStyles, toggleModalWindow } = this.props;
        const { getModalWindow } = this;
        return (
            <Modal
                isOpen={false}
                style={customStyles}
                ariaHideApp={false}
                onRequestClose={toggleModalWindow}
            >
                {getModalWindow()}
            </Modal>
        )
    }
}