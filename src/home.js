import React from 'react';
import './index.css';
import Header from './header.js';
import Footer from './footer.js';
import Main from './main.js';
import Nav from './nav.js'


const Home = () => {
    return(
        <div className="container">
            <Header />
            <Main />
            <Nav />
            <Footer />
        </div>

    )
}

export default Home;