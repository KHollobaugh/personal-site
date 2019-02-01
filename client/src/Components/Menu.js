import React from 'react';
import { Link } from 'react-router-dom';




const Menu = () => {


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