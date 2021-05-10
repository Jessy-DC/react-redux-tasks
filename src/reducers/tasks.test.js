import reducer from './tasks'
import {ADD_TASK} from "../actions/tasks";

describe('actions', () => {
    it('should return initial state', () => {
        expect(reducer(undefined, {})).toEqual([])
    })

    it('should add task', () => {
        expect(reducer([],
            {
                type: ADD_TASK,
                text: 'Test task'
            }
        )[0]).toEqual({
            id : 0,
            text: 'Test task',
            deleted: false
        })
    })
})