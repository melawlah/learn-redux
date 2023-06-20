import counterReducer from "./counter";
import loggedReducer from "./isLogged";
import { combineReducers } from "redux";

const allReducers = combineReducers({
    counter: counterReducer, //(you can have just counterReducer which means counterReducer: counterReducer) in es6
    isLogged: loggedReducer
})

export default allReducers;