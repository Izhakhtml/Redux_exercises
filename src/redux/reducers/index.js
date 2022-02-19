import { combineReducers } from "redux";
import TodoReducer from './todo'
const GlobalReducers = combineReducers({
    todos:TodoReducer
})
export default GlobalReducers;