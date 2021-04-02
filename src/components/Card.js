import React from 'react';
import { Link } from 'react-router-dom';
import './card.css';

export default function Card(props) {
    return (
        <Link to={props.to}>
            <div className='card'>
                <img className='card-image' src={props.src} alt='card'/>
                <h2 className='card-title'>{props.title}</h2>
                <p className='card-caption'>Click to read more</p>
            </div>
        </Link>
    )
}
