import { useState, useEffect } from 'react'
import "../StyleAndImg/style.css";
import NavBar from "../components/NavBar";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import BackBtn from "../BackBtn";

const GenresPage = (props) => {

    var genresData = JSON.parse(localStorage.getItem("GENRES"));

    var [gameData, setGameData] = useState([])

    useEffect(() => {
        fetch("/gamedata/").then(
            res => res.json()
        ).then(
            data => {
                setGameData(data)
                console.log(data)
            }
        )
    }, [])

    var [compData, setCompData] = useState([])

    useEffect(() => {
        fetch("/compdata/").then(
            res => res.json()
        ).then(
            data => {
                setCompData(data)
                console.log(data)
            }
        )
    }, [])

    gameData.map(item => {
        for (let i = 0; i < genresData.games.length; i++) {
            if (item.name == genresData.games[i]) {
                localStorage.setItem("GAME", JSON.stringify(item))
                return;
            }
        }
    });

    compData.map(item => {
        for (let i = 0; i < genresData.companies.length; i++) {
            if (item.name == genresData.companies[i]) {
                localStorage.setItem("COMPANY", JSON.stringify(item))
                return;
            }
        }
    });

    function compName(item) {
        if (JSON.parse(localStorage.getItem("COMPANY")) == null) {
            return null;
        }
        if (item == JSON.parse(localStorage.getItem("COMPANY")).name) {
            return (<Link to="/companies/comp">{item}</Link>);
        } else {
            return item;
        }
    }

    function gameName(item) {
        if (JSON.parse(localStorage.getItem("GAME")) == null) {
            return null;
        }
        if (item == JSON.parse(localStorage.getItem("GAME")).name) {
            return (<Link to="/games/gamepage">{item}</Link>);
        } else {
            return item;
        }
    }

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
                        <p className="game-descr">Games: {genresData.games.map(item => (
                            <div> {gameName(item)} </div>
                        ))} </p>
                        <p className="game-descr">Companies: {genresData.companies.map(item => (
                            <div> {compName(item)} </div>
                        ))}</p>
                        <p className="game-descr">Genre Description: {genresData.description}</p>
                        <p className="game-descr">Topics: {genresData.themes}</p>
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
            <BackBtn></BackBtn>
        </div>
    )
}

export default GenresPage
