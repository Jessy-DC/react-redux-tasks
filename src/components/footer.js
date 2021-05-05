import React from "react";
import PropTypes from 'prop-types';
import FilterLink from "../containers/FilterLink";
import {VisibilityFilters} from "../actions/tasks";

const Footer = () => (
    <div>
        <span>See : </span>


        <FilterLink filter={VisibilityFilters.SHOW_ALL}>ALL</FilterLink>
        <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>ACTIVE</FilterLink>
        <FilterLink filter={VisibilityFilters.SHOW_DELETED}>DELETED</FilterLink>
    </div>
)

export default Footer;