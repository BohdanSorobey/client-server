import React from "react";
import Header from "../header";
import Footer from "../footer";
import Auth from "../authorization";
import Registration from "../registration";
import ForgottenModal from "../modalMenager/components/ForgottenModal";
import SettingsModal from "../modalMenager/components/SettingsModal";

export default class Layout extends React.Component {
    loginInput = React.createRef();
    passwordInput = React.createRef();
    refSelect = React.createRef();
    refForgotLogin = React.createRef();
    refForgotKeyWord = React.createRef();
    refForgotPassword = React.createRef();

    addData = () => {
        const { addData } = this.props;
        addData({
            login: this.loginInput.current.value,
            password: this.passwordInput.current.value
        });
    };

    checkLocation = () => {
        return localStorage.getItem("location");
    };

    changeLocation = () => {
        let option  = this.refSelect.current.options[this.refSelect.current.selectedIndex].value;
        if(option === "ar"){
            document.body.style.direction = "rtl";
            localStorage.setItem("location", "rtl");
        } else {
            document.body.style.direction = "ltr";
            localStorage.setItem("location", "ltr");
        }
        localStorage.setItem("locale", option);
        this.props.CHANGE_LOCALE(option);
    };

    render() {

        const { isModal, dictionary, toggleModalWindow, isSettingsModal, toggleSettingsModalWindow } = this.props;
        return (
            <>
            <div className="main-wrapper" style={{direction: `${this.checkLocation()}`}}>
                <header className="main-wrapper__header">
                    <Header className="header" toggleSettingsModal = {this.props.toggleSettingsModalWindow}/>
                </header>
                <main className="main-wrapper__main">
                    {this.props.pageState === false ? <Auth /> : <Registration/>}
                </main>
                <footer className="main-wrapper__footer">
                    <Footer className="footer"/>
                </footer>
            </div>
                <ForgottenModal isModal={isModal}
                               toggleModalWindow={toggleModalWindow}
                               dictionary={dictionary}
                                refLoginForgot={this.refForgotLogin}
                                refKeyWordForgot={this.refForgotKeyWord}
                                refPasswordForgot={this.refForgotPassword}
                />
                <SettingsModal isSettingsModals={this.props.isSettingsModal}
                               toggleSettingsWindow={this.props.toggleSettingsModalWindow}
                               dictionary={this.props.dictionary}
                               refSelect = {this.refSelect}
                               changeLocation ={this.changeLocation}
                               options = {this.props.options}

                />
            </>
        );
    }
}
