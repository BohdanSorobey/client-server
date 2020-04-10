import config from "../../config/config";
import actionTypes from "../../constants/actionTypes";


const initialState = {
    allUsers: config.allUsers,
    allClicks: config.allClicks,
    timeStundentsMode: config.timeStundentsMode,
    timeCalculatorMode: config.timeCalculatorMode,
    timePaintMode: config.timePaintMode,
    timeConverterMode: config.timeConverterMode,
};

export const adminReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_USERS:
            return {
                ...state,
                allUsers: [...state.allUsers, action.payload]
            };
        case actionTypes.ADD_CLICKS:
            return {
                ...state,
                allClicks: [...state.allClicks, action.payload]
            };
        case actionTypes.ADD_TIME_STUDENT_MODE:
            return {
                ...state,
                timeStundentsMode: action.payload
            };
        case actionTypes.ADD_TIME_CALCULATOR_MODE:
            return {
                ...state,
                timeCalculatorMode: action.payload
            };
        case actionTypes.ADD_TIME_PAINT_MODE:
            return {
                ...state,
                timePaintMode: action.payload
            };
        case actionTypes.ADD_TIME_CONVERTER_MODE:
            return {
                ...state,
                timeConverterMode: action.payload
            };
        default:
            return state;
    }
};