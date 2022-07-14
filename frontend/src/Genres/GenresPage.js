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
import { Carousel } from 'react-bootstrap';

const GenresPage = (props) => {

    var genresData = JSON.parse(localStorage.getItem("GENRES"));
    console.log(genresData)

    var [gameData, setGameData] = useState([])

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

    var [compData, setCompData] = useState([])

    useEffect(() => {
        fetch("https://gamehubapi.me/companies/").then(
            res => res.json()
        ).then(
            data => {
                setCompData(data)
                console.log(data)
            }
        )
    }, [])

    // gameData.map(item => {
    //     for (let i = 0; i < genresData.games.length; i++) {
    //         if (item.name == genresData.games[i]) {
    //             localStorage.setItem("GAME", JSON.stringify(item))
    //             return;
    //         }
    //     }
    // });

    // compData.map(item => {
    //     for (let i = 0; i < genresData.companies.length; i++) {
    //         if (item.name == genresData.companies[i]) {
    //             localStorage.setItem("COMPANY", JSON.stringify(item))
    //             return;
    //         }
    //     }
    // });

    // function compName(item) {
    //     if (JSON.parse(localStorage.getItem("COMPANY")) == null) {
    //         return null;
    //     }
    //     if (item == JSON.parse(localStorage.getItem("COMPANY")).name) {
    //         return (<Link to="/companies/comp">{item}</Link>);
    //     } else {
    //         return item;
    //     }
    // }

    // function gameName(item) {
    //     if (JSON.parse(localStorage.getItem("GAME")) == null) {
    //         return null;
    //     }
    //     if (item == JSON.parse(localStorage.getItem("GAME")).name) {
    //         return (<Link to="/games/gamepage">{item}</Link>);
    //     } else {
    //         return item;
    //     }
    // }


    function gameName(item){
        return (<Link to="/games/gamepage" onClick={() => {localStorage.setItem("GAME", JSON.stringify(item))}}>{item.name}</Link>);
    }

    // returns the matching games for this genre
    function getAllGames(id){
        const result = [];
        for(var i = 0; i < gameData.length; i++){
            if(gameData[i].genre_id == id){
                result.push(gameData[i]);
            }
        }
        return result;
    }

    function compName(item){
        return (<Link to="/companies/comp" onClick={() => {localStorage.setItem("COMPANY", JSON.stringify(item))}}>{item.name}</Link>);
    }

    // returns the matching games for this genre
    function getAllComps(id){
        const result = [];
        for(var i = 0; i < compData.length; i++){
            if(compData[i].genre_id == id){
                result.push(compData[i]);
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
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"/>

            <NavBar></NavBar>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="listTitleText" style={{ animation: "fadeIn 0.5s" }}>
                            {genresData.name}
                        </div>
                        <Carousel style={{marginBottom: '15px'}}>
                                        <img className="d-block w-100" src={genresData.picture} alt="First slide" />
                                    
                        </Carousel>
                        <p className="game-descr">Genre Description: {genresData.description}</p>
                        <div className='row'>
                            <div className='col'>
                                <p className="game-descr">Games: 
                                <div>{getAllGames(genresData.id).map(item => (
                             <div> {gameName(item)}&nbsp;</div>))} </div>
                                </p>
                            </div>
                            <div className='col'>
                                <p className="game-descr">Companies: 
                                <div>{getAllComps(genresData.id).map(item => (
                             <div> {compName(item)}&nbsp;</div>))}</div>
                                </p>
                            </div>
                            <div className='col'> 
                                <p className="game-descr">Topics: {genresData.themes}</p> 
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <BackBtn></BackBtn>
        </div>
    )
}

export default GenresPage
