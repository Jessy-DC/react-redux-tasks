

export const GET_TASKS_START = 'GET_TASKS_START';
export const GET_TASKS_SUCCESS = 'GET_TASKS_SUCCESS';
export const GET_TASKS_ERROR = 'GET_TASKS_ERROR';

export const ADD_TASKS_START = 'ADD_TASKS_START';
export const ADD_TASKS_SUCCESS = 'ADD_TASKS_SUCCESS';
export const ADD_TASKS_ERROR = 'ADD_TASKS_ERROR';


export function addTasksAPI() {

}

export function getAllTasksAPI() {
 
    return async dispatch => {
        dispatch({
            type :GET_TASKS_START,
            payload: {}
        })

        try {
            const url = `http://localhost:3000/api/v1/tasks`
            const reponse = await fetch(url, {
                method : 'GET',
            })
            const data = await reponse.json();
            if (!reponse.ok) {
                dispatch({
                    type :GET_TASKS_ERROR,
                    payload: data
                })
            } else {
                dispatch({
                    type :GET_TASKS_SUCCESS,
                    payload: data
                })
            }
        } catch (err) {
            dispatch({
                type :GET_TASKS_ERROR,
                payload: {}
            })
        }
        
       
       // 
    }
    //GET_TASKS_START
    //APPEL FETCH API (ASYNC)
    //TRAITEMENT CODE RETOUR
    //SI OK CODE 200 API 
    // GET_TASKS_SUCCESS
    // ELSE GET_TASKS_ERROR

}