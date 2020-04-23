import React from 'react';
import './index.css';
import Header from './header.js';
import Footer from './footer.js';
import deblasio from './deBlasio.jpg';
import Nav from './nav.js'


const Article = () => {
    return(
        <div className="articleDiv">
            <h1>A Shifting Landscape: Power Politics in the NYC Restaurant Industry</h1>
            <h3>De Blasio's movement toward protecting the health of workers throughout the city is compelling the restaurant industry to exhume some more skeletons in its closet. As an industry that has long relied on under-the-table payouts, cheap labor, uncomfortable working conditions and long hours, the restaurants in New York City have been cleaning up their act. (April 22, 2015)</h3>
            <div className="imgdiv2">
                <img src={deblasio}  alt="line for shake shack" id="shake"/>
            </div>
            <p> De Blasio's movement toward protecting the health of workers throughout the city is compelling the restaurant industry to exhume some more skeletons in its closet. As an industry that has long relied on under-the-table payouts, cheap labor, uncomfortable working conditions and long hours, the restaurants in New York City have been cleaning up their act.  Increased competition, tighter scrutiny, and new labor laws have all contributed to this movement.  When De Blasio signed into law the expansion of the Earned Sick Time Act in 2014, he extended a new right to an estimated 1.2 million workers in the city, namely: paid sick leave.</p>
            <p>
            Looking at this law in a broader context of the reign of capital over labor, this expansion lands itself squarely in the "Win" column of labor's scoreboard.  Once an employee has accrued his sick hours he can utilize the pay to look after the health needs of himself and his family without worrying about the income sacrificed in favor of these needs.  Much of an employer's power stems from its retention over the employee's means of survival.  As the authority cutting paychecks, the balance of power is shifted inherently towards the employer.  By encroaching on this power, even for 1 hour of leave for every 30 hours worked, the government has taken a crucial step towards empowering employees.  If there's anything needed for a predominantly unorganized hourly wage labor pool, it is more support for the rights of workers in the face of employers whose structural mandate is to cut costs and bolster the bottom line.</p>
            <p>
            However, from the standpoint of restaurant management, this introduces a problematic aspect to daily operations.  Real estate in the city is astronomically expensive, leaving many restaurants to rely on producing as much revenue as possible with as little space possible.  For anyone who's frequented any of the vast array of restaurants speckling the city, it quickly becomes clear that corridor kitchens and supremely tight seating spaces abound.  Appropriately staffing means balancing hands on deck with the flow of business and available space.  For many restaurants, overstaffing by one employee for every shift impinges on physical space and profit, while understaffing by one employee means a stressful shift and missing out on potential earnings.  This is where the sick pay law begins to take its toll on restaurant owners and managers throughout the city.  As any good labor protection law, it contains anti-retaliation policies, which limit an employer's ability to take action against the employee for exercising his guaranteed rights.  The anti-retaliation policies in this case are quite far-reaching:
            </p>
            <p>
            "If the need is foreseeable, your employer can require up to seven days advance notice of your intention to use sick leave. If the need is unforeseeable, your employer may require you to give notice as soon as practicable (reasonable). Your employer may require you to provide written verification that you used sick leave for sick leave purposes.  Your employer can require documentation from a licensed health care provider if you use more than three consecutive workdays as sick leave."
            </p>

            <p>
            If you're thinking that the language in this section is vague, you are correct.  Certainly there are unforeseeable health needs that arise in life.  I, for one, have been seized by that elusive stomach virus that pounces upon you in the midst of the best REM cycle you've had in months, propelling you towards the toilet and shackling you to it for the next ten hours as you inexplicably purge your body of any ounce of food or fluid that you've consumed over the past 48 hours and leaves you wrecked and sore clutching feebly to that bottle of Gatorade which now means more to you than the mother who birthed you and clothed you and fed you from birth.  Sure, we've all been there, and there is absolutely a need for a clause that anticipates these situations.  
            </p>
            <p>
            However, the problem lies in the gray area of accountability that this clause opens up.  The time frame for advance notice of sick pay use slides from seven days to  "as soon as practicable (reasonable)" if the need qualifies as "unforeseeable."  A transition has been made from a concrete, measurable unit to a toss-up between two open-ended words.  One of these words lies in parentheses to further obscure the time frame.  What is the difference between practicable and reasonable? Does the time frame have to be both practicable and reasonable, or will just one suffice?  On a day-to-day basis, according to this clause, who has the authority to decide upon this time frame?
            </p>
            <p>
            And the answer is: the employee.  An hour before the shift begins, an hour into the shift, right before the restaurant opens, all of these time frames become practicable for the employee.  Unable to retaliate or even require definitive proof of illness for up to three days of absence, the employer is left with his hands tied.  The point of this article is not to bemoan the loss of capital's power over labor but to explore the problems that occur in the face of a loss of accountability.  Let us also keep in mind that during a short-staffed shift it is not only the business that feel the effects, but the employees who arrive on time and ready to work who are left to pick up the slack.  Oftentimes these employees have also accrued sick hours, but choose to deploy them in a responsible and effective manner.  

            There is no easy answer and solutions may come from many different angles.  How can the restaurant industry improve its treatment of employees to instill a sense of loyalty and responsibility?  How can lawmakers strike an appropriate balance between understanding the various health needs of employees while keeping in mind the extremely competitive, fickle, and essential nature of restaurants in NYC?  What can employees do, either collectively or individually, to effectively make know their needs and grievances to prevent the underlying discontent that inspires irresponsible utilization of sick pay?
            </p>

    </div>
    );
}

const Article2 = () => {
    return(
        <div className="container">
            <Header/>
            <Article/>
            <Nav />
            <Footer/>
        </div>
    )
}

export default Article2;