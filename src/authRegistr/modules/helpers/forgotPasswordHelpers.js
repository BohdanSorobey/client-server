
const checkLoginData = login => {
    if (login.current.value === '') {
        return false;
    }
    return true;
};
const checkKeyWordData = keyword => {
    if (keyword.current.value === '') {
        return false;
    }
    return true;
};
export const getPassword = (login, keyWord, password) => {
    if (!checkLoginData(login) || !checkKeyWordData(keyWord)) {
        return;
    }
    let obj = {
        login: login.current.value,
        keyWord: keyWord.current.value,
    };

    getPasswordDB(obj, password);
};
const getPasswordDB = (obj, password) => {
    console.log(obj);
    const xhr = new XMLHttpRequest();
    xhr.open("POST", `http://localhost:3000/getPassword`);
    xhr.setRequestHeader("Content-type", "application/json");
    xhr.send(JSON.stringify(obj));
    xhr.onreadystatechange = function () {
        if (xhr.status === 400) {
            console.log('error')
        } else if (xhr.status === 200 && xhr.readyState === 4) {
            const res = JSON.parse(this.response);
            if (res[0].keyword === undefined || res[0].keyword !== obj.keyWord) {
                password.current.value = 'Invalid login or keyWord'
            } else {
                password.current.value = `Yor password: ${res[0].password}`;
            }
        }
    };
};
