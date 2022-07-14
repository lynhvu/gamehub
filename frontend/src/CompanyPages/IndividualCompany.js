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
    //var genreData = require('../Genres/genresdata.json');
    var [genreData, setGenreData] = useState([]);

    var [gameData, setGameData] = useState([]);


    useEffect(() => {
        fetch("https://gamehubapi.me/games/").then(
            res => res.json()
        ).then(
            data => {
                setGameData(data)
                console.log(data)
            }
        )
    }, [])

    useEffect(() => {
        fetch("https://gamehubapi.me/genres/").then(
            res => res.json()
        ).then(
            data => {
                setGenreData(data)
                console.log(data)
            }
        )
    }, [])

    /*gameData.map(item => {
        for(var i = 0; i < compData.games.length; i++) {
            if(item.name == compData.games[i]) {
                localStorage.setItem("GAME", JSON.stringify(item))
                return;
            }
        }
    });*/

    /*genreData.map(item => {
        if (item.id == compData.genre_id) {
            localStorage.setItem("GENRES", JSON.stringify(item))
            setMatchGenre(item.name)
            return;
        }       
    });*/

    // for(var i = 0; i < gameData.length; i++){
    //     if(gameData[i].company_id == compData.id){
    //         localStorage.setItem("GAME", JSON.stringify(gameData[i]))
    //         matchGames.append(gameData[i].name)
    //     }

    // }

    function genreName(id){
        for(var i = 0; i < genreData.length; i++){
            if (genreData[i].id == id){
                return (<Link to="/genrespage" onClick={() => {localStorage.setItem("GENRES", JSON.stringify(genreData[i]))}}>{genreData[i].name}</Link>);
            }
        }
    }

    function gameName(item){
        return (<Link to="/games/gamepage" onClick={() => {localStorage.setItem("GAME", JSON.stringify(item))}}>{item.name}</Link>);
    }

    // returns the matching games for this company
    function getAllGames(id){
        const result = [];
        for(var i = 0; i < gameData.length; i++){
            if(gameData[i].company_id == id){
                result.push(gameData[i]);
            }
        }
        return result;
    }


    
    return (
        <div className='page default-bg'>
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
                        <p class="comp-descr"><u>Number of Games:</u> {compData.num_games}</p>
                        <p class="comp-descr"><p style={{float:"left"}}><b>Main Genre:&nbsp;</b></p> 
                            {<div style={{float:"left"}}> {genreName(compData.genre_id)}&nbsp;</div>}</p>
                    </div>

                    <div className="col">
                        <p id="comp-game">Popular Titles</p>
                        <div class = "comp-descr">{getAllGames(compData.id).map(item => (
                             <div style={{float:"left"}}> {gameName(item)}&nbsp;</div>
                        ))}</div>
                        {/* <PopularTitles titles = {getAllGames(compData.id)} gameData = {gameData}></PopularTitles> */}
                    </div>

                </div>
            </div>
            
            <BackBtn></BackBtn>
        </div>
    )
}

export default IndividualCompany