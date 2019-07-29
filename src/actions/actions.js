import {
  ADD_TODO,
  TOGGLE_TODO,
  CHANGE_FILTER,
  ADD_TODOTEXT,
  FETCH_TODO_ITEMS_FAID,
  FETCH_TODO_ITEMS_SUCCESS,
  FETCH_TODO_ITEMS
} from "./actionTypes";

let todoItemId = 0;

export const FetchTodoItems = ()=>({
  type:FETCH_TODO_ITEMS
})

export const FetchTodoItemsFaild = (error)=>({
  type:FETCH_TODO_ITEMS_FAID,
  error
})

export const FetchTodoItemsSuccess = (data)=>({
  type:FETCH_TODO_ITEMS_SUCCESS,
  data
})

export const FetchItems = ()=>{
  return (dispatch)=>{
    dispatch(FetchTodoItems());
    return fetch("./mock/todos.json").then(response=>{
      response.json().then(data=>{
        
        dispatch(FetchTodoItemsSuccess(data));
      })},    
    error=>{
      dispatch(FetchTodoItemsFaild(error));
    });
  }
}

/**
 * add todo item
 * @param {*} text
 */
export const AddTodoAction = text => ({
  type: ADD_TODO,
  id: todoItemId++,
  text: text
});

/**
 * 修改todo item 状态
 * @param {*} id
 */
export const ToggleTodoAction = id => ({
  type: TOGGLE_TODO,
  id
});

/**
 * 修改filter
 * @param {*} filter
 */
export const Change_filter = filter => ({
  type: CHANGE_FILTER,
  "filter" : filter
});

/**
 * 添加todo的内容
 * @param {*} text 
 */
export const Add_TodoText = text => ({
  type: ADD_TODOTEXT,
  text: text
});
