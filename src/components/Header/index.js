import React from 'react';
import "./header.css";

const Header = props => (
    
    <div className="header">
        <div className="heading">{props.title}</div>
        <div className="message">{props.message}</div>
        <div className="scores">
            Score: {props.score}<span>|</span> Highscore: {props.highscore}
        </div>
    </div>
);

export default Header;