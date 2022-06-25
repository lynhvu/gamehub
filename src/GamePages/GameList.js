import "../StyleAndImg/style.css";
import NavBar from "../components/NavBar";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

const GameList = (props) => {

    var gameData = require('./gamedata.json');

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
                Games
            </div>
            <div class="container">
                <div class="row bg-dark text-light" style={{ opacity: 0.9, borderRadius: 1 }}>
                    <div class="col-sm">
                        Game Title
                    </div>
                    <div class="col-sm">
                        Company
                    </div>
                    <div class="col-sm">
                        Genre
                    </div>
                </div>
                
                {gameData.map(item => (
                    <Link to={{pathname: "/games/gamepage"}} onClick={() => {localStorage.setItem("GAME", JSON.stringify(item))}} style={{ textDecoration: "none" }}>
                    <div class="row row2">
                        <div class="col-sm">
                            {item.name}
                        </div>
                        <div class="col-sm">
                            {item.developer}
                        </div>
                        <div class="col-sm">
                            {item.genre}
                        </div>
                    </div>
                    </Link>
                ))}
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

export default GameList