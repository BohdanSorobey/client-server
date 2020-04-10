export const checkValidLogin = e => {
    if(!e.key.match(/[0-9\/A-Z]/i) || e.target.value.length >= 30 || e.key === '/'){
        if (e.key !== 'Backspace') {
            e.preventDefault();
        }
    } else if(e.key === "<"){
        e.key.replace = "";
    }
};

export const checkValidPassword = e => {
    if(e.key.match(/[\<\>]/i) || e.target.value.length >= 15 ){
        if (e.key !== 'Backspace') {
            e.preventDefault();
        }
    }
};

