import TaskList from '../components/taskList';
import {connect} from 'react-redux';
import { delTask } from '../actions/tasks';

const getVisibleTasks = (tasks,filter) => {
    switch (filter) {
        case 'SHOW_ALL':
            return tasks
        case 'SHOW_DELETED':
            return tasks.filter(t=> t.deleted);
        case 'SHOW_ACTIVE':
                return tasks.filter(t=> !t.deleted);
        case 'SHOW_API':
            return tasks
        default:
            return tasks
    }
}

const mapStateToProps = state => {
    let tasks =[];
    if (state.visibilityFilter === 'SHOW_API') {
        tasks = state.apiTasks.tasks
    } else {
        tasks = state.tasks;
    }
   return {
    tasks : getVisibleTasks(tasks, state.visibilityFilter)
   } 
}

const mapDispatchToProps = dispatch => {
    return {
        onTaskclick : id => {
            dispatch(delTask(id))
        }
    }
    
}

const VisibleTaskList = connect(
    mapStateToProps,
    mapDispatchToProps
)(TaskList);

export default VisibleTaskList;