import React from 'react';
import './NavLink.css';

const NavLink = (props) => {
    
    return (
        <li className="NavLink">
            <a href={props.link} className={props.active? "active": null}>{props.text}</a>
        </li>
    );
}

export default NavLink;