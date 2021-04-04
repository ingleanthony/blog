import React from 'react';
import '../css/home.css';
import Card from '../components/Card';
import robot from '../images/robot.jpg';
import infographic from '../images/ai-infographic.jpg';
import digits from '../images/digits.png';

export default function Home() {
    return (
        <div className="card-container">
            <Card title='Ethics of Artificial Intelligence' src={robot} to='/post'/>
            <Card title='Artificial Intelligence Infographic' src={infographic} to='/infographic'/>
            <Card title='AI Demo!' src={digits} to='/demo'/>
        </div>
    )
}
