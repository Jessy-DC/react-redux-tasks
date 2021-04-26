import {combineReducers} from "redux";
import {SET_VISIBILITY_FILTER, VisibilityFilters} from "../actions/tasks";
import tasks from './tasks';

const {SHOW_ALL} = VisibilityFilters;

function visibilityFilter(state = SHOW_ALL, action) {
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
})

export default tasksApp;