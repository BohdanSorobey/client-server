import config from "../../config/config";
import actionTypes from "../../constants/actionTypes";

const getCurrentMode = () => {
    const modeFromLS = sessionStorage.getItem("login");
    return modeFromLS === "admin" ? modeFromLS : config.currentMode;
};

const getCurrentTeacher = () => {
    const teacherID = sessionStorage.getItem("teachers_id");
    const teacherLogin = sessionStorage.getItem("login");
    const teacher = { id: teacherID, login: teacherLogin};
    return teacher ? teacher : config.defaultTeacher;
};

const currentTeacher = getCurrentTeacher();

const currentModes = getCurrentMode();

const initialState = {
    groups: config.defaultGroups,
    students: config.defaultStudents,
    activeGroup: config.activeGroup,
    buttonsStudent: config.buttonsStudent,
    currentStudent: config.currentStudent,
    currentMode: currentModes,
    groupToDelete: config.groupToDelete,
    onlineTeachers: config.onlineTeachers,
    infoTeacher: config.infoTeacher,
    teacher: currentTeacher,
};

export const teacherReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.INSERT_GROUPS:
            return {
                ...state,
                groups: [...state.groups, action.payload]
            };
        case actionTypes.ADD_STUDENT:
            return {
                ...state,
                students: [...state.students, action.payload]
            };
        case actionTypes.ACTIVE_GROUP:
            return {
                ...state,
                activeGroup:  action.payload,
            };
        case actionTypes.DELETE_STUDENT:
            return {
                ...state,
                students:  [...state.students.filter((item) => (item.user_id !== +action.payload))],
            };
        case actionTypes.TOGGLE_BUTTONS_STUDENT:
            return {
                ...state,
                buttonsStudent: !state.buttonsStudent
            };
        case actionTypes.CURRENT_STUDENT:
            return {
                ...state,
                currentStudent: action.payload
            };
        case actionTypes.TOGGLE_MODE:
            return {
                ...state,
                currentMode: action.payload
            };
        case actionTypes.CHANGE_GROUP_NAME:
            return {
                ...state,
                groups: [ ...state.groups.map((item) => {
                    if(item.groups_id === action.payload.groups_id){
                        item.groupname === action.payload.groupname;
                        return item;
                    } else {
                        return item;
                    }
                })]
            };
        case actionTypes.DELETE_GROUP:
            return {
                ...state,
                groups:  [...state.groups.filter((item) => (item.groups_id !== +action.payload))],
                students:  [...state.students.filter((item) => (item.groups_id !== +action.payload))],
            };
        case actionTypes.GROUP_TO_DELETE:
            return {
                ...state,
                groupToDelete:  action.payload,
            };
        case actionTypes.CLEAR_STUDENTS:
            return {
                ...state,
                students:  [...state.students.filter((item) => (item.groups_id !== +action.payload))],
            };
        case actionTypes.RESET_TEACHER:
            return {
                ...state,
                students:  [],
                groups: [],
            };
        case actionTypes.ONLINE_TEACHERS:
            return {
                ...state,
                onlineTeachers:  action.payload,
            };
        case actionTypes.GET_INFO_TEACHER:
            return {
                ...state,
                infoTeacher: action.payload,
            };

        default:
            return state;
    }
};