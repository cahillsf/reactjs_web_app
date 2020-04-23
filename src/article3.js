import React from 'react';
import './index.css';
import Header from './header.js';
import Footer from './footer.js';
import duchovny2 from './duchovny.jpeg';
import Nav from './nav.js'


const Article = () => {
    return(
        <div className="articleDiv">
            <h1>Duchovny Drops a Doozy</h1>
            <h3>Today David Duchovny rocked the music world to its core with his debut album. Yes that's right, that very same Duchovny we know and love as the case-cracking FBI agent Fox Mulder in The X-Files or the flippant deadbeat dad Hank Moody in Californication, has blessed us with a gem of a musical album aptly named Hell or Highwater.(May 12, 2015)</h3>
            <div className="imgdiv2">
                <img src={duchovny2} alt="line for shake shack" id="shake2"/>
            </div>
            <p>Today David Duchovny rocked the music world to its core with his debut album.  Yes that's right, that very same Duchovny we know and love as the case-cracking FBI agent Fox Mulder in The X-Files or the flippant deadbeat dad Hank Moody in Californication, has blessed us with a gem of a musical album aptly named Hell or Highwater.  An album that takes the listener on a magical and emotional journey of ups and downs, highs and lows, much like the course of a lovers' relationship or the ebb and flow of the tides.</p>
            <p>Some of these songs, like "Another Year," taste like a cool glass of lemonade as you sit on the porch of your country home in the midst of a humid summer sunset.  Others, like "Lately It's Always December," go down like that final bitter shot of bourbon after a long day of drinking and heartbreak.  Through authentic guitar riffs and several "ooh-ooh-ooh-ooooh-oooooohs," Duchovny reveals the complex and layered person behind his television characters.</p>
            <p>The lyrics range from desperate to inspiring with no lack of intricacy.  Sometimes excited and sometimes despondent, these songs weave together forming a composite that encompasses nothing less than the human experience.  The opening song on the album, "Let It Rain," explores the effects of time past.  This theme is quite pertinent to the album itself, seeing as Duchovny arrived relatively late in his life to the world of music production.  "You can't hurt the one you've already left behind / Let it rain" rings true like a grandfather's words as he takes his last cancerous breaths upon his deathbed.  There are things out of our control.  As much as we like to control and micromanage our day-to-day lives with calendars and Palm Pilots, the weather remains indifferent.  There's no use in fighting it, sometimes we just need to let it rain.</p>
            <p>Duchovny's lyrics involve him deeply in the contradictions that we all face.  The waters of existence teem with these impossibilities; Duchovny laments "If you knew me you would stay / If you knew me you would walk away."  Two statements seemingly at odds with each other, but somehow both true. "Powerlessness my only power / Hopelessness my only hope / I see the girl up in the tower / But my hands can't grasp the rope."  Sometimes words are only facades and what they truly represent resides in the exact opposite sentiment.  Sometimes the girl up in the tower can't be rescued.  Although on the quite originally titled track "The Rain Song," Duchovny admits, "Now baby I'm not a meteorologist," we can all certainly agree that what he is is a unique and talented songwriter</p>

        </div>
        );
    }
    
    const Article3 = () => {
        return(
            <div className="container">
                <Header/>
                <Article/>
                <Nav />
                <Footer/>
            </div>
        )
    }
    
    export default Article3;