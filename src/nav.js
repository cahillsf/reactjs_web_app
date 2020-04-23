import React from 'react';
import './index.css';
import { Link } from 'react-router-dom';
import MyService from './data_service.js'

const Nav = () => {
    return(
        <div className="nav">
            <ul>
                <li><Link to=".">Home Page</Link></li>
                <li><Link to="Article1">NYC Data</Link></li>
                <li><Link to="Article2">A Shifting Landscape</Link></li>
                <li><Link to="Article3">Duchovny Drops a Doozy</Link></li>
            </ul>
            <h5>Also, here's a brief description of a random marijuana strain:</h5>
            <MyService/>
        </div>

    )
}

export default Nav;