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
        <div className="description">
            <h3>I'm a Full-stack JavaScript Developer.</h3>
            <p>
        I like meaningful projects that help people. I enjoy working with a team, learning new things, and reading lots of books.
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