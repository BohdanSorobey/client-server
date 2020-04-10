export const checkValidEmail = e => {
    if(!/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(e)) {
        document.querySelector('#mail').classList.toggle('red-border', true);
        document.querySelector('#mailOutputId').style.display = 'flex';
        return false;
    }
    return true;
};
export const deleteRedBorder = (e) => {
    document.querySelector(`#${e.target.id}`).classList.toggle('red-border', false);
    document.querySelector(`#${e.target.id}`).parentNode.parentNode.parentNode.lastChild.children[0].style.display = 'none';
};
export const checkEnterLogin = (e) => {
    deleteRedBorder(e);
    if(!e.key.match(/[0-9\/A-Z]/i) || e.target.value.length >= 30 || e.key === '/'){
        if (e.key !== 'Backspace'){
            e.preventDefault();
        }
    }
};
export const checkValidLogin = (login) => {
    let num = parseInt(login[0]);
    if (isFinite(num) || login.length < 5 || !login.split('').every(item => item.match(/[0-9\/A-Z]/i)) || login === '/') {
        document.querySelector('#login').classList.toggle('red-border', true);
        document.querySelector('#loginOutputId').style.display = 'flex';
        return false;
    }
    return true;
};
export const checkEnterPassword = (e) => {
    deleteRedBorder(e);
    if(!e.key.match(/[0-9\/A-Z]/i) || e.target.value.length >= 15 || e.key === '/'){
        if (e.key !== 'Backspace'){
            e.preventDefault();
        }
    }
};
export const checkValidPassword = e => {
    if (e.length < 5 || e.length > 15 || !e.split('').every(item => item.match(/[0-9\/A-Z]/i)) || e === '/') {
        document.querySelector('#password1').classList.toggle('red-border', true);
        document.querySelector('#passwordOutputId').style.display = 'flex';
        return false;
    }
    return true;
};
export const checkValidConfirmPassword = (pass, pass2) => {
    if (pass !== pass2) {
        document.querySelector('#secondPassword').classList.toggle('red-border', true);
        document.querySelector('#secPasswordOutputId').style.display = 'flex';
        return false;
    }
    return true;
};
export const checkValidPhoneNumber = e => {
    if (e.length < 9 || !e.split('').every(item => item.match(/[0-9]/i)) || e.length > 9) {
        document.querySelector('#phone').classList.toggle('red-border', true);
        document.querySelector('#phoneOutputId').style.display = 'flex';
        return false;
    }
    return true;
};
export const checkEnterPhone = e => {
    deleteRedBorder(e);
    if (!e.key.match(/[+/0-9]/i) || e.target.value.length > 8 || e.key === '/') {
        if (e.key !== 'Backspace'){
            e.preventDefault();
        }
    }
};

