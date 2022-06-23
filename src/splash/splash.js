import {useState, useEffect} from 'react'
import "./style.css";
import logo from "./logo2.png"

const Splash = (props) => {

    return (
        <div>         
            <link rel="stylesheet" href="style.css" type="text/css" />
            <br />
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
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <a href="#" className="animated-button1">
                <span />
                <span />
                <span />
                <span />
                Explore Games
            </a>
            <a href="#" className="animated-button1">
                <span />
                <span />
                <span />
                <span />
                Explore Game Companies
            </a>
            <a href="#" className="animated-button1">
                <span />
                <span />
                <span />
                <span />
                Explore Game Genres
            </a>
            <br />
            <br />
            <a href="about.html" className="animated-button">
                <span />
                <span />
                <span />
                <span />
                About Us
            </a>
            
        </div>
    )
}

export default Splash