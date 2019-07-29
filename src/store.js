import { createStore } from "redux"
import { rootReducer } from "./reducers/index"
import {  AddTodoAction, ToggleTodoAction, Change_filter, Add_TodoText } from "./actions/actions"

const store = createStore(rootReducer);

console.log(store.getState());

let unsubscribe = store.subscribe(()=>{
    console.log(store.getState());
})

store.dispatch(AddTodoAction("fuck"));
store.dispatch(ToggleTodoAction(1));
store.dispatch(Change_filter("active"));
store.dispatch(Add_TodoText("abc"));


export default store;