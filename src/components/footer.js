import React from 'react'
import PropTypes from 'prop-types'
import FilterLink from '../containers/FilterLink'
import {VisibilityFilters} from '../actions/tasks'

const Footer = () => (
   <div>
       <span>Voir : </span>

       <FilterLink filter={VisibilityFilters.SHOW_ALL}>All</FilterLink>
       <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>ACTIVE</FilterLink>
       <FilterLink filter={VisibilityFilters.SHOW_DELETED}>DELETED</FilterLink>
       <FilterLink filter={VisibilityFilters.SHOW_API}>API</FilterLink>
   </div>
)

export default Footer