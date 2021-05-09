import {connect} from 'react-redux';
import Link from '../components/link.js';
import {setVisibilityFilter} from '../actions/tasks'
import { getAllTasksAPI } from '../actions/apiTasks.js';

const mapStateToProps = (state, ownProps) => {
    return {
        active : state.visibilityFilter === ownProps.filter
    } 
 }
 
 const mapDispatchToProps = (dispatch, ownProps) => {
     return {
        onClick : id => {
             dispatch(setVisibilityFilter(ownProps.filter))
             if (ownProps.filter === 'SHOW_API') {
                dispatch(getAllTasksAPI())
             }
         }
     }
     
 }

const FilterLink = connect(
    mapStateToProps,
    mapDispatchToProps
)(Link);

export default FilterLink;