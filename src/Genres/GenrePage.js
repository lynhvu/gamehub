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

const GenrePage = (props) => {

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
                <div class="row bg-dark text-light" style={{ opacity: 0.9, borderRadius: 1 }}>
                    <div class="col-sm">
                        Game Title
                    </div>
                    <div class="col-sm">
                        Company
                    </div>
                    <div class="col-sm">
                        Genre
                    </div>
                </div>

                <div class="row row2">
                    <div class="col-sm">
                        The Last of Us
                    </div>
                    <div class="col-sm">
                        Naughty Dog
                    </div>
                    <div class="col-sm">
                        Action, Adventure
                    </div>
                </div>

                <div class="row row2">
                    <div class="col-sm">
                        Fallout: New Vegas
                    </div>
                    <div class="col-sm">
                        Obsidian Entertainment
                    </div>
                    <div class="col-sm">
                        Action, Shooter, Adventure, RPG
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

export default GenrePage
