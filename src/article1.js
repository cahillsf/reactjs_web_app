import React from 'react';
import './index.css';
import Header from './header.js';
import Footer from './footer.js';
import graph from './graphic.png';
import logo2 from './nyc-opendata1.png';
import Nav from './nav.js'

const Article = () => {
    return(
        <div>
            <h1>NYC Open Data Challenge</h1>
                <p>
                    In the process of applying for jobs and internships I've come across some interesting questions and challenges.  This challenge was presented to me by the <a href="https://dataclinic.twosigma.com/">Data Clinic</a> an arm of Two Sigma, an investment manager, that primarily works with non-profits.
                </p>
                <p>
                    By its description, the task was simple, look at <a href="https://data.cityofnewyork.us/City-Government/Daily-Tasks-Park-Cleaning-Records/kwte-dppd"><span>this data set</span></a> and write an article about it.  But given the vast amount of information, the description belied the complexity of the task.  After several hours of investigating, reading and researching the origins of the data set, the meaning behind the columns, and narrowing down my focus I was able to hone in on a very revealing data point: hours of cleaning per acre of city property.  This article just scratches the surface of the insights to be gained in analyzing NYC's data sets and I had a lot of fun with this challenge. (March 10, 2020)
                </p>
                <p>
                    In Jupyter notebooks, I used pandas to import, clean and manipulate the data, and matplotlib to visualize it.  Take a look at <a href="dataclinic_final.html"><span>the code</span></a> and read the article below:
                </p>
                <br/>
                
                <div className="article">
                    <h3>Overlooked Assets: NYC's Public Parks</h3>
                    <div className="imgdiv2">
                        <img src={logo2} id="nycdata2" alt="graph data"/>
                    </div>
                    <p>A stroll through Prospect Park on a beautiful summer day can reveal all of the beauty New York City has to offer.  Sunshine, trees, people chatting and milling about.  A brief reprieve from the loud noises, crowded subway platforms and littered sidewalks.  But take a seat on a plot of grass and you might just find a discarded cigarette butt stuck to the palm of your hand.  Take a walk through Union Square and it would be difficult not to step in something sticky or get a nose full of something unquestionably unpleasant.  The parks of New York City provide an invaluable resource to us as residents.  Given their variety, expanse, and heavy use, keeping these properties well-maintained and clean is no simple feat.  NYC Open Data gives us a full view of the inner workings of this expenditure in the Daily Tasks Park Cleaning Records.</p>
                    <p>In order to gain some insight, I determined from the data set how many labor hours are spent cleaning City property under the jurisdiction of or maintained by NYC parks.  Given that NYC parks encompass roughly 30,000 acres of land, it then becomes possible to determine (on average) how many hours of cleaning each acre is receiving.  To give a bit of context for those, including myself, who need a bit of help when it comes to visualizing an acre, an acre is roughly 90% of the size of an American football field.  After calculating the average time spent cleaning each acre of parks property from 2017 to 2019 the story of this data set revealed itself to me:  New York City Parks are suffering from a severe lack of investment.  In the fiscal year of 2017, the first full year of data available in the Daily Tasks Park Cleaning Records, each acre of parks property received an average of fifteen minutes of cleaning per day.  Here is a chart of the average daily minutes spent cleaning each acre broken down by fiscal quarter for years 2017-2019:</p>
                    <div className="imgdiv2">
                        <img src={graph} id="graph_img" alt="Park data from nyc"/>
                    </div>
                    <p> As a relatively tidy New Yorker in his late twenties, my bedroom is a very small percentage of an acre (0.21 % to be exact).   It takes me about fifteen minutes worth of daily cleaning to keep my living space livable.  Especially considering the use of these spaces, fifteen minutes will certainly not suffice to keep an acre of public space clean and usable.  </p>
                <p>This comparison also highlights how small my space is, despite quite high housing costs.  I am not alone in this situation, many residents of this city find themselves in a very similar situation, we pay a lot to live in relatively small spaces.  The public parks provide a fantastic outlet for NYC residents to enjoy the outdoors, escape their apartments, go for a run, swim in the ocean and countless other activities.  They are the backyards we don't have.  Considering their importance to the population, their intrinsic value as protected natural areas in our densely populated concrete environment, and their extrinsic value as cherished property under the jurisdiction of our local government, these properties need more time and attention devoted toward their cleanliness.  The good news is, we do seem to be heading in the right direction as the city's park budget has grown from $398 million in fiscal year 2015 to $468 million in fiscal year 2019 (Cohen).  However, considering the chart tops out at 18.6 minutes of daily cleaning per acre, it is clear we still have a great deal of room for improvement when it comes to providing funding to properly clean our NYC Parks.</p>

            </div>
        </div>
    );
}

function Article1(){
    return(
        
        <div className="container">
            <Header/>
            <Article/>
            <Nav />
            <Footer/>
        </div>
    );
}

export default Article1;