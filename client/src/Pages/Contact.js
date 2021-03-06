// vim: syntax=JSX
import React from 'react';
import Email from '../images/email.png';
import GitHub from '../images/github.png';
import Linkedin from '../images/linkedin.png';
import Twitter from '../images/twitter.png';



const Contact = () => {
    return(
        <div className="contact-page">

        <h1>Let's talk</h1>
        <div className="contact-content">
        
        <form name="contact" method="POST">
        <div className="boxes">
            <input type="hidden" name="form-name" value="contact" />
            <input type="name" name="name" id="exampleName" placeholder="Name" />
            <input type="email" name="email" id="exampleEmail" placeholder="Email" />
            <textarea type="message" name="message" id="message" placeholder="Message" />
            <button type="submit">Submit</button>
        </div>
        </form>

        <div className="social-media">

        <a href="https://www.linkedin.com/in/katy-hollobaugh/" className="sm-icon left linkedin hvr-grow" target="_blank" rel="noopener noreferrer"><img src={Linkedin} alt="linkedin icon"/></a>
        <a href="https://twitter.com/KatyHollobaugh" className="sm-icon right twitter hvr-grow" target="_blank" rel="noopener noreferrer"><img src={Twitter} alt="twitter icon"/></a>
        <a href="https://github.com/KHollobaugh" className="sm-icon left github hvr-grow" target="_blank" rel="noopener noreferrer"><img src={GitHub} alt="github icon"/></a>
        <a href="mailto:khollobaugh@gmail.com" className="sm-icon right email hvr-grow" target="_blank" rel="noopener noreferrer"><img src={Email} alt="email icon"/></a>

        </div>
        </div>

        </div>
    )
}


export default Contact;