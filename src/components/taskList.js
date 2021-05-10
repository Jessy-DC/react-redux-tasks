import React from 'react'
import PropTypes from 'prop-types'
import Task from './task'

const TaskList = ({tasks, onTaskclick}) => (
    <ul>
       {tasks.map((task, index) => (
            <Task key={index} {...task} onClick={()=>onTaskclick(index)} />
       ))
       }
    </ul>
)
/*
TaskList.PropTypes = {
    tasks : PropTypes.array.isRequired,    
    onTaskclick : PropTypes.func.isRequired,
}
*/
export default TaskList;