import { ADD_TODOTEXT } from "../actions/actionTypes";

export const text = (state = "", action) => {
  switch (action.type) {
    case ADD_TODOTEXT:
      return action.text;
    default:
      return state;
  }
};
