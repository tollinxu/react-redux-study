import {
  ADD_TODO,
  TOGGLE_TODO,
  FETCH_TODO_ITEMS,
  FETCH_TODO_ITEMS_SUCCESS,
  FETCH_TODO_ITEMS_FAID
} from "../actions/actionTypes";

import Immutable from "immutable";

const intialTodos = {
  isFetching: false,
  isSuccess: false,
  data: []
};

const reducer = (state = Immutable.fromJS([]), action) => {
  switch (action.type) {
    case ADD_TODO:
      const item = Immutable.fromJS({
        id: action.id,
        text: action.text,
        completedStatus: false
      });
      return state.push(item);
    case TOGGLE_TODO:
      return state.map(item =>
        item.get("id") === action.id
          ? item.set("completedStatus", !item.get("completedStatus"))
          : item
      );
    default:
      return state;
  }
};

const todos = (state = Immutable.fromJS(intialTodos), action) => {
  switch (action.type) {
    case FETCH_TODO_ITEMS:
      return state.set("isFetching", true);

    case FETCH_TODO_ITEMS_SUCCESS:
      return state.merge({
        isFetching: false,
        isSuccess: true,
        data: Immutable.fromJS(action.data)
      });
    case FETCH_TODO_ITEMS_FAID:
      return state.merge({
        isFetching: false,
        isSuccess: false,
        error: action.error
      });

    default:
      const data = state.get("data");
      return state.set("data", reducer(data, action));
  }
};

export default todos;
