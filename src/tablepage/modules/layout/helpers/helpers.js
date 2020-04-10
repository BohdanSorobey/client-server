import * as constants from "../../../constants/constants";
import StudentsMain from "../../studentsTable";
import Account from "../../myAccount/MyAccount";
import Converter from "../../converter/index";
import Calculator from "../../calculator/index";
import Paint from "../../paint";
import React from "react";
import AdminPage from "../../adminPage/index";

export const renderAllGroups = (insertGroups, id) => {
    const xhr = new XMLHttpRequest();
    xhr.open("POST", `${constants.default.serverUrl}getAllGroups`);
    xhr.setRequestHeader("Content-type", "application/json");
    xhr.onreadystatechange = function () {
        if ( xhr.readyState === 4 && xhr.status === 200) {
            let res = JSON.parse(xhr.response);
            res.forEach(elem => insertGroups(elem))
        }
    };
    xhr.send(JSON.stringify({teachers_id: id}));
};

export const renderAllStudents = (addStudent, id) => {
    const xhr = new XMLHttpRequest();
    xhr.open("POST", `${constants.default.serverUrl}groupStudent`);
    xhr.setRequestHeader("Content-type", "application/json");
    xhr.onreadystatechange = function () {
        if ( xhr.readyState === 4 && xhr.status === 200) {
            let res = JSON.parse(xhr.response);
            res.forEach(elem => addStudent(elem))
        }
    };
    xhr.send(JSON.stringify({id}));
};

export const  checkLocation = () => {
    return localStorage.getItem("location");
};

export const checkCurrentMode = (currentMode, socket, teacher, onlineTeachers, dictionary) => {
    switch (currentMode) {
        case "table": return <StudentsMain currentMode = {currentMode}/>;
        case "account": return <Account socket={socket} teacher={teacher} onlineTeachers ={onlineTeachers} dictionary={dictionary}/>;
        case "converter": return <Converter  dictionary = {dictionary} currentMode = {currentMode}/>;
        case "calculator": return <Calculator  dictionary = {dictionary} currentMode = {currentMode}/>;
        case "paint": return <Paint currentMode = {currentMode} />;
        case "admin": return <AdminPage />;
    }
};

export const  getNameBrowser = () => {
    const nav = navigator.userAgent;
    if (nav.search(/Chrome/) > 0) return 'Google Chrome';
    if (nav.search(/Firefox/) > 0) return 'Firefox';
    if (nav.search(/Opera/) > 0) return 'Opera';
    if (nav.search(/Safari/) > 0) return 'Safari';
    if (nav.search(/MSIE/) > 0) return 'Internet Explorer';
};

export const tracePublicInfo = async (exist) => {
    let res = await fetch('http://www.geoplugin.net/json.gp',).catch(err => console.log(err));
    let all = await res.json();
    const isMobile = /Mobile|webOS|BlackBerry|IEMobile|MeeGo|mini|Fennec|Windows Phone|Android|iP(ad|od|hone)/i.test(navigator.userAgent);
    let whichDevice = null;
    if(!isMobile){
        whichDevice = "Desktop";
    } else {
        whichDevice = "Mobile";
    }
    let obj = {login: sessionStorage.getItem("login"),ip : all.geoplugin_request,
        city: all.geoplugin_city, device: whichDevice, online :`${window.navigator.onLine}`, browser: getNameBrowser()};
    if(exist !== "exist"){
        await createUserRequestToMongo(obj)
    } else {
        await updateUserRequestToMongo(obj)
    }
};

const createUserRequestToMongo = async (obj) => {
    await fetch(`${constants.default.serverUrl}mongoCreateUser`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(obj)
    });
};

const updateUserRequestToMongo = async (obj) => {
    await fetch(`${constants.default.serverUrl}updateMongoUser`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(obj)
    });
};

export const createRequestToMongoPopularMode = async (obj) => {
    await fetch(`${constants.default.serverUrl}updateMongoTime`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(obj)
    });
};

export const changeTimeMode = (modeCallback) => {
    modeCallback(new Date().getHours() * 3600 + new Date().getMinutes() * 60 + new Date().getSeconds())
};

export const changeTimeModeUnmount = (modeCallback, startTime, currentMode) => {
    let timeInsSec = (new Date().getHours() * 3600 + new Date().getMinutes() * 60 + new Date().getSeconds()) - startTime;
    modeCallback(timeInsSec);
    createRequestToMongoPopularMode({teacherLogin: sessionStorage.getItem("login"),
        mode: currentMode, time : timeInsSec}).catch(err => console.log(err));
};