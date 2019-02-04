import React from 'react';
import { NavLink } from 'react-router-dom';




const Menu = () => {


    return(
        <div className="menu">

        <ul>
            <li>
                <NavLink className="link" exact to={`/`}
                  activeStyle={{
                    fontWeight: "bold",
                    borderBottom: "1px solid lightgrey"
                  }}>Home</NavLink>
            </li>
            <li>
                <NavLink className="link" to={`/contact`}
                activeStyle={{
                    fontWeight: "bold",
                    borderBottom: "1px solid lightgrey"
                  }}>Contact</NavLink>
            </li>
            <li>
                <NavLink className="link" to={`/portfolio`}
                activeStyle={{
                    fontWeight: "bold",
                    borderBottom: "1px solid lightgrey"
                  }}>Portfolio</NavLink>
            </li>
            <li>
                <NavLink className="link" to={`/blog`}
                activeStyle={{
                    fontWeight: "bold",
                    borderBottom: "1px solid lightgrey"
                  }}>Blog</NavLink>
            </li>
        </ul>
        
        </div>
    )
}

export default Menu;