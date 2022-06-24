import {useState, useEffect} from 'react'
import "../StyleAndImg/style.css";
import logo from "../StyleAndImg/logosmall.png"
import sega from "../StyleAndImg/sega.svg"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

const CompanyList = (props) => {

    return (
        <div className='page'>
            <link rel="stylesheet" href="style.css" type="text/css" />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
            <link
                href="https://fonts.googleapis.com/css2?family=Space+Mono&display=swap"
                rel="stylesheet"
            />

            <nav class="navbar navbar-expand-lg navbar-dark">
                <img src={logo} alt="logo" style={{width: 70, marginLeft:10}}/>
                <a class="navbar-brand" href="#">GameHub</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <Link to="/">
                            <a class="nav-item nav-link">Home</a>
                        </Link>
                        <Link to="/games">
                            <a class="nav-item nav-link">Games</a>
                        </Link>
                        <Link to="/companies">
                            <a class="nav-item nav-link active">Companies</a>
                        </Link>
                        <Link to="/genres">
                            <a class="nav-item nav-link">Genres</a>
                        </Link>
                        <Link to="/about">
                            <a class="nav-item nav-link">About Us</a>
                        </Link>
                    </div>
                </div>
            </nav>

            <div className="listTitleText" style={{ animation: "fadeIn 0.5s" }}>
                Companies
            </div>
            <div class="container">
                <div className="row">
                    <div className="col">
                        <Link to="/comp1" className='link-style'>
                            
                        <div class="card">
                            <img class="companyLogo" src={sega} alt="company logo"></img>
                            <div class="">
                            One of five attributes
                            </div>
                            <div class="">
                            One of five attributes
                            </div>
                            <div class="">
                            One of five attributes
                            </div>
                            <div class="">
                            One of five attributes
                            </div>
                            <div class="">
                            One of five attributes
                            </div>
                        </div>
                        </Link>
                    </div>
                    <div className="col">
                        <div class="card">
                        <img class="companyLogo" src={sega} alt="company logo"></img>
                            <div class="">
                            One of five attributes
                            </div>
                            <div class="">
                            One of five attributes
                            </div>
                            <div class="">
                            One of five attributes
                            </div>
                            <div class="">
                            One of five attributes
                            </div>
                            <div class="">
                            One of five attributes
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div class="card">
                        <img class="companyLogo" src={sega} alt="company logo"></img>
                            <div class="">
                            One of five attributes
                            </div>
                            <div class="">
                            One of five attributes
                            </div>
                            <div class="">
                            One of five attributes
                            </div>
                            <div class="">
                            One of five attributes
                            </div>
                            <div class="">
                            One of five attributes
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

export default CompanyList