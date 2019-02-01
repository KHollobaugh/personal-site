import React from 'react';
import { Link } from 'react-router-dom';




const Menu = () => {


    return(
        <div className="menu">

        <ul>
            <li>
                <Link className="link" to={`/`}>Home</Link>
            </li>
            <li>
                <Link className="link" to={`/contact`}>Contact</Link>
            </li>
            <li>
                <Link className="link" to={`/portfolio`}>Portfolio</Link>
            </li>
            <li>
                <Link className="link" to={`/blog`}>Blog</Link>
            </li>
        </ul>
        
        </div>
    )
}

export default Menu;