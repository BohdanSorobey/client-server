import { all, fork } from 'redux-saga/effects';
//import {watchTranslatesSaga} from "./watchTranslatesSaga";
import {watchPageState, watchAndLog, watchDeleteGroupState, watchImageUpload, watchInfoAdminUsers,
    watchClearStudentState, watchResetTeacher, watchGetStaticInfoTeacher, watchUpdateStaticInfoTeacher} from "./defaultSaga";

const sagas = [
   // watchTranslatesSaga,
    watchAndLog,
    watchPageState,
    watchDeleteGroupState,
    watchClearStudentState,
    watchResetTeacher,
    watchGetStaticInfoTeacher,
    watchUpdateStaticInfoTeacher,
    watchImageUpload,
    watchInfoAdminUsers
];

export default function* rootSaga() {
    yield all(sagas.map(fork));
}