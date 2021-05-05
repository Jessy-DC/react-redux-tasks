//1 ADD_TASK
//2 DEL_TASK
//3 SET_VISIBILITY_FILTER

export const ADD_TASK = 'ADD_TASK';
export const DEL_TASK = 'DEL_TASK';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

export const VisibilityFilters = {
    SHOW_ALL : 'SHOW_ALL',
    SHOW_DELETED : 'SHOW_DELETED',
    SHOW_ACTIVE : 'SHOW_ACTIVE',
}
/**
 * 
 * @param {*} text 
 */
export function addTask(text) {
    return {
        type :ADD_TASK,
        text: text
    }
}

export function delTask(index) {
    return {
        type : DEL_TASK,
        index: index
    }
}

export function setVisibilityFilter(filter) {
    return {
        type : SET_VISIBILITY_FILTER,
        filter: filter
    }
}