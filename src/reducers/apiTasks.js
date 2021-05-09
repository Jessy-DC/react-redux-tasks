import { GET_TASKS_SUCCESS, GET_TASKS_ERROR, GET_TASKS_START } from "../actions/apiTasks";


function getInitialState(){
    return {
        tasks: [],
        isFetching : false,
        error : false,
        errorMessage: null,
        returnMessage:null,
    }
}

function apiTasks(state, action){
    if (!state) {
        state = getInitialState();
    }
    switch (action.type) {

         case GET_TASKS_START:
             return {
                 ...state,
                 isFetching: true,
                 error : false,
                 errorMessage: null
             }
         case GET_TASKS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                error : false,
                errorMessage: null,
                returnMessage:action.payload.message,
                tasks : action.payload.tasks
            }
         case GET_TASKS_ERROR:
            return {
                ...state,
                isFetching: false,
                error : true,
                errorMessage: action.payload.message
            }

         default:
                 return state
     }
    
 }
 
 export default apiTasks;