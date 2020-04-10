import * as constants from "../../../constants/constants";
import {toast} from "react-toastify";
import * as validation from '../../../helpers/validationTabelPage'


export const createStudent = (activeGroup, addStudent, inputsRefs, dictionary, notificationState) => {
    if (!validation.checkValidNameStudents(inputsRefs) ||
        !validation.checkValidSurNameStudents(inputsRefs) ||
        !validation.checkValidAgeStudent(inputsRefs) || !validation.checkValidCityStudents(inputsRefs)) {
        return
    }
    let data = {
        teacherLogin: sessionStorage.getItem("login"),
        firstname: inputsRefs.nameStudent.current.value,
        lastname: inputsRefs.surnameStudent.current.value,
        age:inputsRefs.ageStudent.current.value,
        city:inputsRefs.cityStudent.current.value,
        groups_id: activeGroup,
    };
    const xhr = new XMLHttpRequest();
    xhr.open("POST", `${constants.default.serverUrl}createStudent`);
    xhr.setRequestHeader("Content-type", "application/json");
    xhr.onreadystatechange = function () {
        if (xhr.status === 200 && xhr.readyState === 4) {
            let res = JSON.parse(this.response);
            res.forEach(elem => {
                addStudent(elem);
                if(notificationState === false) return;
                createClick(elem.firstname, dictionary)
            });
            inputsRefs.nameStudent.current.value = null;
            inputsRefs.surnameStudent.current.value = null;
            inputsRefs.ageStudent.current.value = null;
            inputsRefs.cityStudent.current.value = null;
        }
    };
    xhr.send(JSON.stringify(data));
};

const createClick = (value, dictionary) => {
    toast.success(`🦄 ${value} ${dictionary.resources.createStudentNotification}`, {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
    });
};