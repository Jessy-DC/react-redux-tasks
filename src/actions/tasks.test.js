import * as actions from "./tasks";

describe('actions', () => {
    it('should create task', () => {
        const text = 'Unit test add tasks'
        const expectedActions = {
            type: actions.ADD_TASK,
            text
        }
        expect(actions.addTask(text)).toEqual(expectedActions);
    })
    it('should delete task', () => {
        const index = 1;
        const expectedActions = {
            type: actions.DEL_TASK,
            index
        }
        expect(actions.delTask(index)).toEqual(expectedActions);
    })
})