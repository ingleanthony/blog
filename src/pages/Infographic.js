import React from 'react';
import infographic from '../images/ai-infographic.jpg';
import './info.css';

export default function Infographic() {
    return (
        <div className='infodiv'>
            <img className='info' src={infographic} alt='AI statistics'/>
        </div>
    )
}
