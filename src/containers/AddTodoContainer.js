import { connect } from "react-redux"
import AddTodo  from "../components/AddTodo"
import { AddTodoAction, Add_TodoText } from "../actions/actions"

const mapDispatchToProps = dispatch =>({
    AddTodoAction: text=>dispatch(AddTodoAction(text)),
    Add_TodoText: text=>dispatch(Add_TodoText(text))
});
 

const mapStateToProps = state => ({
   text: state.text
});

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo)