import * as constants from "../constants/constants";

export function* fetchDelete (payload) {
    try {
        yield fetch(`${constants.default.serverUrl}deleteGroup`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({groupId: payload})
        })
    } catch (e) {
        console.log(e)
    }
}

export function* clearStudent (payload) {
    try {
        yield fetch(`${constants.default.serverUrl}studentclear`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({groupId: payload})
        })
    } catch (e) {
        console.log(e)
    }
}

export function* resetTeacher (payload) {
    try {
        yield fetch(`${constants.default.serverUrl}resetSettings`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({teacherId: payload})
        })
    } catch (e) {
        console.log(e)
    }
}

export function* sendImage (payload) {
    let res;
    try {
       res = yield fetch(`${constants.default.serverUrl}sendImage`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        })
    } catch (e) {
        console.log(e)
    }
    return yield res.json();
}

export async function getInfo(payload) {
       let res =  await fetch(`${constants.default.serverUrl}getInfoTeacher`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({teacher_id: payload})
        });
    return await res.json();
}

export async function updateInfo(payload) {

    let res =  await fetch(`${constants.default.serverUrl}updateInfoTeacher`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    });
    return await res.json();
}


