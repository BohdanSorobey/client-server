import React from "react";
import Additional from './components/AdditionalInfo.jsx';
import StaticInfo from './components/StaticInfo.jsx';
import * as logic from "../../helpers/myAccountLogic";


export default class LeftBlockMyAccount extends React.Component {
    loginRef = React.createRef();
    mailRef = React.createRef();
    phoneRef = React.createRef();
    areaRef = React.createRef();

    inputsRefs = {
        loginMyAcc: this.loginRef,
        mailMyAcc: this.mailRef,
        phoneMyAcc: this.phoneRef
    };

    changeStaticInfo = () => {
        this.props.toggleStaticButton();
        logic.changeStaticInfo(this.loginRef, this.mailRef, this.phoneRef);
    };

    saveStaticInfo = () => {
        if(!logic.checkValidLogin(this.loginRef.current.value) || !logic.checkValidPhoneNumber(this.phoneRef.current.value) || !logic.checkValidEmail(this.mailRef.current.value)){
            return;
        }
        let objInfo = {
            teacherId: sessionStorage.getItem("teachers_id"),
            teacher_icon: this.props.infoTeacher.teacher_icon,
            login: this.loginRef.current.value,
            email: this.mailRef.current.value,
            phone_number: this.phoneRef.current.value,
            area: this.areaRef.current.value
        };
        this.props.updateInfoTeacher(objInfo);
        this.props.toggleStaticButton();
        logic.saveStaticInfo(this.loginRef, this.mailRef, this.phoneRef);
    };

    changeAdditionalInfo = () => {
        this.props.toggleAdditionalButton();
        this.areaRef.current.disabled = false;
    };

    saveAdditionalInfo = () => {
        let objInfo = {
            teacherId: sessionStorage.getItem("teachers_id"),
            teacher_icon: this.props.infoTeacher.teacher_icon,
            login: this.loginRef.current.value,
            email: this.mailRef.current.value,
            phone_number: this.phoneRef.current.value,
            area: this.areaRef.current.value
        };
        this.props.updateInfoTeacher(objInfo);
        this.props.toggleAdditionalButton();
        this.areaRef.current.disabled = true;
    };

    render() {
        const { dictionary, inputMy, area, infoTeacher, buttonImageState, toggleButtonImage, sendImage } = this.props;
        return (
                <div className={'left-block'}>
                    {inputMy.map(name =>
                        <StaticInfo key={name.labelText}
                                    clickContextMenu={logic[name.clickContextMenu]}
                                    stateInfo={!infoTeacher ? null : infoTeacher[name.labelText]}
                                    labelClass={name.labelClass}
                                    buttonNameSave={name.buttonNameSave}
                                    inputRef={this.inputsRefs[name.inputId]}
                                    classDiv={name.classDiv}
                                    dictionary={dictionary}
                                    buttonNameChange={name.buttonNameChange}
                                    callbackOnClick={this.props.stateButton === false ? this.changeStaticInfo : this.saveStaticInfo}
                                    classButton={name.classButton}
                                    classImg={name.classImg}
                                    stateButton={this.props.stateButton}
                                    imgSrc={name.imgSrc}
                                    inputId={name.inputId}
                                    labelText={name.labelText}
                                    classNameInput={name.classNameInput}
                                    inputType={name.inputType}
                                    placeholderKey={name.placeholderKey}
                                    callbackOnKeyDown={logic[name.callbackOnKeyDown]}
                                    buttonImageState = {buttonImageState}
                                    toggleButtonImage = {toggleButtonImage}
                                    sendImage = {sendImage}
                                    infoTeacher = {infoTeacher}
                        />)}
                        {area.map(name =>
                            <Additional key={name.titleAdditional}
                                        stateInfo={this.props.infoTeacher === null ? null : this.props.infoTeacher.about_myself}
                                        textAreaRef={this.areaRef}
                                        stateButtonAdditional={this.props.stateButtonAdditional}
                                        callbackOnClick={this.props.stateButtonAdditional === false ? this.changeAdditionalInfo : this.saveAdditionalInfo}
                                        classDiv={name.classDiv}
                                        nameButtons={name.nameButtons}
                                        nameButton={name.nameButton}
                                        classButton={name.classButton}
                                        dictionary={dictionary}
                                        placeholderKey={name.placeholderKey}
                                        classTextArea={name.classTextArea}
                                        titleAdditional={name.titleAdditional}
                            />)}
                </div>
        );
    }
};