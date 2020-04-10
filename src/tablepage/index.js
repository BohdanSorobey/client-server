import React from "react";
import "regenerator-runtime/runtime";
import ReactDOM from "react-dom";
import Layout from "./modules/layout/index";
import "../styles/index.less";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./rootReducer/rootReducer";
import rootSaga from './sagas/rootSaga.js';
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();
//const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer,
    applyMiddleware(sagaMiddleware)
);
window.store = store;
sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <Provider store={store}><Layout /></Provider>,
    document.getElementById("root")
);
