import React from "react";
import * as helpers from "../layout/helpers/helpers";
import MainConverter from "./components/mainConverter/index";
export default class Converter extends React.Component {

    componentDidMount = () => {
        helpers.changeTimeMode(this.props.changeTimeConverterMode)
    };

    componentWillUnmount = () => {
        helpers.changeTimeModeUnmount(this.props.changeTimeConverterMode, this.props.timeConverterMode, this.props.currentMode)
    };

    render() {

        return (
            <>
                <main className={"main-converter"}>
                <h1>{this.props.dictionary.resources.coverter}</h1>
                <MainConverter/>
                </main>
            </>
        );
    }
};
