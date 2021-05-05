import { ADD_TASK, DEL_TASK } from "../actions/tasks";

/**
 * {
    id : 0,
    text : action.text,
    deleted:false
   }
 * @param {*} state 
 * @param {*} action 
 */

let taksId = 0;

function tasks(state = [], action){
   //return state;
    switch (action.type) {
        case ADD_TASK:
            return [
                ...state,
                {
                    id : taksId++,
                    text : action.text,
                    deleted:false
                }
            ];
        case DEL_TASK:
            return state.map((task,index) => {
                if (index === action.index){
                    task.deleted =  !task.deleted;
                }
                return task;
            })
        default:
                return state
    }
   
}

export default tasks;