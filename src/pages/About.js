import React from 'react';
import '../css/about.css';
import aboutPic from '../images/about.jpg';

export default function About() {
    return (
        <div className='about'>
            <img className='about-pic' src={aboutPic} alt='me'/>
            <h1>Hi my name is Anthony.</h1>
            <p className='post-body'>
                I am a student at Florida State University studying Computer Science. I am also working to be a full-stack web developer and create websites that impact people in a positive way. I am writing this blog in order for people to have a better and brighter understanding of artificial intelligence.
            </p>
        </div>
    )
}
