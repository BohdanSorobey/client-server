import en from "./en";
import ru from "./ru";
import ar from "./ar";

const translates = {
    en, ar, ru,
};

export const getTranslatesByLocale = locale => {
    return translates[locale];
};