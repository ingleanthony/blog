import React from 'react';
import { Link } from 'react-router-dom';
import '../css/post.css';
import robot from '../images/robot.jpg';

export default function Post( {src} ) {
    return (
        <div className='container'>
            <img className='post-image' src={robot} alt='human and robot fist bump'/>
            <h1 className='post-title'>Ethics of Artificial Intelligence</h1>
            <Link className='by-link' to='/about'><p className='by-title'>By: Anthony Ingle</p></Link>
            <p className='post-body'>
                We've all heard of the myths about how robots will one day take over the world, or how artificially intelligent machines will turn evil and turn against us. As thrilling as this may sound in theory, it most likely will never happen. Machines are created by humans, which means they can only be as smart as a human can be. Even though computers can become really fast and consistent at certain processes, they do not have the ability to think on their own as humans can, since they are built using logical commands.
            </p>
            <p className='post-body'>
                So then what is artificial intelligence? Artificial Intelligence, or AI is defined as <a target='_blank' href='https://www.britannica.com/technology/artificial-intelligence' rel="noreferrer"><q>the ability of a digital computer or computer-controlled robot to perform tasks commonly associated with intelligent beings.</q> </a> 
                And that's really it: a computer that performs intelligent tasks. And although you may associate artifical intelligence with robots that look like humans, the common use of it is not in a physical form. Artificial intelligence is most commonly found right in your pocket: your phone! Voice assistants like Siri, Alexa, Google are just one of the many examples of how artifical intelligence can improve your life. You may not even be aware of the services you use on the daily, such as Google or YouTube that use artificially intelligent algorithms that help bring you relevant search results or recommended videos through some information collected from you. And that is where our first topic of ethics arises... is it moral for these companies to be collecting information about you without your awareness?
            </p>
            <h2>Information Collection</h2>
            <p className='post-body'>
                Well, it's only partly true. You know how you always click "Agree to Terms and Conditions" even though you never read them? Well, the how, why and what of your information collection is all in there. If it wasn't, these companies would all be in jail. But what normal person has the time to read through those? I'm with you on that one. The real problem is the fact that they <em>have</em> that information. 
            </p>
            <p className='post-body'>
                Simply owning someone's information is power in and of itself. Maybe today its innocently collected to give you a better experience online, but tomorrow its used against your own privacy. It's only a matter of getting the information in the wrong hands and your better experience online turns into a <a className='post-link' target='_blank' rel="noreferrer" href='https://www.theverge.com/2012/8/6/3224597/mat-honan-hacked-apple-icloud-google-twitter'>compromised life.</a> Now, sorry to seem so negative, but it is important to be aware of what's going on. However, with that being said, generally your information is not used against you. These companies try their best to protect your privacy. In the end, the better experience they are giving you is greater than the risk of allowing them to collect information. To help better understand why it is necessary for this data collection to take place, we first need to take a look into what artificial intelligence enables us to do, as well as how it works. 
            </p>
            <h2>How does AI really do?</h2>
            <p className='post-body'>
                The first thing we should learn about is how AI is <a className='post-link' target='_blank' rel="noreferrer" href='https://insidebigdata.com/2018/10/08/ai-training-work/'>made</a>. In order for a computer to 'learn' to do intelligent tasks, it first needs to be supplied data. The computer is given lots of data in order for it to make something of that data and create a model of predicition for the data. Generally this is thought of as mathematical graphs. If you give a computer a set of data of y's and x', for example that on a graph look like a scatter plot, the computer then creates a line of best fit on that data and creates a mathematical function on top of this. The most basic example of this is <a className='post-link' target='_blank' rel="noreferrer" href='https://towardsdatascience.com/introduction-to-machine-learning-algorithms-linear-regression-14c4e325882a'>linear regression</a>. Where a linear line is fit on a dataset that creates a model based on the mx + b equation.
            </p>
            <p className='post-body'>
                That helps us understand why these companies need to collect our data, but then what? What does AI <em>really</em> do? There are many subcategories of artificial intelligence such as: machine learning, computer vision and more. One of these examples is computer vision, which helps computer 'see' the world around them. I put quotes around 'see' because a computer does not actually see like we do, they just interpret pixels and data that is given to them in forms such as a camera or sensor. This category of machine vision is what is powering the current progress towards self-driving cars, and it is what is powering things such as Autopilot feature in Teslas. However, you may be more familiar with Face ID on your phone or your favorite Snapchat filters on your face. These face tracking and identifying tasks are all a subset of computer vision.
            </p>
            <p className='post-body'>
                There are many examples of artificial intelligence around you everyday, whether you realize it or not. I would also suggest to check out the artificial intelligence demo we have right <Link className='post-link' to='/demo'>here on our website</Link>. In this demo, the computer interprets a digit handwritten by you. Although to us it may seem like <em>duh?</em> that number I wrote is clearly a 3, but to a computer, it is a just a bunch of pixels on screen. This subset of AI, called machine learning, creates a model to predict from a set of data. In this example, the computer has been fed data of handwritten numbers 0-9, and told which ones are which. The computer then interprets the pixels it has been given and can then begin to predict handwritten digits based on the data it has been given. The demo on the website is not perfect, but companies who specialize in subjects like this can get handwriting detection by a computer very accurate.
            </p>
            <h2>What about jobs?</h2>
            <p className='post-body'>
                Many people are worried about how robots will replace their jobs in the future. Although it is true that machines can help automate some tasks better than a human could, the truth is that there are tons of jobs behind creating the machine and maintaining it that will arise. Someone has to design it, program it, test it, fix it, keep it working, manage the whole process, and more. In a <a className='post-link' target='_blank' rel="noreferrer" href='https://www.weforum.org/reports/the-future-of-jobs-report-2018'>jobs report by World Economic Forum</a>, automation will displace 75 million jobs but generate 133 million new ones worldwide by 2022. So yes, jobs will be lost, but don't worry because almost twice as many will be created.
            </p>
            <h2>Ethical Dilemmas</h2>
            <p className='post-body'>
                As artificial intelligence expands, more techonologies are on the rise. One of these is the self-driving car. Tesla is one step closer to this achievement, they have cars on the road with Autopilot, AI enabled software that allows the car to perform every driving function without input from the driver. Although this technology could allow people to drive safer on the road in the future, while it is still being developed, it is not perfect. There have been <a className='post-link' target='_blank' rel="noreferrer" href='https://www.bloomberg.com/news/features/2019-10-09/tesla-s-autopilot-could-save-the-lives-of-millions-but-it-will-kill-some-people-first'>cases</a>  where the Tesla failed to recognize an object in front at high speeds and has killed the driver as a result. Although the driver should be aware and focused on the car's actions at all times according to Tesla, this is an ethical dilemma. Who is truly responsible for the death of the driver? Is it the car? The company? The driver? The people who made the software? Although artificial intelligence is ultimately driving our world to a safer place, situations like these should be mentioned.
            </p>
            <p className='post-body'>
                This topic brings about a lot of debate and controversy. However, what is important to realize is that as our technology expands, incidents like these are part of the progress. That may sound heartless, but one should always be wary of new technology, especially one that puts your life at risk. As self-driving cars begin to progress further, they will become safer and ultimately even safer than a human driver. But since we are still in this transitioning state, please make sure you are fully attentive if you are behind the wheel of self-driving technology.
            </p>
            <h2>Wrap-Up</h2>
            <p className='post-body'>

            </p>
        </div>
    )
}
