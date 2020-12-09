import React from 'react';
import './Sidedrawer.css';
import Logo from '../Logo/Logo';
import Navbar from '../NavBar/NavBar';


const sideDrawer = (props) => {
    let attachedClasses = ['Sidedrawer'];
    if(!props.open)
        attachedClasses = ['Sidedrawer', 'Close'];
    return (
        <div className={attachedClasses.join(' ')}>
            <Logo />
            <Navbar />
        </div>
       
    );
};

export default sideDrawer;