import React from "react";
import PropTypes from 'prop-types';

export const Task = ({onClick, deleted, text}) => (
    <li
        onClick={onClick}
        style={{
            textDecoration : deleted ? 'line-through' : 'none'
        }}
    >
        {text}
    </li>
)

Task.propTypes = {
    onClick : PropTypes.func.isRequired,
    deleted : PropTypes.bool.isRequired,
    text : PropTypes.string.isRequired
}