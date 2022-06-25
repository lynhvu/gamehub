import { useState, useEffect } from 'react'
import "../StyleAndImg/style.css";
import logo from "../StyleAndImg/logosmall.png"
import NavBar from "../components/NavBar";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

const Genres = (props) => {
    var genresData = require('./genresdata.json');

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
                    {genresData.map(item => (
                        <div className="col-4">
                            <Link to="/genres/genrespage" className='link-style' onClick={() => { localStorage.setItem("GENRES", JSON.stringify(item)) }} style={{ textDecoration: "none" }}>
                                <Link to="/genrespage" className='link-style'>
                                    <div class="card">
                                        <img class="companyLogo" src={item.icon} alt="company logo"></img>
                                        <div class="">
                                            {item.name}
                                        </div>
                                    </div>
                                </Link>
                            </Link>
                        </div>
                    ))}
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
        </div >
    )
}

export default Genres
