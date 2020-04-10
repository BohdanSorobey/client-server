import React from "react";
import ReactDOM from "react-dom";
import Layout from "./modules/layout";
import { createStore} from "redux";
import {Provider} from "react-redux";
import rootReducer from "./rootReducer/rootReducer";
import "../styles/index.less";
import "../../assets/logo.png";
import "../../assets/settings.svg";
import "../../assets/size.png";
import "../../assets/robin.png";
import "../../assets/logout.png";
import "../../assets/back.svg";

const store = createStore(rootReducer);
window.store = store;

ReactDOM.render(
    <Provider store={store}><Layout /></Provider>,
    document.getElementById("root")
);


