export const changeLocation = (CHANGE_LOCALE, refSelect) => {
    let option  = refSelect.current.options[refSelect.current.selectedIndex].value;
    if(option === "ar"){
        document.body.style.direction = "rtl";
        localStorage.setItem("location", "rtl");
    } else {
        document.body.style.direction = "ltr";
        localStorage.setItem("location", "ltr");
    }
    localStorage.setItem("locale", option);
    CHANGE_LOCALE(option);
};


const authUrl = 'http://localhost:7870';
export const changeUrl = (url) => {
    document.location.href = url;
};

export const fullScreen = () => {
    document.documentElement.requestFullscreen();
};

export const logOut = () => {
    changeUrl(authUrl);
};