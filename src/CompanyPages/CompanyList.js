import {useState, useEffect} from 'react'
import "../StyleAndImg/style.css";
import sega from "../StyleAndImg/sega.svg"
import NavBar from "../components/NavBar";
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

            <NavBar></NavBar>
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