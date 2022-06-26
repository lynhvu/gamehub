import "../StyleAndImg/style.css";
import NavBar from "../components/NavBar";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import BackBtn from "../BackBtn";

const GamePage = (props) => {

    var gameData = JSON.parse(localStorage.getItem("GAME"));
    var companyData = require('../CompanyPages/companydata.json');
    companyData.map(item => {
        if (item.name == gameData.developer) {
            localStorage.setItem("COMPANY", JSON.stringify(item))
            return;   
        }       
    });

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
            <div className="container" style={{}}>
                <div className="row">
                    <div className="col" style={{}}>
                        <div className="pageTitleText" style={{ animation: "fadeIn 0.5s" }}>
                            {gameData.name}
                        </div>
                        <p className="game-metascore">Metascore: {gameData.score}</p>
                        <p className="game-descr">{gameData.description}</p>
                        <p className="game-descr">Developed by <a href="/companies/comp" style={{color: "white"}}>{gameData.developer}</a></p>
                        <p className="game-descr"><b>Released:</b> {gameData.releaseDate}</p>
                        <p className="game-descr"><b>Genre:</b> {gameData.genre}</p>
                        <p className="game-descr"><b>Platforms:</b> {gameData.platforms}</p>
                    </div>
                    <div className="col" style={{}}>
                        <video className="game-video" controls>
                            {gameData.videos.map(vid => (
                                <source src={vid} alt="Your browser does not support the video tag."/>
                            ))}
                        </video>

                        <div className="game-photo-box">
                            {gameData.pictures.map(pic => (
                                <img src={pic} alt="Image not found" className="game-photo" />
                            ))}
                        </div>

                    </div>
                </div>
            </div>

            <BackBtn></BackBtn>
        </div>
    )
}

export default GamePage