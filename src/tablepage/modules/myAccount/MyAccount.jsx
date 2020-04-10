import React from "react";
import LeftBlockMyAccount from "./components/leftBlockMyAccount/index.jsx";
import RightBlockMyAccount from "./components/rightBlockMyAccount/RightBlockMyAccount";

export default class Account extends React.Component {

    render() {
        const {inputs, dictionary, onlineTeachers, teacher, socket} = this.props;
        return (
            <>
                <main className="main-wrapper__main my-account">
                    <LeftBlockMyAccount/>
                    <RightBlockMyAccount socket = {socket} teacher={teacher} onlineTeachers = {onlineTeachers} dictionary={dictionary}/>
                </main>
            </>
        );
    }
};