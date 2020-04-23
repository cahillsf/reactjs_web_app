import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Article1 from './article1';
import Article2 from './article2';
import Article3 from './article3';
import Home from './home.js'
import BlogPage from './blogpage.js';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

class Page extends React.Component{
    /*constructor(props){
        super(props);
    }*/

    render(){
        return(
            <Router>
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/article1" exact component={Article1}/>
                    <Route path="/article2" exact component={Article2}/>
                    <Route path="/article3" exact component={Article3}/>
                    <Route path="/blogpage" exact component={BlogPage}/>
                </Switch>
            </Router>
        )
    }
}
// ========================================

ReactDOM.render(
    <Page />,
    document.getElementById('root')
);