import React from 'react';
import NavGroup from '../NavGroup/NavGroup';
import './NavBar.css';
import NavLink from '../NavLink/NavLink';

const navBar = (props) => {
    
    return (
        
        <ul className="NavBar">
            <NavGroup text="Pages"/>
            <NavLink link="/" text="Page 1" active/>
            <NavLink link="/" text="Page 2"/>
            <NavLink link="/" text="Page 3"/>
            <NavLink link="/" text="Page 4"/>
        
            
        </ul>
    );
}

export default navBar;