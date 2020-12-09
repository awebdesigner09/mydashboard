import React from 'react';
import './Card.css';
import Badge from '../Badge/Badge';
import Icon from '../Icon/Icon';
const card = (props) => {
    let cardStyles=["Card"];
    if(props.BlueCard){
        cardStyles=["Card", "BlueCard"];
    }

    return(
    <div className={cardStyles.join(' ')}>
        <div className="CardContent">
            <div className="CardBody">
                <h3>{props.text}</h3>
                <p>{props.subtext}</p>
                <div className="mb-0">
                    <Badge badgetype={props.badgetype} badgetext={props.badgetext}  />
                    <span>{props.subtext2}</span>
                </div>
            </div>
            
            <div className="Stat">
                <Icon icon={props.icon} />
            </div>
        
        </div>
    </div>
    );

}

export default card;