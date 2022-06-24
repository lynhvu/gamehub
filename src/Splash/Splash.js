import {useState, useEffect} from 'react'
import "../StyleAndImg/style.css";
import logo from "../StyleAndImg/logo2.png"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

const Splash = (props) => {

    return (
        <div className="page">         
            <link rel="stylesheet" href="style.css" type="text/css" />
            <div className='splash-logo'>
            <img
                src={logo}
                alt="logo"
                style={{
                width: 300,
                borderRadius: "50%",
                animation: "glowIn 0.5s",
                boxShadow: "0 0 20px rgba(81, 203, 238, 1)"
                }}
            />
            </div>
            <Link to="/games">
                <div className="animated-button1">
                    <span />
                    <span />
                    <span />
                    <span />
                    Explore Games
                </div>
            </Link>
            
            <Link to="/companies">
                <div className="animated-button1">
                    <span />
                    <span />
                    <span />
                    <span />
                    Explore Game Companies
                </div>
            </Link>
            <div className="animated-button1">
                <span />
                <span />
                <span />
                <span />
                Explore Game Genres
            </div>
            <br />
            <br />
            <Link to="/about">
                <div className="animated-button">
                    <span />
                    <span />
                    <span />
                    <span />
                    About Us
                </div>
            </Link>
        </div>
    )
}

export default Splash
