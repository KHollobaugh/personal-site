import React from 'react';
import ProfilePic from '../images/profile-pic.jpg';
import GraphQL from '../images/GraphQL.png';
import JavaScript from '../images/JavaScript.png';
import Less from '../images/Less.png';
import Reactjs from '../images/React2.png';
import Redux from '../images/Redux.png';
import SQL from '../images/SQL.png';

const Home = () => {
    return(
        <div className="home-page">

        <h1>Hi, I'm Katy.</h1>
        <img src={ProfilePic} alt='profile'/>
        <div className="desktop-view">
          <p>
        I'm a full-stack JavaScript developer with experience in state management systems like Redux and GraphQL, testing with Jest, and working with relational databases.<br/>

        After graduating university, I attended a start-up hackathon and became interested in pursuing tech. This led me to Lambda School, where I completed the Web Development curriculum and went on to work in a full-time role managing Teaching Assistants, while continuing side projects of my own.<br/>

        I love working closely with my team on a daily basis, and this role has helped me cultivated strong communication and leadership skills.
        </p>  
        </div>
        
        <div className="mobile-view">
            <h3>I'm a Full-stack JavaScript Developer</h3>
            <p>
        I like to build meaningful projects that help people,
        and learn new technologies.
            </p>  
        </div>
        
        <div className="tech-icons">
        <div className="line-one">
        <img src={Reactjs} alt="React.js" className="icon react"/>
        <img src={GraphQL} alt="GraphQL" className="icon graphql"/>
        <img src={Redux} alt="Redux" className="icon redux"/>
        </div>
        <div className="line-two">
        <img src={Less} alt="Less compiler" className="icon less"/>
        <img src={SQL} alt="SQL database" className="icon sql"/>
        <img src={JavaScript} alt="JavaScript" className="icon js"/>
        </div>
        </div>

        
        </div>
    )
}


export default Home;