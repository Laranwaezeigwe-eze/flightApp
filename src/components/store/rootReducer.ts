import {combineReducers} from "@reduxjs/toolkit";
import counterReducer from './counter/slice.js'

const rootReducer = combineReducers({
    counter: counterReducer,
})
export default rootReducer