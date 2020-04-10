import * as constants from "../../../../../constants/constants";
import constantss from "../../../../../constants/constants";
import {toast} from "react-toastify";
import * as validation from './validationTabelStudent'


export const addGroup = (insertGroups, groups) => {
    if(groups.length >= 3)return false;
    const xhr = new XMLHttpRequest();
    xhr.open("POST", `${constants.default.serverUrl}groups`);
    xhr.setRequestHeader("Content-type", "application/json");
    xhr.onreadystatechange = function () {
        if(xhr.status === 200 && xhr.readyState === 4) {
            insertGroups(JSON.parse(this.response));
        }
    };
    xhr.send(JSON.stringify({groupName: `NewGroup${Date.now()}`, teachers_id: sessionStorage.getItem("teachers_id")}));
};

export const onDoubleGroupClick = (e) => {
    e.target.disabled = false;
    e.target.focus();
    e.target.classList.add("change-name-group");
};

export const changeNameRequest = (name, id, currentGroup, changeGroupName) => {
    const xhr = new XMLHttpRequest();
    xhr.open("POST", `${constantss.serverUrl}updateGroup`);
    xhr.setRequestHeader("Content-type", "application/json");
    xhr.onreadystatechange = function () {
        if (xhr.status === 200 && xhr.readyState === 4) {
            changeGroupName(currentGroup[0]);
        }
    };
    xhr.onerror = function () {
        alert("server error");
    };
    xhr.send(JSON.stringify({name, id}));
};

export const onBlurInput = (e, changeGroupName, groups) => {
    if (!validation.checkValidNameTable(e)) {
        return;
    }
    e.target.disabled = true;
    e.target.classList.remove("change-name-group");
    let currentGroup = groups.filter(elem => elem.groupname === e.target.defaultValue);
    currentGroup[0].groupname = e.target.value;
    changeNameRequest(currentGroup[0].groupname, currentGroup[0].groups_id, currentGroup, changeGroupName)
};

const deleteClick = (value, dictionary) => {
    toast.error(`🦄 ${value} ${dictionary.resources.deleteNotification}`, {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true
    });
};

export const  deleteRow = (e, students, deleteStudent, dictionary, notificationState) => {
    const id = e.target.id;
    let student = students.filter(elem => elem.user_id == id);
    const xhr = new XMLHttpRequest();
    xhr.open("POST", `${constants.default.serverUrl}delete`);
    xhr.setRequestHeader("Content-type", "application/json");
    xhr.onreadystatechange = function () {
        if(xhr.status === 200 && xhr.readyState === 4) {
            deleteStudent(id);
            if(!notificationState) {
                return;
            }
            deleteClick(student[0].firstname, dictionary)
        }
    };
    xhr.send(JSON.stringify({id, teacherLogin: sessionStorage.getItem("login")}));
};

const updateClick = (value) => {
    toast(`🦄 ${value}` , {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true
    });
};

export const  updateRow = (e, changeCurrentStudent, studentData, dictionary, notificationState) => {
    const xhr = new XMLHttpRequest();
    const allInputs = e.target.parentNode.parentNode.childNodes;
    let arrValues = [];
    allInputs.forEach(elem => arrValues.push(elem.value));
    arrValues = arrValues.slice(1, -1);
    if (!validation.checkValidNameStudents(arrValues[0]) ||
        !validation.checkValidSurNameStudents(arrValues[1]) ||
        !validation.checkValidAgeStudent(arrValues[2]) || !validation.checkValidCityStudents(arrValues[3])){
        e.target.style.background = "red";
        return
    }
    e.target.style.background = "white";
    let currentStudentRedux = studentData.filter(elem => elem.user_id == e.target.id);
    let arr = [];
    for(let key in currentStudentRedux[0]){
        arr.push(currentStudentRedux[0][key])
    }
    arr = arr.slice(1, -1);

    for(let i = 0 ; i < arrValues.length; i++){
        if(arrValues[i] !== arr[i]){
            if(!notificationState){
                console.log("not")
            }else {
                updateClick(`${arr[i]} ${dictionary.resources.updateNotification} ${arrValues[i]}`);
            }
        }
    }
    let data = {id: e.target.id, username: arrValues[0], lastname: arrValues[1],
        age: arrValues[2], city: arrValues[3], teacherLogin: sessionStorage.getItem("login")};
    xhr.open("POST", `${constants.default.serverUrl}update`);
    xhr.setRequestHeader("Content-type", "application/json");
    xhr.onreadystatechange = function () {
        if(xhr.status === 200 && xhr.readyState === 4) {
            changeCurrentStudent(0)
        }
    };
    xhr.send(JSON.stringify(data));
};
