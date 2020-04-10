
export const checkEnterDataStudents = e => {
    if(!e.key.match(/[/A-Z]/i) || e.target.value.length >= 50 || e.key === '/'){
        if (e.key !== 'Backspace'){
            e.preventDefault();
        }
    }
};

export const checkValidNameStudents = name => {
    if (name.length < 2 || name.length > 50 || !name.split('').every(item => item.match(/[A-Z]/i)) || name === '/') {
        return false;
    }
    return true;
};
export const checkValidSurNameStudents = surName => {
    if (surName.length < 2 || surName.length > 50 || !surName.split('').every(item => item.match(/[A-Z]/i)) || surName === '/') {
        return false;
    }
    return true;
};
export const checkValidCityStudents = city => {
    if (city.length < 2 || city.length > 50 || !city.split('').every(item => item.match(/[A-Z]/i)) || city === '/') {
        return false;
    }
    return true;
};
export const checkValidAgeStudent = age => {
    let num = parseInt(age[0]);
    if (age.length > 3 || age === '0' || age === '' || !age.split('').every(item => item.match(/[0-9]/i)) ||  num === 0 ||  +age > 150) {
        return false;
    }
    return true;
};
export const checkEnterAgeStudent = e => {
    if (!e.key.match(/[0-9]/i) || e.target.value.length >= 3 || e.key === '/') {
        if (e.key !== 'Backspace'){
            e.preventDefault();
        }
    }
};
export const checkValidNameTable = e => {
    if (e.target.value === '' ||
        e.target.value.length >= 10 ||
        !e.target.value.split('').every(item => item.match(/[0-9\/A-Z]/i)) ||
        e.target.value === '/') {
        return false;
    }
    return true;
};
export const checkEnterNameTable = e => {
    if (!e.key.match(/[0-9\/A-Z]/i) || e.target.value.length >= 10 || e.key === '/') {
        if (e.key !== 'Backspace'){
            e.preventDefault();
        }
    }
};

