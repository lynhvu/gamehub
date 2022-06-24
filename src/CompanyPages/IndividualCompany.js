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

            <div className="row"> 
                <div className="col">
                    <div className="listTitleText" style={{ animation: "fadeIn 0.5s" }}>
                    Nintendo
                    </div>
                    <p id="comp-descr">The company develops hardware and software for handheld and home console video game systems, with support from various companies and organizations.</p>
                    <p id="comp-descr">Founded in 1889</p>
                    <p id="comp-descr">Single Player Experience</p>
                    <p id="comp-descr">Based in Japan</p>
                </div>

                <div className="col">
                    <p id="comp-game">Popular Titles</p>
                    <PopularTitles></PopularTitles>
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

export default IndividualCompany