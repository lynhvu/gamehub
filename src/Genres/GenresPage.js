import "../StyleAndImg/style.css";
import NavBar from "../components/NavBar";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

const GenresPage = (props) => {

    var genresData = JSON.parse(localStorage.getItem("GENRES"));

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
                            {genresData.name}
                        </div>
                        <p className="game-descr">Games: {genresData.games}</p>
                        <p className="game-descr">Companies: {genresData.companies}</p>
                        <p className="game-descr">Genre Description: {genresData.description}e</p>
                        <p className="game-descr">Themes: {genresData.themes}</p>
                    </div>
                    <div className="col">
                        <div className="game-photo-box">
                            {genresData.pictures.map(pic => (
                                <img src={pic} alt="Image not found" className="game-photo" />
                            ))}
                        </div>
                    </div>
                </div>
            </div>


            <Link to="" onClick={() => (window.history.back())}>
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

export default GenresPage
