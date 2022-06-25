import "../StyleAndImg/style.css";
import PopularTitles from "./PopularTitles";
import NavBar from "../components/NavBar";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

const IndividualCompany = (props) => {

    var compData = JSON.parse(localStorage.getItem("COMPANY"));
    
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
            <div className="container">
                <div className="row"> 
                    <div className="col">
                        <div className="listTitleText" style={{ animation: "fadeIn 0.5s" }}>
                            {compData.name}
                        </div>
                        <p class="comp-descr"><u>Description:</u> <p id ="comp-descr">{compData.description}</p></p>
                        <p class="comp-descr"><u>Founded in:</u> {compData.year}</p>
                        <p class="comp-descr"><u>Based in:</u> {compData.location}</p>
                        <p class="comp-descr"><u>Main Genre:</u> {compData.genre}</p>
                    </div>

                    <div className="col">
                        <p id="comp-game">Popular Titles</p>
                        <PopularTitles titles = {compData.games}></PopularTitles>
                    </div>

                </div>
            </div>
            
            <Link to="" onClick={ () => (window.history.back())}>
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

export default IndividualCompany