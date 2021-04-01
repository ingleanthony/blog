import React from 'react';
import './home.css';
import Card from '../components/Card';
import robot from '../images/robot.jpg';

export default function Home() {
    return (
        <div className="card-container">
            <Card title='Ethics of Artificial Intelligence' src={robot}/>
            <Card />
            <Card />
        </div>
    )
}
