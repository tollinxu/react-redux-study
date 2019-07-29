import { connect } from "react-redux"
import  Footer  from "../components/Footer"
import { Change_filter } from "../actions/actions"

const mapDispatchToProps = dispatch =>({
    Change_filter: filter=>dispatch(Change_filter(filter))
})
 

const mapStateToProps = state => ({
   filter: state.get("filter")
});

export default connect(mapStateToProps, mapDispatchToProps)(Footer)