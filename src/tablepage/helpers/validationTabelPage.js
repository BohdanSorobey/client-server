export const deleteRedBorder = e => {
    document.querySelector(`#${e.target.id}`).classList.toggle('red-border', false);
    // document.querySelector(`#${e.target.id}`).parentNode.parentNode.lastChild.children[0].style.display = 'none';
};
export const checkEnterDataStudents = e => {
    deleteRedBorder(e);
    if(!e.key.match(/[/A-Z]/i) || e.target.value.length >= 50 || e.key === '/'){
        if (e.key !== 'Backspace'){
            e.preventDefault();
        }
    }
};

export const checkValidNameStudents = name => {
    if (name.nameStudent.current.value.length < 2 || name.nameStudent.current.value.length > 50 || !name.nameStudent.current.value.split('').every(item => item.match(/[A-Z]/i)) || name.nameStudent.current.value === '/') {
        document.querySelector('#nameStudent').classList.toggle('red-border', true);
        return false;
    }
    return true;
};
export const checkValidSurNameStudents = surName => {
    if (surName.surnameStudent.current.value.length < 2 || surName.surnameStudent.current.value.length > 50 || !surName.surnameStudent.current.value.split('').every(item => item.match(/[A-Z]/i)) || surName.surnameStudent.current.value === '/') {
        document.querySelector('#surnameStudent').classList.toggle('red-border', true);
        return false;
    }
    return true;
};
export const checkValidCityStudents = city => {
    if (city.cityStudent.current.value.length < 2 || city.cityStudent.current.value.length > 50 || !city.cityStudent.current.value.split('').every(item => item.match(/[A-Z]/i)) || city.cityStudent.current.value === '/') {
        document.querySelector('#cityStudent').classList.toggle('red-border', true);
        return false;
    }
    return true;
};
export const checkValidAgeStudent = age => {
    let num = parseInt(age.ageStudent.current.value[0]);
    if (age.ageStudent.current.value.length > 3 ||
        age.ageStudent.current.value === '0' ||
        age.ageStudent.current.value === '' ||
        !age.ageStudent.current.value.split('').every(item => item.match(/[0-9]/i)) ||
        num === 0 || +age.ageStudent.current.value > 150) {
        document.querySelector('#ageStudent').classList.toggle('red-border', true);
        return false;
    }
    return true;
};
export const checkEnterAgeStudent = e => {
    deleteRedBorder(e);
    if (!e.key.match(/[0-9]/i) || e.target.value.length >= 3 || e.key === '/') {
        if (e.key !== 'Backspace'){
            e.preventDefault();
        }
    }
};

