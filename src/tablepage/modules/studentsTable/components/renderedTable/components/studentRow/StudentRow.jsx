import React from 'react';
import PropTypes from 'prop-types';

const StudentRow = (props) => {
    const {idStudent, firstName, lastName, age, city, updateCallback, deleteCallback,
        dictionary, elemName, changeCurrentStudent, currentStudent, callbackOnKeyDown, callbackOnKeyDownAge, cancelCallBack, i} = props;
    return (
        <div className={"input-rows"}>{dictionary.resources[elemName]}
            <div className={"custom-input-table-rows "} >{i}</div>
            <input defaultValue={firstName} className={"custom-input-table-rows "} onKeyDown={(e) => callbackOnKeyDown(e)}/>
            <input defaultValue={lastName} className={"custom-input-table-rows "} onKeyDown={(e) => callbackOnKeyDown(e)}/>
            <input defaultValue={age} className={"custom-input-table-rows "} onKeyDown={(e) => callbackOnKeyDownAge(e)}/>
            <input defaultValue={city} className={"custom-input-table-rows "} onKeyDown={(e) => callbackOnKeyDown(e)}/>
            { idStudent !== currentStudent ?
            <div className={"buttons-block"}>
                <button style={{background: 'white'}} className={"custom-button-modal-rows"} id={idStudent} onClick={() => changeCurrentStudent(idStudent)}>{dictionary.resources.updateStudentBtn}</button>
                <button className={"custom-button-modal-rows"} id={idStudent} onClick={deleteCallback}>{dictionary.resources.deleteStudentBtn}</button>
            </div> :  <div className={"buttons-block"}>
                    <button className={"custom-button-modal-rows"} id={idStudent} onClick={updateCallback}>{dictionary.resources.okStudentBtn}</button>
                    <button className={"custom-button-modal-rows"} id={idStudent} onClick={(e) => cancelCallBack(e) }>{dictionary.resources.cancelStudentBtn}</button>
                </div>   }
        </div>
    );
};

StudentRow.propTypes = {
     firstName: PropTypes.string.isRequired,
     idStudent: PropTypes.number.isRequired,
     lastName: PropTypes.string.isRequired,
     age: PropTypes.string.isRequired,
     city: PropTypes.string.isRequired,
     dictionary: PropTypes.object.isRequired,
     elemName: PropTypes.string,
     updateCallback: PropTypes.func,
     deleteCallback: PropTypes.func,
};

export default React.memo(StudentRow);
