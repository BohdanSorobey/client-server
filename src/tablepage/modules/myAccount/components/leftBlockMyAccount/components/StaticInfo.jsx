import React from 'react';
import PropTypes from "prop-types";

const StaticInfo = props => {

    const {infoTeacher, toggleButtonImage, buttonImageState, sendImage, stateInfo, labelClass, classDiv, labelText, stateButton, placeholderKey, inputType, classNameInput, inputRef, classImg, imgSrc, buttonNameChange, dictionary, callbackOnClick, classButton, inputId, callbackOnKeyDown, buttonNameSave} = props;
    const refImage = React.createRef();
    const toggleButton = (e) => {
        e.preventDefault();
        toggleButtonImage();
    };
    const convertImageAndSend = (e) => {
        e.preventDefault();
        const fileType = e.target.files[0].type;
        if(fileType !== "image/png" && fileType !=="image/jpeg" && fileType !=="image/svg"){
            alert("you can insert image only jpeg/png/svg format");
            return false
        }
        let fileReader = new FileReader;
        fileReader.readAsDataURL (e.target.files[0]);
        fileReader.onload = function ( event ) {
            const data = {img:event.target.result, teachersId:sessionStorage.getItem("teachers_id"), ref:refImage};
            sendImage(data);
        };
        toggleButtonImage();
    };

    return(
        <div className={classDiv}>
            {buttonNameChange === 'change' ?
                <div className='button-account-block'><button onClick={callbackOnClick} className={classButton}>{stateButton === false ? dictionary.resources[buttonNameChange] : dictionary.resources[buttonNameSave]}</button></div> :
            null}
            {classImg === 'my-account-logo-page' ? <div className={"image-block-add"}><div className={"image-block-wrap"}>
                <img id={"file-image"} ref={refImage} src={infoTeacher === null ||  infoTeacher.teacher_icon === null  ? "assets/robin.png" : infoTeacher.teacher_icon} onContextMenu={toggleButton} className={classImg}/></div>{buttonImageState ? <div className={"image-block-button"} ><button className={"button-image"}>Add image</button>
                <input className={"input-image"} type={"file"} onChange={convertImageAndSend} /></div>:null}</div> : null}
            <div>
            <label htmlFor={inputId} className={labelClass}>{dictionary.resources[labelText]}</label>
                <input  defaultValue={stateInfo} ref={inputRef} disabled='disabled' className={classNameInput} type={inputType} placeholder={dictionary.placeholders[placeholderKey]} id={inputId} onKeyDown={callbackOnKeyDown}/>
            </div>
        </div>
    )
};
React.propTypes = {
    callbackOnKeyDown: PropTypes.func,
};
export default React.memo(StaticInfo);