import {ADD_TASK, DEL_TASK} from "../actions/tasks";

let taskId = 0

function tasks(state = [], action) {
    switch(action.type) {
        case ADD_TASK:
            return [
                ...state,
                {
                    id: taskId++,
                    text: action.text,
                    deleted: false
                }
            ];
        case DEL_TASK:
            state.map((task, index) => {
                if(index === action.index) {
                    task.deleted = true
                }
                return task;
            })
    }
}