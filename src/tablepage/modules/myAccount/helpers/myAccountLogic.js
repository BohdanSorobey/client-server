export const checkValidEmail = e => {
    if(!/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(e)) {
        document.querySelector('#mailMyAcc').classList.toggle('red-border', true);
        return false;
    }
    return true;
};
export const deleteRedBorder = (e) => {
    document.querySelector(`#${e.target.id}`).classList.toggle('red-border', false);
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
        document.querySelector('#loginMyAcc').classList.toggle('red-border', true);
        return false;
    }
    return true;
};


export const checkValidPhoneNumber = e => {
    if (e.length < 8 || !e.split('').every(item => item.match(/[0-9]/i))) {
        document.querySelector('#phoneMyAcc').classList.toggle('red-border', true);
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
export const openContextMenu = e => {
    console.log('DENIS LOH');
};

export const changeStaticInfo = (loginRef, mailRef, phoneRef) => {
    loginRef.current.disabled = false;
    mailRef.current.disabled = false;
    phoneRef.current.disabled = false;
};

export const saveStaticInfo = (loginRef, mailRef, phoneRef) => {
    loginRef.current.disabled = true;
    mailRef.current.disabled = true;
    phoneRef.current.disabled = true;
};


