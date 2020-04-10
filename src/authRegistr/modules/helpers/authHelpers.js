import * as constants from "../../constants/constants";

const changeUrl = (url) => {
    document.location.href = url;
};

export const sendRequestToServer = (e, login, password, refAuthMessage, dictionary) => {
    if(login.length === 0 || password.length === 0 )return false;
    if(login.match(/[\<\>]/i) || password.match(/[\<\>]/i) || login.length >= 13 || password.length >= 13 ){
        refAuthMessage.current.innerHTML = "You can not insert script here!!!";
    } else {
        const xhr = new XMLHttpRequest();
        xhr.open("POST", `${constants.default.authRequest}`);
        xhr.setRequestHeader("Content-type", "application/json");
        //xhr.setRequestHeader("Cookie", `${login} = ${password}`);
        xhr.onreadystatechange = function () {
            if (xhr.status === 401) {
                refAuthMessage.current.style.color ="red";
                refAuthMessage.current.innerHTML = dictionary.resources.errorLoginRequest;
            } else if(xhr.status === 200 && xhr.readyState === 4) {
                let newStudentValue = JSON.parse(this.response);
                sessionStorage.setItem("teachers_id", newStudentValue[0].teachers_id);
                sessionStorage.setItem("login", login);
                changeUrl(constants.default.loginUrl); // change to post request sended html dkfjdfheifheif
            }
        };
        //document.cookie = `${login} = ${password}; path=/`;
        //document.cookie = `${login} = ${password}`;
        xhr.send(JSON.stringify({login: login, password: password}));
    }
};

let checkObj = (obj) => {
    let res;
    for(let key in obj){
        if(obj[key].match(/[\<\>]/i) || obj[key].length >= 30){
            res = false;
            return res;
        } else {
            res = true;
        }
    }
    return res;
};

export const registrationRequest = (e, obj, message, registrationBtn, dictionary, toggleAuth) => {
    const res = checkObj(obj);
    if(res === false){
        message.current.style.color = "red";
        message.current.innerHTML = "No xss attacks"
    } else {
        const elementValue = obj;
        registrationBtn.current.disabled = true;
        const xhr = new XMLHttpRequest();
        xhr.open("POST", `${constants.default.registrationRequest}`);
        xhr.setRequestHeader("Content-type", "application/json");
        xhr.send(JSON.stringify(elementValue));
        xhr.onreadystatechange = function () {
            if (xhr.status === 400) {
                message.current.style.color = "red";
                message.current.innerHTML = dictionary.resources.registrationErrormessage;
                registrationBtn.current.disabled = false;
            } else if (xhr.status === 200) {
                message.current.style.color = "black";
                message.current.innerHTML = dictionary.resources.registrationSuccessMessage;
                setTimeout(toggleAuth, 3000)
            }
        };
    }
};