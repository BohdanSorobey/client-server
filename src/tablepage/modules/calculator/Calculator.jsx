import React from "react";
import Calculators from './containers/App'
import * as constants from "../../constants/constants";
import * as helpers from "../layout/helpers/helpers"
export default class Calculator extends React.Component {

    componentDidMount = () => {
        helpers.changeTimeMode(this.props.changeTimeCalcMode)
    };

    componentWillUnmount = () => {
        helpers.changeTimeModeUnmount(this.props.changeTimeCalcMode, this.props.timeCalculatorMode, this.props.currentMode)
    };

    render() {

        const {dictionary} = this.props;
        return (
            <>
                <main >
                <div className={"calc-wrapper"}>

                    <Calculators dictionary={dictionary } />
                </div>
                </main>
            </>
        );
    }
};
