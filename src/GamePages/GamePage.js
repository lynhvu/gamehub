import "../StyleAndImg/style.css";
import NavBar from "../components/NavBar";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

const GamePage = (props) => {

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
                    Portal
                    </div>
                    <p id="comp-descr">Portal is a first-person puzzle game where players undergo a series of tests within the Aperture Science Enrichment Center, controlled by the malevolent AI GLaDOS. Mechanics include manipulating objects and using a portal gun.</p>
                    <p id="comp-descr">Released October 10, 2007</p>
                    <p id="comp-descr">Developed by Valve</p>
                    <p id="comp-descr">Based in Japan</p>
                </div>

                <video height="350" width="700" controls>
                    <source src="https://media.rawg.io/media/stories/8a1/8a17d3fc984d01379a83338b2d753c37.mp4" type="video/mp4"/>
                    Your browser does not support the video tag.
                </video>
                

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

export default GamePage