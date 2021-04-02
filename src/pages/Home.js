import React from 'react';
import './home.css';
import Card from '../components/Card';
import robot from '../images/robot.jpg';
import infographic from '../images/ai-infographic.jpg';
import construction from '../images/const.png';

export default function Home() {
    return (
        <div className="card-container">
            <Card title='Ethics of Artificial Intelligence' src={robot} to='/post'/>
            <Card title='Artificial Intelligence Infographic' src={infographic} to='/infographic'/>
            <Card title='AI Demo!' src={construction} to='/demo'/>
        </div>
    )
}
