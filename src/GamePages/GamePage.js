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
            <div className="container">
                <div className="row"> 
                    <div className="col">
                        <div className="listTitleText" style={{ animation: "fadeIn 0.5s" }}>
                        Portal
                        </div>
                        <p className="game-metascore" >Metascore: 90</p>
                        <p className="game-descr">Portal is a first-person puzzle game where players undergo a series of tests within the Aperture Science Enrichment Center, controlled by the malevolent AI GLaDOS. Mechanics include manipulating objects and using a portal gun.</p>
                        <p className="game-descr">Genre: Adventure, Puzzle</p>
                        <p className="game-descr">Released October 9, 2007</p>
                        <p className="game-descr">Developed by Valve</p>
                        <p className="game-descr">Platforms: PC, macOS, Linux, Xbox 360, PlayStation 3, Android</p>
                    </div>
                    <div className="col">
                        <video className="game-video" controls>
                            <source src="https://media.rawg.io/media/stories/8a1/8a17d3fc984d01379a83338b2d753c37.mp4" type="video/mp4"/>
                            Your browser does not support the video tag.
                        </video>
                        <div className="game-photo-box">
                            <img src="https://media.rawg.io/media/resize/200/-/screenshots/99e/99e94bd55eb75fa6e75c3dcbb1a570b2.jpg" alt="Image not found" className="game-photo"/>
                            <img src="https://media.rawg.io/media/resize/200/-/screenshots/2f0/2f0297a46934d9fa914c626902b1ce20.jpg" alt="Image not found" className="game-photo"/>
                            <img src="https://media.rawg.io/media/resize/200/-/screenshots/3b3/3b3713fbca6194dfc4d6e8a8d006d354.jpg" alt="Image not found" className="game-photo"/>

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

export default GamePage