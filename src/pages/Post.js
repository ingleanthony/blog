import React from 'react';
import '../css/post.css';
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
                So then what is artificial intelligence? Artificial Intelligence, or AI is defined as <a target='_blank' href='https://www.britannica.com/technology/artificial-intelligence' rel="noreferrer"><q>the ability of a digital computer or computer-controlled robot to perform tasks commonly associated with intelligent beings.</q> </a> 
                And that's really it: a computer that performs intelligent tasks. And although you may associate artifical intelligence with robots that look like humans, the common use of it is not in a physical form. Artificial intelligence is most commonly found right in your pocket: your phone! Voice assistants like Siri, Alexa, Google are just one of the many examples of how artifical intelligence can improve your life. You may not even be aware of the services you use on the daily, such as Google or YouTube that use artificially intelligent algorithms that help bring you relevant search results or recommended videos through some information collected from you. And that is where our first topic of ethics arises... is it moral for these companies to be collecting information about you without your awareness?
            </p>
            <p className='post-body'>
                Well, it's partly true. You know how you always click "Agree to Terms and Conditions" even though you never read them? Well, the how, why and what of your information is all in there. If it wasn't these companies would all be in jail. But what normal person has the time to read through those? I'm with you on that one.
            </p>
        </div>
    )
}
