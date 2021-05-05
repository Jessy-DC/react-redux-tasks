import React from 'react'

const Task = ({onClick, deleted, text}) => (
    <li onClick={onClick}
        style = {{
            textDecoration : deleted ? 'line-through' : 'none'
        }}
    >
        {text}
    </li>
)


export default Task;