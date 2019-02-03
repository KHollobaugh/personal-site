import React from 'react';
import ProfilePic from '../images/profile-pic.jpg';

const Home = () => {
    return(
        <div className="home-page">

        <h1>Hi, I'm Katy.</h1>
        <img src={ProfilePic} alt='profile'/>
        <p>
        That's what painting is all about. It should make you feel good when you paint. Learn when to stop. We have a fantastic little sky! We're trying to teach you a technique here and how to use it. There's nothing wrong with having a tree as a friend. See there, told you that would be easy.
        </p>

        
        </div>
    )
}


export default Home;