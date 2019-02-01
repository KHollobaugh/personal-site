import React from 'react';
import { Link } from 'react-router-dom';
import Home from '../Pages/Home';
import Portfolio from '../Pages/Portfolio';
import Blog from '../Pages/Blog';
import Contact from '../Pages/Contact';



const Menu = () => {

    const url = 'http://localhost:3000/';

    return(
        <div className="menu">

        <ul>
            <li>
                <Link to={`/`}>Home</Link>
            </li>
            <li>
                <Link to={`/contact`}>Contact</Link>
            </li>
            <li>
                <Link to={`/portfolio`}>Portfolio</Link>
            </li>
            <li>
                <Link to={`/blog`}>Blog</Link>
            </li>
        </ul>
        
        </div>
    )
}

export default Menu;