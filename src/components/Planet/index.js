import React from 'react';
import "./planet.css";


const Planet = props => (

    <div className="planet" onClick={() => props.counter(props.id)}>
        <div className="image-container">
            <img alt={props.name} src={props.image}  />
        </div>
    </div>
);

export default Planet;