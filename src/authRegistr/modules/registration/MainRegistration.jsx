import React from "react";
import "../../../styles/stylesComponents/registration/registration.less"
import * as validation from "../helpers/registrationValidation"
import {connect} from "react-redux";
import CustomInput from "./cunsomInput/CustomInput";
import Button from "./button/Button";
import * as requests from "../helpers/authHelpers";

export default class Registration extends React.Component {
    loginRef = React.createRef();
    passwordRef = React.createRef();
    secondPasswordRef = React.createRef();
    mailRef = React.createRef();
    phoneRef = React.createRef();
    keywordRef = React.createRef();
    refMessage = React.createRef();
    refBtnRegistration = React.createRef();
    refBtnBackAuth = React.createRef();
    outputRef = React.createRef();
    outputKeyRef = React.createRef();


    inputsRefs = {
        login: this.loginRef,
        password1: this.passwordRef,
        secondPassword: this.secondPasswordRef,
        mail: this.mailRef,
        phone: this.phoneRef,
        keyword: this.keywordRef,
        loginOutputId: this.outputRef,
        outputIdKeyWord: this.outputKeyRef,
    };

    registrationRequest = event => {
        let check = this.validAll();
        if(check) {
            requests.registrationRequest(event, {
                    login: this.loginRef.current.value,
                    password: this.passwordRef.current.value,
                    email: this.mailRef.current.value,
                    phone: this.phoneRef.current.value,
                    keyword: this.keywordRef.current.value
                },
                this.refMessage, this.refBtnRegistration, this.props.dictionary, this.props.toggleAuthPage);
       }
    };
    validAll = () => {
        if (validation.checkValidLogin(this.loginRef.current.value) &
            validation.checkValidPhoneNumber(this.phoneRef.current.value) &
            validation.checkValidPassword(this.passwordRef.current.value) &
            validation.checkValidConfirmPassword(this.passwordRef.current.value, this.secondPasswordRef.current.value) &
            validation.checkValidEmail(this.mailRef.current.value)) {
            return true;
        }
        return false;
    };

    render() {
        const { inputs, dictionary, toggleAuthPage, toggleAuthRazpizdyaus, e } = this.props;
        return (
            <>
            <main className="wrapper">
                <div className="content-box">
                    <h1 className="registration__title" id="regLabel">{dictionary.resources.registrationAuth}</h1>
                    <div className="registration-form">
                        {inputs.map((input) => <CustomInput key={input.labelText}
                                                            classDivSelect={input.classDivSelect}
                                                            classSelect={input.classSelect}
                                                            outputClass={input.outputClass}
                                                            classNameDivOutput={input.classDivOutput}
                                                            idOutput={input.idOutput}
                                                            outputRef={this.inputsRefs[input.idOutput]}
                                                            outputText={input.outputText}
                                                            inputRef = {this.inputsRefs[input.id]}
                                                            labelText={input.labelText}
                                                            dictionary={dictionary}
                                                            inputType={input.type}
                                                            placeholderKey={input.placeholderKey}
                                                            inputId={input.id}
                                                            classNameDiv={input.classDiv}
                                                            classNameInput={input.classInput}
                                                            callbackOnKeyDown={validation[input.keyDown]}
                        />)}

                        <div className="registration-form__item">
                            <div  className="registration-form__message" ref={this.refMessage}/>
                        </div>
                        <div className="buttons">
                            {this.props.buttons.map((button) => <Button key={button.name}
                                                                        nameButton={button.name}
                                                                        dictionary={dictionary}
                                                                        refLink={button.name === "registration" ? this.refBtnRegistration : this.refBtnBackAuth}
                                                                        classNameButton={button.classButton}
                                                                        classNameDiv={button.classDiv}
                                                                        idButton={button.idButton}
                                                                        callbackOnClick={button.name !== 'registration' ?  toggleAuthPage : this.registrationRequest
                                                                        }/>)}
                        </div>
                    </div>
                </div>
            </main>
                </>
        );
    }
}
