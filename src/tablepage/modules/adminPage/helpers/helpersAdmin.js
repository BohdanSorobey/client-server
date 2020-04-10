export const checkClicks = (allClicks) => {
    let mostClicked = [];
    allClicks.map(elem => {
        if(elem.delete > elem.create && elem.delete > elem.update ){
            mostClicked.push("delete")
        } else if(elem.create > elem.delete && elem.create > elem.update ){
            mostClicked.push("create")
        } else if(elem.update > elem.delete && elem.update > elem.create ){
            mostClicked.push("update")
        } else {
            mostClicked.push("none or same value")
        }
    });
    return mostClicked
};

export const checkPopularMode = (allClicks) => {
    let popularMode = [];
    allClicks.map(elem => {
        if(elem.converter > elem.calculator && elem.converter > elem.paint && elem.converter > elem.table){
            popularMode.push("converter");
        } else if(elem.calculator > elem.converter && elem.calculator > elem.paint && elem.calculator > elem.table){
            popularMode.push("calculator");
        } else if(elem.table > elem.calculator && elem.table > elem.paint && elem.table > elem.converter ){
            popularMode.push("table");
        } else if(elem.paint > elem.calculator && elem.paint > elem.table && elem.paint > elem.converter ){
            popularMode.push("paint");
        } else {
            popularMode.push("none or same value");
        }
    });
    return popularMode;
};

export const checkIsChat = (allClicks) => {
    let isChat = [];
    allClicks.map(elem => {
        if(elem.messages > 50){
            isChat.push("true")
        } else {
            isChat.push("false")
        }
    });
    return isChat
};