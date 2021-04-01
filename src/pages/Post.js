import React from 'react';
import './post.css';
import robot from '../images/robot.jpg';

export default function Post( {src} ) {
    return (
        <div className='container'>
            <img className='post-image' src={robot} alt='human and robot fist bump'/>
            <h1 className='post-title'>Ethics of Artificial Intelligence</h1>
            <p className='post-body'>
                We've all heard of the myths about how robots will one day take over the world, or how artificially intelligent machines will turn evil and turn against us. As thrilling as this may sound in theory, it most likely will never happen. Machines are created by humans, which means they can only be as smart as a human can be. Even though computers can become really fast and consistent at certain processes, they do not have the ability to think on their own as humans can, since they are built using logical commands.
            </p>
            <p className='post-body'>
                So then what is artificial intelligence? Artificial Intelligence, or AI is defined as <a target='_blank' href='https://www.britannica.com/technology/artificial-intelligence' rel="noreferrer"><q>the ability of a digital computer or computer-controlled robot to perform tasks commonly associated with intelligent beings.</q></a>
                And that's really it: a computer that performs intelligent tasks.
            </p>
        </div>
    )
}
