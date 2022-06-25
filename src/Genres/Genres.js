import { useState, useEffect } from 'react'
import "../StyleAndImg/style.css";
import logo from "../StyleAndImg/logosmall.png"
import NavBar from "../components/NavBar";

import actionIcon from "../StyleAndImg/GenreIcons/Action Game Icon.png"
import adventureIcon from "../StyleAndImg/GenreIcons/Adventure Game Icon.png"
import shooterIcon from "../StyleAndImg/GenreIcons/Shooter Game Icon.png"
import rpgIcon from "../StyleAndImg/GenreIcons/Role Playing Game Icon.png"
import puzzleIcon from "../StyleAndImg/GenreIcons/Puzzle Game Icon.png"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

const Genres = (props) => {

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
            <div className="listTitleText" style={{ animation: "fadeIn 0.5s" }}>
                Genres
            </div>

            <div class="container">
                <div className="row">
                    <div className="col">
                        <Link to="/genrepage" className='link-style'>
                        <div class="card">
                            <img class="companyLogo" src={actionIcon} alt="company logo"></img>
                            <div class="">
                            Action
                            </div>
                        </div>
                        </Link>
                    </div>
                    <div className="col">
                        <div class="card">
                        <img class="companyLogo" src={adventureIcon} alt="company logo"></img>
                            <div class="">
                            Adventure
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div class="card">
                        <img class="companyLogo" src={shooterIcon} alt="company logo"></img>
                            <div class="">
                            Puzzle
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div class="card">
                        <img class="companyLogo" src={rpgIcon} alt="company logo"></img>
                            <div class="">
                            RPG
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div class="card">
                        <img class="companyLogo" src={puzzleIcon} alt="company logo"></img>
                            <div class="">
                            Shooter
                            </div>
                        </div>
                    </div>
                </div>
            </div>

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

export default Genres
