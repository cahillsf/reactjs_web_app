import React from 'react';
import './index.css';
import logo from './sv2.png';

const Header = () => {
    return(
        <div id="header">
            <a href="." id="logo_link">
                <img id="logo" src={logo} alt="logosvg" />
            </a>
            <ul id="name">
                <li>Stephen Cahill</li>
                <li>Developer</li>
            </ul>
           
        </div>
    )
}

export default Header;