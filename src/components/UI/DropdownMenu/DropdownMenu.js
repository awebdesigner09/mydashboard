import React from 'react';
import './DropdownMenu.css';

const dropdownMenu = (props) => {
    return (
        <div className="Dropdown FloatRight">
            <div>...</div>
            <div className="DropdownMenu show">
                <a className="DropdownItem" href="/">Action</a>
                <a className="DropdownItem" href="/">Another action</a>
            </div>
        </div>
        
    );
}

export default dropdownMenu;