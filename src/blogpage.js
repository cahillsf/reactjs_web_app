import React from 'react';
import './index.css';
import Header from './header.js';
import Footer from './footer.js';
import Main from './main.js';

const Blog = () => {
    return(
        <div className="articleContainer">
            <Main/>
        </div>
    )
}

const BlogPage = () => {
    return(
        <div className="container">
            <Header/>
            <Blog/>
            <Footer/>
        </div>
    )
}

export default BlogPage;