import "../StyleAndImg/style.css";
import NavBar from "../components/NavBar";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

const GamePage = (props) => {

    var gameData = JSON.parse(localStorage.getItem("GAME"));

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
                            {gameData.name}
                        </div>
                        <p className="game-metascore">Metascore: {gameData.score}</p>
                        <p className="game-descr">{gameData.description}</p>
                        <p className="game-descr">Genre: {gameData.genre}e</p>
                        <p className="game-descr">Released: {gameData.releaseDate}</p>
                        <p className="game-descr">Developed by <a href="/comp1" style={{color: "white"}}>{gameData.developer}</a></p>
                        <p className="game-descr">Platforms: {gameData.platforms}</p>
                    </div>
                    <div className="col">
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

export default GamePage