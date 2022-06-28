import "../StyleAndImg/style.css";
import NavBar from "../components/NavBar";
import {useState, useEffect} from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import BackBtn from "../BackBtn";

const GamePage = (props) => {

    var gameData = JSON.parse(localStorage.getItem("GAME"));
    /*var companyData = require('../CompanyPages/companydata.json');
    companyData.map(item => {
        if (item.name == gameData.developer) {
            localStorage.setItem("COMPANY", JSON.stringify(item))
            return;   
        }       
    });*/
    var [genreData, setGenreData] = useState([])

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

    useEffect(() => {
        fetch("/genresdata/").then(
            res => res.json()
        ).then(
            data => {
                setGenreData(data)
                console.log(data)
            }
        )
    }, [])

    compData.map(item => {
        if (item.name == gameData.developer) {
            localStorage.setItem("COMPANY", JSON.stringify(item))
            return;
        }
    });

    
    genreData.map(item => {
        for(let i = 0; i < gameData.genre.length; i++) {
            if(item.name == gameData.genre[i]) {
                localStorage.setItem(JSON.stringify(gameData.genre[i]), JSON.stringify(item))
            }
        }
    });

    function genreName(item) {
        if (localStorage.getItem(JSON.stringify(item)) != null){
            return (<Link to="/genrespage" onClick={() => {localStorage.setItem("GENRES", localStorage.getItem(JSON.stringify(item)))}}>{item}</Link>);
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
                        <p className="game-descr" style={{height:50}}><p style={{float:"left"}}><b>Genre:&nbsp;</b></p> {gameData.genre.map(item => (
                             <div style={{float:"left"}}> {genreName(item)}&nbsp;</div>
                        ))} </p>
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