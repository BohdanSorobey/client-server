import { takeEvery, put, call, select } from 'redux-saga/effects';
import actionTypes from "../config/actionTypes";

import translates from "../translates/all";

const saveDataLS = (key, value) => {
    if (window && window.localStorage) {
        window.localStorage.setItem(key, value);
    }
};

export function* watchTranslatesSaga() {
    yield takeEvery(actionTypes.CHANGE_LOCALE, changeLocale)
}

function* changeLocale(action) {
    if (!action.payload) {
        return;
    }

    const selectedLocale = action.payload;
    yield call(saveDataLS, 'locale', selectedLocale);

    const currentLocale = yield select(state => state.translates.locale);
    if (currentLocale === selectedLocale) {
        return;
    }

    const payload = {
        locale: selectedLocale,
        translates: translates[selectedLocale],
    };
    yield put({type: actionTypes.SET_LOCALE, payload});
}
