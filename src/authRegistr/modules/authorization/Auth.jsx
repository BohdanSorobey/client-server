import React from "react";
import InputBlock from "./components/InputBlock.jsx";
import * as validation from "../helpers/authortizationValidator";
import * as requests from "../helpers/authHelpers";
import ButtonBlock from "./components/ButtonBlock";
import AuthMessage from "./components/AuthMessageBlock";
import AuthTitle from "./components/AuthTitleBlock";


export default class Auth extends React.Component {

    inputsRefs = {
        login: React.createRef(),
        password: React.createRef(),
        refAuthMessage : React.createRef(),
    };

    loginRequest = event => {
        requests.sendRequestToServer(event, this.inputsRefs.login.current.value, this.inputsRefs.password.current.value,
            this.inputsRefs.refAuthMessage, this.props.dictionary);
    };

    render() {
        const {inputs, dictionary, authButtons, toggleModalWindow, toggleSettingsModal} = this.props;
        return (
            <>
                <AuthTitle classNameDiv={"main__authorization-title"}
                           classNameMessage={"authorization_title"}
                           dictionary={dictionary}
                />
                {inputs.map(elem =>
                    <InputBlock
                        id={elem.id}
                        key={elem.id}
                        inputRef={this.inputsRefs[elem.id]}
                        inputType={elem.type}
                        dictionary={dictionary}
                        resourceKey={elem.resourceKey}
                        placeholderKey={elem.placeholderKey}
                        callbackOnKeyDown={validation[elem.keyDown]}
                    />)}
                <AuthMessage classNameDiv={"authorization-form-item"}
                             classNameMessage={"authorization-form-item__message"}
                             refAuthMessage={this.inputsRefs.refAuthMessage}
                             dictionary={dictionary}
                />
                {authButtons.map(elem => <ButtonBlock
                    dictionary={dictionary}
                    nameButton={elem.resourceKey}
                    classNameButton={elem.classButton}
                    classNameDiv={elem.classDiv}
                    key={elem.name}
                    callback={elem.resourceKey === "loginAuth" ? this.loginRequest :
                        elem.resourceKey === "registrationAuth" ? this.props.toggleAuthPage : toggleModalWindow
                    }
                />)}

            </>
        );
    }
};
