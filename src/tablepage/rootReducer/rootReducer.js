import {configReducer} from "./reducers/configReducer";
import {commonReducer} from "./reducers/commonReducer";
import {combineReducers} from "redux";
import {translatesReducer} from "./reducers/translatesReducer";
import {modalReducer} from "./reducers/modalReducer";
import {settingsModalReducer} from "./reducers/modalSettingsReducer";
import {teacherReducer} from "./reducers/teacherReducer";
import {adminReducer} from "./reducers/adminReduser";
import { chatReducer } from "./reducers/chatReducer";

export default combineReducers({
    config: configReducer,
    common: commonReducer,
    translates: translatesReducer,
    modal: modalReducer,
    settingsModal: settingsModalReducer,
    teacher: teacherReducer,
    admin: adminReducer,
    chats: chatReducer,
});