import {combineReducers} from 'redux';
import { SET_VISIBILITY_FILTER,VisibilityFilters } from '../actions/tasks';

import tasks from './tasks';
import apiTasks from './apiTasks'

const  {SHOW_ALL,SHOW_ACTIVE} = VisibilityFilters;

function visibilityFilter(state = SHOW_ALL, action){
    
    switch (action.type) {
        case SET_VISIBILITY_FILTER:
            return action.filter;
        default:
            return state;
    }
}

const tasksApp = combineReducers({
    visibilityFilter,
    tasks,
    apiTasks,
})

export default tasksApp;