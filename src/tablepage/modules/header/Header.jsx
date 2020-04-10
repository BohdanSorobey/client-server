import React from "react";
import LogoBlock from "./components/LogoBlock";
import SettingsModal from "../modalMenager/components/SettingsModal";
import * as helpers from "./helpers/headerHelpers"

export default class Header extends React.Component {
    refSelect = React.createRef();

    render() {
        const {toggleSettingsModal, toggleModes, changeModal, CHANGE_LOCALE, changeCurrentMode, currentMode, dictionary, infoTeacher, toggleNotifications, notificationState} = this.props;
        return(
                <>
                    <div>
                        <LogoBlock classNameDiv={"logo-settings"} classImg={"logo"}  srcImage={"assets/logo.png"} callback = {sessionStorage.getItem("login")!=="admin" ? () => changeCurrentMode("table"): null} />
                    </div>
                    <div>
                        {currentMode !== "account" && currentMode !== "admin" && sessionStorage.getItem("teachers_id") !== null ?
                            <div onClick={toggleModes} className={"modes-btn"}>{dictionary.resources.modes}</div>:<div style={{minWidth:"70px"}}></div>}
                        {this.props.modes === true ? <div className={"modes"}>
                            <div className={"custom-button-modal-rows"} onClick={() => {changeCurrentMode("table"); toggleModes()}}>{dictionary.resources.tableMode}</div>
                            <div className={"custom-button-modal-rows"} onClick={() => {changeCurrentMode("converter"); toggleModes()}} >{dictionary.resources.converterMode}</div>
                            <div className={"custom-button-modal-rows"} onClick={() => {changeCurrentMode("calculator"); toggleModes()}}>{dictionary.resources.calculatorMode}</div>
                            <div className={"custom-button-modal-rows"} onClick={() => {changeCurrentMode("paint"); toggleModes()}}>{dictionary.resources.paintMode}</div>
                        </div>: null}
                    </div>
                    <div className={'settings-div-header'}>
                        {sessionStorage.getItem("login")!=="admin" ? <div style={{display:"flex"}}>
                        {currentMode !== "account" ? <LogoBlock classNameDiv={"logo-settings"} classImg={"my-account-logo"} srcImage=
                                {infoTeacher === null || infoTeacher === undefined || infoTeacher.teacher_icon === null  ? "assets/robin.png" : infoTeacher.teacher_icon}
                                                                callback = {sessionStorage.getItem("teachers_id") === null ?  null :
                                                                    this.props.modes === true ? () => {toggleModes(); changeCurrentMode("account")} : () => changeCurrentMode("account")}/>
                        : <LogoBlock classNameDiv={"logo-settings"} classImg={"my-account-logo"} srcImage={"assets/back.svg"}  callback = {() => changeCurrentMode("table")}/>}
                        <LogoBlock classNameDiv={"logo-settings"} classImg={"settings-logo"} srcImage={"assets/settings.svg"}
                                   callback ={sessionStorage.getItem("teachers_id") === null ?  null :toggleSettingsModal}/>
                        <LogoBlock classNameDiv={"logo-settings"} classImg={"full-screen-logo"} srcImage={'assets/size.png'} callback={helpers.fullScreen}/>
                        </div> : null}
                        <LogoBlock classNameDiv={"logo-settings"} classImg={"log-out-logo"} srcImage={'assets/logout.png'} callback={helpers.logOut}/>
                    </div>
                    <SettingsModal isSettingsModals={this.props.isSettingsModal}
                                   toggleSettingsWindow={this.props.toggleSettingsModalWindow}
                                   dictionary={dictionary}
                                   refSelect = {this.refSelect}
                                   changeLocation ={helpers.changeLocation}
                                   changeModal = {changeModal}
                                   CHANGE_LOCALE = {CHANGE_LOCALE}
                                   toggleNotifications = {toggleNotifications}
                                   notificationState={notificationState}
                    />
                </>

        )
    }
};
