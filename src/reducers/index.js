import { combineReducers } from "redux-immutable";
import todos  from "./todos";
import {text} from "./text"
import { filter } from "./filter";

export const rootReducer = combineReducers({
    text,
    todos,
    filter  
});
//const initial = {
//    text:'',
//    todos:[],
//    filter:'all'
//}
//export const rootReducer = (state, actions)=>({
//    text:todoText,
//    todos:todos,
//    filter:filter
//})
