import React from 'react';
import PropTypes from "prop-types";

const ControlPanelPaint = props => {
    const {dictionary} = props;
    return(
        <div className="settings-wrapper">
            <div className="control-wrap">
                <h3>{dictionary.resources.controlPanelPaint}</h3>
                <div>
                    <p>{dictionary.resources.lineThickness}</p>
                    <span>10</span><input type="range" min="10" max="20" defaultValue="10"
                                          id="lineWidth"/><span>20</span>
                    <p>{dictionary.resources.figureSize}</p>
                    <span>25</span><input type="range" min="25" max="70" defaultValue="10"
                                          id="figureSize"/><span>70</span>
                </div>
                <div>
                    <p>{dictionary.resources.lineColor}</p>
                    <input id="color" type="color"/>
                </div>
                <div className='div-block-button'>
                    <button className="custom-button" id="pencil">{dictionary.resources.pencilButton}</button>
                    <button className="custom-button" id="horizontalLine">{dictionary.resources.horizontalLineButton}</button>
                    <button className="custom-button" id="square">{dictionary.resources.squareButton}</button>
                    <button className="custom-button" id="rectangle">{dictionary.resources.rectangleButton}</button>
                    <button className="custom-button" id="triangle">{dictionary.resources.triangleButton}</button>
                    <button className="custom-button" id="circle">{dictionary.resources.circleButton}</button>
                    <button className="custom-button" id="clear">{dictionary.resources.clearStudentsBtn}</button>
                </div>
            </div>

        </div>
    )
};

ControlPanelPaint.propTypes = {
    dictionary: PropTypes.object.isRequired,
};

export default React.memo(ControlPanelPaint);