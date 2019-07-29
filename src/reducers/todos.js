import {
  ADD_TODO,
  TOGGLE_TODO,
  FETCH_TODO_ITEMS,
  FETCH_TODO_ITEMS_SUCCESS,
  FETCH_TODO_ITEMS_FAID
} from "../actions/actionTypes";

import Immutable from "Immutable"

const intialTodos = {
  isFetching: false,
  isSuccess: false,
  data: []
};

const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completedStatus: false
        }
      ];
    case TOGGLE_TODO:
      return state.map(item =>
        item.id === action.id
          ? { ...item, completedStatus: !item.completedStatus }
          : item
      );
    default:
      return state;
  }
};

const todos = (state = Immutable.fromJS(intialTodos), action) => {
  switch (action.type) {
    case FETCH_TODO_ITEMS:
    state.set("isFetching", true);
      return {
        ...state,
        isFetching: true
      };

    case FETCH_TODO_ITEMS_SUCCESS:
      return {
        isFetching: false,
        isSuccess: true,
        data: action.data
      };
    case FETCH_TODO_ITEMS_FAID:
      return {
        isFetching: false,
        isSuccess: false,
        error: action.error
      };

    default:
      return {
        ...state,
        data: reducer(state.data, action)
      };
  }
};

export default todos;
