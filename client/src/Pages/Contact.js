import React from 'react';
import Phone from '../images/phone.png';
import Email from '../images/email.png';
import GitHub from '../images/github.png';
import Linkedin from '../images/linkedin.png';
import Twitter from '../images/twitter.png';

const Contact = () => {
    return(
        <div className="contact-page">

        <h1>Let's talk</h1>
        <div className="contact-content">
        
        <form>
        <div class="boxes">
            <input type="name" name="name" id="exampleName" placeholder="Name" />

            <input type="email" name="email" id="exampleEmail" placeholder="Email" />

            <textarea type="message" name="message" id="message" placeholder="Message" />
            <button>Submit</button>
        </div>
        </form>

        <div className="social-media">

        <a href="https://www.linkedin.com/in/katy-hollobaugh/" className="sm-icon left linkedin"><img src={Linkedin} alt="linkedin icon"/></a>
        <a href="https://twitter.com/KatyHollobaugh" className="sm-icon right twitter"><img src={Twitter} alt="twitter icon"/></a>
        <a href="https://github.com/KHollobaugh" className="sm-icon left github"><img src={GitHub} alt="github icon"/></a>
        <a href="mailto:khollobaugh@gmail.com" className="sm-icon right email"><img src={Email} alt="email icon"/></a>
        <a href="tel:1-734-272-8234" className="sm-icon left phone"><img src={Phone} alt="phone icon"/></a>

        </div>
        </div>

        </div>
    )
}


export default Contact;