import {useState, useEffect} from 'react'
import "../StyleAndImg/style.css";
import logo from "../StyleAndImg/logo2.png"
import NavBar from "../components/NavBar";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import BackBtn from '../BackBtn';

const AboutUs = (props) => {
    var membersData = require('./membersData.json');
    return (
        <div className='page'>
            <link rel="stylesheet" href="style.css" type="text/css" />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
            <link
                href="https://fonts.googleapis.com/css2?family=Space+Mono&display=swap"
                rel="stylesheet"
            />
            <NavBar></NavBar>
            <br />
            <div className="title" style={{ animation: "fadeIn 0.5s" }}>
                About Us
            </div>
            <div className="textbox" style={{ animation: "fadeIn 1.5s" }}>
                We are GameHub developers, a group of CS students at UT Austin.
            </div>
            <div className="textbox" style={{ animation: "fadeIn 2.5s" }}>
                Meet our members:
            </div>
            <br></br>
            <div className='container'>
                {membersData.map(item =>
                    <div className='row profile-card' style={{margin:"2%"}}>
                        <div className='col-3'>
                          
                            <img src={item.picture} alt="Profile Picture"
                                style={{
                                width: 150,
                                borderRadius: "5%",
                                animation: "glowIn 0.5s",
                                boxShadow: "0 0 20px rgba(81, 203, 238, 1)"}}/>
                        </div>
                        <div className='col-5 text-black card-inside'>
                            <p className='text-light-head'>{item.name}</p>
                            <p><b>Responsibility:</b> {item.resp}</p>
                            <p><b>Major:</b> {item.major}</p>
                            <p><b>Year:</b> {item.year}</p>
                            <p>{item.about}</p>

                        </div>
                        <div className='col-3 text-black card-solid'>
                            <p>Commits made: {item.commits}</p>
                            <p>Issues resolved: {item.issues}</p>
                            <p>Unit tests run: {item.tests}</p>
                        </div>
                        
                    </div>
                    
                )}
            </div>
            <br></br>
           <BackBtn></BackBtn>
        </div>
    )
    
}

export default AboutUs