import {useState, useEffect} from 'react'
import "../StyleAndImg/style.css";
import NavBar from "../components/NavBar";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

const CompanyList = (props) => {

    var compData = require('./companydata.json');

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
                    
                        {compData.map(item => (
                        <div className="col-4">
                            <Link to="/companies/comp" className="link-style" onClick={() => {localStorage.setItem("COMPANY", JSON.stringify(item))}} style={{ textDecoration: 'none' }}>
                                <div class="card">
                                    <img class="companyLogo" src={item.img} alt="company logo"></img>
                                    
                                    <div class="compName">
                                        {item.name}
                                    </div>
                                    <div class="">
                                        {item.year}
                                    </div>
                                    <div class="">
                                        {item.location}
                                        <br/><br/>
                                    </div>
                                    <div class="topThree">
                                        <b>Top 3 Games:</b>
                                        <ol>
                                            <li>
                                                {item.games[0]}
                                            </li>
                                            <li>
                                                {item.games[1]}
                                            </li>
                                            <li>
                                                {item.games[2]}
                                            </li>
                                        </ol>
                                    </div>
                                </div>
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
        </div>
    )
}

export default CompanyList