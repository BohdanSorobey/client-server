import { takeEvery, put, call, select, delay, takeLatest } from 'redux-saga/effects';
import actionTypes from "../constants/actionTypes";

import {fetchDelete, clearStudent, resetTeacher, getInfo, updateInfo, sendImage} from "./api"


function* pageChangedAsync(action) {
    //yield delay(3000);
    yield put({type:actionTypes.TOGGLE_MODE , payload: action.payload});
}

export function* watchAndLog() {
    yield takeEvery('*', function* logger(action) {
        const state = yield select()
        // console.log('action', action)
        // console.log('state after', state)
    })
}

export function* watchPageState() {
    yield takeEvery(actionTypes.TOGGLE_MODE_ASYNC, pageChangedAsync);
}

function* deleteGroupRequest(action) {
    yield call(fetchDelete, action.payload);
    yield put({ type: actionTypes.TOGGLE_ALL_MODELS });
}

function* clearStudentsRequest(action) {
    yield call(clearStudent, action.payload);
    yield put({ type: actionTypes.CLEAR_STUDENTS, payload: action.payload });
    yield put({ type: actionTypes.TOGGLE_ALL_MODELS });
}

function* resetTeacherRequest(action) {
    yield call(resetTeacher, action.payload);
    yield put({ type: actionTypes.RESET_TEACHER, payload: action.payload });
    yield put({ type: actionTypes.TOGGLE_ALL_MODELS });
}

function* uploadImage(action) {
    let res = yield call(sendImage, action.payload);
    yield put({ type: actionTypes.GET_INFO_TEACHER, payload: res[0]});
}

function* getInfoAdmin(action) {
    //let res = yield call(sendImage, action.payload);
    yield put({ type: actionTypes.ADD_USERS, payload: action.payload});
}

export function* watchInfoAdminUsers() {
    yield takeLatest(actionTypes.GET_INFO_ADMIN_ASYNC, getInfoAdmin);
}

export function* watchImageUpload() {
    yield takeLatest(actionTypes.SEND_IMAGE_ASYNC, uploadImage);
}

export function* watchDeleteGroupState() {
    yield takeLatest(actionTypes.DELETE_GROUP, deleteGroupRequest);
}

export function* watchClearStudentState() {
    yield takeLatest(actionTypes.CLEAR_STUDENTS_ASYNC, clearStudentsRequest);
}

export function* watchResetTeacher() {
    yield takeLatest(actionTypes.RESET_TEACHER_ASYNC, resetTeacherRequest);
}

export function* watchGetStaticInfoTeacher() {
    yield takeLatest(actionTypes.GET_INFO_TEACHER_ASYNC, getInfoTeacher);
}

export function* getInfoTeacher(action) {
    let result = yield call(getInfo, action.payload);
    yield put({ type: actionTypes.GET_INFO_TEACHER, payload: Array.isArray(result) ? result[0] : result});
}

export function* watchUpdateStaticInfoTeacher() {
    yield takeLatest(actionTypes.UPDATE_INFO_TEACHER_ASYNC, updateInfoTeacher);
}

export function* updateInfoTeacher(action) {
     let res = yield call(updateInfo, action.payload);
     if (res === 'Not unikalno') {
         alert('Such login already exists');
         return;
     }
     yield put({ type: actionTypes.GET_INFO_TEACHER, payload: action.payload});
}