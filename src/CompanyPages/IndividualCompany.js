import {useState, useEffect} from 'react'
import "../StyleAndImg/style.css";
import PopularTitles from "./PopularTitles";
import NavBar from "../components/NavBar";
import BackBtn from "../BackBtn";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

const IndividualCompany = (props) => {

    var compData = JSON.parse(localStorage.getItem("COMPANY"));
    var genreData = require('../Genres/genresdata.json');
    
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

    gameData.map(item => {
        for(let i = 0; i < compData.games.length; i++) {
            if(item.name == compData.games[i]) {
                localStorage.setItem("GAME", JSON.stringify(item))
                return;
            }
        }
    });

    genreData.map(item => {
        if (item.name == compData.genre) {
            localStorage.setItem("GENRES", JSON.stringify(item))
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
            <div className="container">
                <div className="row"> 
                    <div className="col">
                        <div className="listTitleText" style={{ animation: "fadeIn 0.5s" }}>
                            {compData.name}
                        </div>
                        <p class="comp-descr"><u>Description:</u> <p id ="comp-descr">{compData.description}</p></p>
                        <p class="comp-descr"><u>Founded in:</u> {compData.year}</p>
                        <p class="comp-descr"><u>Based in:</u> {compData.location}</p>
                        <p class="comp-descr"><u>Main Genre:</u> <Link to="/genrespage">{compData.genre}</Link></p>
                    </div>

                    <div className="col">
                        <p id="comp-game">Popular Titles</p>
                        <PopularTitles titles = {compData.games}></PopularTitles>
                    </div>

                </div>
            </div>
            
            <BackBtn></BackBtn>
        </div>
    )
}

export default IndividualCompany