import React from "react";
import PropTypes from 'prop-types';
import {Link} from "./link";

const Footer = () => (
    <div>
        <span>See : </span>
        <Link>ALL</Link>
        <Link>ACTIVE</Link>
        <Link>DELETED</Link>
    </div>
)