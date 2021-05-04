import React from "react";
import {connect} from "react-redux";
import {addTask} from "../actions/tasks";

export let AddTask = ({dispatch}) => {
    let input;
    return (
        <div>
            <form
                onSubmit={e => {
                    e.preventDefault()
                    if (!input.value.trim()) {
                        return;
                    }
                    dispatch(addTask(input.value))
                    input.value = '';
                    //DISPATCH ADDTASKS
                }}
            >
                <input
                    ref={node => {
                        input = node
                    }}
                />
                <button>Add Tasks</button>
            </form>
        </div>
    )
}

AddTask = connect()(AddTask)