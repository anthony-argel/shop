import {NavLink} from "react-router-dom";
import React from "react";

const NavBar = (props) => {
    return (
        <nav>
            <h1><NavLink to='/'>Knight-SM</NavLink></h1>
            <ul>
                <li><NavLink to='/games'>Games</NavLink></li>
                <li><NavLink to='/cart'>Cart ({props.currentCart.length})</NavLink></li>
                <li></li>
                <li></li>
            </ul>
        </nav>
    )
}

export default NavBar;