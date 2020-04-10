import React from "react";
import LogoBlock from "./components/LogoBlock";
import SelectHeaderBlock from "./components/SelectHeaderBlock";

export default class Header extends React.Component {

    render() {
        const {toggleSettingsModal} = this.props;
        return(
                <>
                    <LogoBlock classNameDiv={"logo-settings"} classImg={"logo"} srcImage={"assets/logo.png"} />
                    <LogoBlock classNameDiv={"logo-settings"} classImg={"settings-logo"} srcImage={"assets/settings.svg"} callback ={toggleSettingsModal}/>
                </>
        )
    }
};
