import React from "react";
import("../../../styles/stylesComponents/paint/paint.less");
import ControlPanelPaint from "./components/ControlPanelPaint";
import * as constants from "../../constants/constants";
import * as helpers from "../layout/helpers/helpers";
import { DrawController} from "./helpers/helperPaint";

export default class Paint extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount = () => {
        this.paint = new DrawController();
        this.paint.initialization();
        helpers.changeTimeMode(this.props.changeTimePaintMode)
    };

    componentWillUnmount = () => {
        helpers.changeTimeModeUnmount(this.props.changeTimePaintMode, this.props.timePaintMode, this.props.currentMode)
    };

    render() {
        const {dictionary} = this.props;
        return (
            <>
                <main className="main">
                    <div className="wrapper-paint" id="wrapper1">
                        <ControlPanelPaint dictionary={dictionary}/>
                        <div className="canvas-wrapper">
                            <div className="canvas1">
                                <h2>{dictionary.resources.paintMode}</h2>
                                <canvas className="canvas-paint" id="canvas1" width='600' height='400'/>
                            </div>
                        </div>
                    </div>
                </main>
            </>
        );
    }
};
