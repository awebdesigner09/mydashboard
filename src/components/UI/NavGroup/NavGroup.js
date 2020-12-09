import React from 'react';
import './NavGroup.css';

const navGroup = (props) => {
    
    return (
        <li className="NavGroup">
            {props.text}
        </li>
    );
}

export default navGroup;