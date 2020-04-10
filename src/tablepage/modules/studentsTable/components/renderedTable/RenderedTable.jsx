import React from "react";
import StudentRow from "./components/studentRow/StudentRow";
import * as helpers from "./helpers/helpersRenderedTable"
import GroupBlock from "./components/groupBlock/index";
import * as validation from './helpers/validationTabelStudent'

export default class RenderedTable extends React.Component {
    cancelUpdate = (e) => {
        let studentId = e.target.id;
        let oldValue = this.props.students.filter(elem => elem.user_id == studentId);
        let allInputs = e.target.parentNode.parentNode.childNodes;
        allInputs[0].value = oldValue[0].firstname;
        allInputs[1].value = oldValue[0].lastname;
        allInputs[2].value = oldValue[0].age;
        allInputs[3].value = oldValue[0].city;
        this.props.changeCurrentStudent(0);
    };
    render() {
        const { dictionary, groups, students, divs, activeGroup, insertGroups, makeGroupActive, changeGroupName, changeGroupToDelete,
            deleteStudent, toggleRowButtons, buttonsStudent, toggleOkCancelWindow, currentStudent, changeCurrentStudent, notificationState} = this.props;
        return (
            <>
            <div className={"container"}>
                <div className={"groups-wrapper"} >
                    {groups.map((elem) =><GroupBlock key={elem.groups_id}
                                                     keyDownNameTable={(e) => validation.checkEnterNameTable(e)}
                                                     groupname={elem.groupname}
                                                     groupId={elem.groups_id}
                                                     activateGroup={helpers.activateGroup}
                                                     requestModalCallback={toggleOkCancelWindow}
                                                     makeGroupActive={makeGroupActive}
                                                     groups={groups}
                                                     activeGroup={activeGroup}
                                                     doubleClickCallback={(e) => helpers.onDoubleGroupClick(e)}
                                                     onBlurInput={(e) => helpers.onBlurInput(e, changeGroupName, groups)}
                                                     changeGroupToDelete={changeGroupToDelete}

                    />)}
                    <div>
                        {groups.length !== 3 && sessionStorage.getItem("teachers_id") !== null ? <button className={"custom-button-modal"} onClick={() => helpers.addGroup(insertGroups, groups)}>+</button>:null}
                    </div>
                </div>


                <div className={"header-table"}>
                    {divs.map((elem) => <div key={elem.name} className={"header-table-div"} >{dictionary.resources[elem.name]}</div>)
                    }
                </div>
                <div className={"table-row"}>
                    { students.map((elem, i) => activeGroup === elem.groups_id ? <StudentRow firstName={elem.firstname}
                                                                                          callbackOnKeyDown={validation.checkEnterDataStudents}
                                                                                          callbackOnKeyDownAge={validation.checkEnterAgeStudent}
                                                                                          key = {elem.user_id}
                                                                                          lastName ={elem.lastname}
                                                                                          age={elem.age}
                                                                                             i ={i + 1}
                                                                                          city={elem.city}
                                                                                          dictionary={dictionary}
                                                                                          elemName ={elem.name}
                                                                                          deleteCallback={(e) => helpers.deleteRow(e, students, deleteStudent, dictionary, notificationState)}
                                                                                          idStudent = {elem.user_id}
                                                                                          updateCallback = {(e) => helpers.updateRow(e, changeCurrentStudent, students, dictionary, notificationState)}
                                                                                          toggleButtons = {toggleRowButtons}
                                                                                          isButtonsStudent = {buttonsStudent}
                                                                                          changeCurrentStudent = {changeCurrentStudent}
                                                                                          currentStudent={currentStudent}
                                                                                          cancelCallBack={this.cancelUpdate}

                    /> :null)
                    }
                </div>
            </div>
            </>
        );
    }
};