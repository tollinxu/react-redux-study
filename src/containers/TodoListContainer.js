import { connect } from "react-redux";
import TodoList from "../components/TodoList";
import { ToggleTodoAction, FetchItems } from "../actions/actions";

const mapDispatchToProps = dispatch => ({
  ToggleTodoAction: id => dispatch(ToggleTodoAction(id)),
  fetchTodoList: ()=> dispatch(FetchItems())
});

const getValidateItems = (items, filter) => {
  return items.filter(item => {
    switch (filter) {
      case "all":
        return true;
      case "completed":
        return item.completedStatus === true;
      case "active":
        return item.completedStatus === false;
      default:
        return false;
    }
  });
};
const mapStateToProps = state => ({
  todos: getValidateItems(state.todos.data, state.filter)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
