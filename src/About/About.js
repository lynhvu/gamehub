import {useState, useEffect} from 'react'
import "../StyleAndImg/style.css";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

const About = (props) => {

    return (
        <div className='page'>
            <link rel="stylesheet" href="style.css" type="text/css" />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
            <link
                href="https://fonts.googleapis.com/css2?family=Space+Mono&display=swap"
                rel="stylesheet"
            />
            <br />
            <div className="title" style={{ animation: "fadeIn 0.5s" }}>
                About Us
            </div>
            <div className="textbox" style={{ animation: "fadeIn 1.5s" }}>
                We are [adsfsadf], a group of CS students at UT Austin.
            </div>
            <div className="textbox" style={{ animation: "fadeIn 2.5s" }}>
                Meet our members:
            </div>
            <br />
            <br />
            <br />
            <Link to="/">
                <div className="animated-button">
                    <span />
                    <span />
                    <span />
                    <span />
                    Back
                </div>
            </Link>
        </div>
    )
}

export default About