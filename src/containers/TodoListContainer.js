import { connect } from "react-redux";
import TodoList from "../components/TodoList";
import { ToggleTodoAction, FetchItems } from "../actions/actions";
import { ToJS } from "../middleware/ToJS";

const mapDispatchToProps = dispatch => ({
  ToggleTodoAction: id => dispatch(ToggleTodoAction(id)),
  fetchTodoList: () => dispatch(FetchItems())
});

const getValidateItems = (items, filter) => {
  return items.filter(item => {
    switch (filter) {
      case "all":
        return true;
      case "completed":
        return item.get("completedStatus") === true;
      case "active":
        return item.get("completedStatus") === false;
      default:
        return false;
    }
  });
};
const mapStateToProps = state => ({
  todos: getValidateItems(state.getIn(["todos", "data"]), state.get("filter"))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ToJS(TodoList));
