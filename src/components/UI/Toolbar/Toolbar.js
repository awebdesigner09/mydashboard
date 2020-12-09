import React from 'react';
import './Toolbar.css';
import DrawerToggle from '../DrawerToggle/DrawerToggle';

const toolbar = (props) => (
    <header className="Toolbar">
        <DrawerToggle clicked={props.sidebarToggle}/>
        
          
    </header>
);

export default toolbar;