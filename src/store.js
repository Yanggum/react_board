import {configureStore} from "@reduxjs/toolkit";
import rootReducer from "./modules/rootReducer";
import {applyMiddleware, compose} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import {logger} from "redux-logger/src";

const enhancer = process.env.NODE_ENV === 'production'
    ? compose(applyMiddleware())
    : composeWithDevTools(applyMiddleware(logger));

let store = configureStore({
    reducer: { rootReducer },
    enhancer
});

export default store;
