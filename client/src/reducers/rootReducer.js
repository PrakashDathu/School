/**
 * Root reducer
 */
import { combineReducers } from 'redux';
import appReducer from "./reducers";
import authReducer from "../views/Login/authReducer";

export default asyncReducers =>
    combineReducers({ app: appReducer,
        auth: authReducer, ...asyncReducers });
