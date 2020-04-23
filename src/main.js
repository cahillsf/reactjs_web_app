import React from 'react';
import './index.css';
import logo2 from './nyc-opendata1.png';
import deblasio from './deBlasio.jpg';
import duchovny from './duchovny.jpeg';
import { Link } from 'react-router-dom';


const Main = () => {
    return(
        <div id="inner_container">
            <div id="article1_title">
                <Link to='/article1'><h4><strong>NYC Open Data - Examining Daily Tasks Park Cleaning Records</strong></h4></Link>
                <p>March 10, 2020</p>
            </div>
            <div id="article1_sum">
                <p>
                In Jupyter notebooks, I used pandas to import, clean and manipulate the data, and matplotlib to visualize it.  The article explains my insight gained.
                </p>
            </div>
            <div id="article1_photo">
                <img src={logo2} alt="graph" id="graph"/>
            </div>
            <div id="article2_title">
                <Link to='/article2'><h4>A Shifting Landscape: Power Politics in the NYC Restaurant Industry</h4></Link>
                <p>April 22, 2015</p>
            </div>
            <div id="article2_sum">
                <p>This article explores the impact of the Earned Sick Time act in NYC.  Very dated, wrote this almost five years ago...</p>
            </div>
            <div id="article2_photo">
                <img src={deblasio} alt="bill deblasion" id="deblasio"/>
            </div>
            <div id="article3_title">
                <Link to='/article3'><h4>Duchovny Drops a Doozy: A Gem of a Music Album</h4></Link>
                <p>May 12, 2015</p>
            </div>
            <div id="article3_sum">
                <p>Also a very dated article I wrote.  A bit of a dive into the world of music review...</p>
            </div>
            <div id="article3_photo">
                <img src={duchovny} alt="david duchovny" id="duchovny"/>
            </div>
        </div>
    )
}

export default Main;