import React from 'react';
import './Badge.css';

const badge = (props)=>{
    switch(props.badgetype){
        case 'Success':
            return(
                <span className="Badge Success">{props.badgetext}</span>
            );
        case 'Danger':
            return(
                <span className="Badge Danger">{props.badgetext}</span>
            );
        case 'Red':
            return(
                <span className="ProjectStatus Red">{props.badgetext}</span>
            );
        case 'Green':
            return(
                <span className="ProjectStatus Green">{props.badgetext}</span>
            );
        case 'Yellow':
            return(
                <span className="ProjectStatus Yellow">{props.badgetext}</span>
            );
        default:
            return('');
        
    }
};

export default badge;