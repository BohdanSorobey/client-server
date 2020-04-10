import React from "react";
import CustomInput from "./components/cunsomInput/CustomInput";
import * as validation from "../../helpers/validationTabelPage";
import CustomButon from "./components/customButton/CustomButton";
import RenderedTable from "./components/renderedTable/index";
import * as constants from "../../constants/constants";
import * as helpersMain from "./helpers/helpersStudentsMain"
import OkCanselModal from "../modalMenager/components/OkCanselModal";
import * as helpers from "../layout/helpers/helpers";

export default class StudentsMain extends React.Component {

    inputsRefs = {
        nameStudent: React.createRef(),
        surnameStudent: React.createRef(),
        cityStudent : React.createRef(),
        ageStudent: React.createRef(),
    };

    componentDidMount = () => {
        helpers.changeTimeMode(this.props.changeTimeStudentMode)
    };

    componentWillUnmount = () => {
        helpers.changeTimeModeUnmount(this.props.changeTimeStudentMode, this.props.timeStundentsMode, this.props.currentMode)
    };

    callbackClear = () => {
        this.props.clearStudents(this.props.activeGroup);
    };

    callbackDeleteGroup = () => {
        const {deleteGroup, groupToDelete} = this.props;
        deleteGroup(groupToDelete);
    };

    callbackResetSettings = () =>{
        let arrGroups = [];
        this.props.groups.forEach(elem => arrGroups.push(elem.groups_id));
        this.props.resetTeacher({id: sessionStorage.getItem("teachers_id"), groups:arrGroups});
        document.body.style.direction = "ltr";
        localStorage.setItem("location", "ltr");
    };

    render() {
       // console.log(this.props)
        const {inputs, dictionary, buttons, students, addStudent, activeGroup, isModalOkCancel, toggleOkCancelWindow, currentModal, changeModal, notificationState} = this.props;
        return (
            <>
                <h1 className={"student-title"}>{dictionary.resources.tableMode}</h1>
                <main className={"table-wrapper"}>
                <div className={"control-panel"}>
                    <h1>{dictionary.resources.controlPanel}</h1>
                    <p>{dictionary.resources.addStudentTable}</p>
                {inputs.map((input) => <CustomInput key={input.labelText}
                                                               classDivSelect={input.classDivSelect}
                                                               selectId={input.selectId}
                                                               outputClass={input.outputClass}
                                                               classNameDivOutput={input.classDivOutput}
                                                               idOutput={input.idOutput}
                                                               outputRef={this.inputsRefs[input.idOutput]}
                                                               outputText={input.outputText}
                                                               inputRef = {this.inputsRefs[input.id]}
                                                               labelText={input.labelText}
                                                               dictionary={dictionary}
                                                               inputType={input.type}
                                                               placeholderKey={input.placeholderKey}
                                                               inputId={input.id}
                                                               classNameDiv={input.classDiv}
                                                               classNameInput={input.classInput}
                                                               callbackOnKeyDown={validation[input.keyDown]}
                />)}
                    {buttons.map((elem) => <CustomButon dictionary={dictionary}
                                                                   key={elem.resourceKey}
                                                                   nameButton = {elem.name}
                                                                   classNameButton = {elem.classButton}
                                                                   classNameDiv = {elem.classDiv}
                                                                   callback={elem.name === "createStudentBtn" ? () => helpersMain.createStudent(activeGroup, addStudent, this.inputsRefs, dictionary, notificationState ) : () => changeModal("clear")}

                    />)
                    }
                </div>
                    <RenderedTable renderStudents = {this.renderAllStudents} toggleOkCancelWindow ={changeModal} />
                </main>
                <OkCanselModal isOkModal={isModalOkCancel}
                               toggleOkCancelWindow={toggleOkCancelWindow}
                               dictionary={dictionary}
                               callbackClear = {this.callbackClear}
                               callbackDeleteGroup = {this.callbackDeleteGroup}
                               callbackResetSettings = {this.callbackResetSettings}
                               currentModal = {currentModal}
                />
            </>
        );
    }
};
