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
import { Carousel } from "react-bootstrap";

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
        fetch("https://gamehubapi.me/companies/").then(
            res => res.json()
        ).then(
            data => {
                setCompData(data)
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

    // compData.map(item => {
    //     if (item.name == gameData.developer) {
    //         localStorage.setItem("COMPANY", JSON.stringify(item));
    //         return;
    //     }
    // });

    
    // genreData.map(item => {
    //     for(let i = 0; i < gameData.genre.length; i++) {
    //         if(item.name == gameData.genre[i]) {
    //             localStorage.setItem(JSON.stringify(gameData.genre[i]), JSON.stringify(item));
    //         }
    //     }
    // });

    function genreName(genre_id) {
        for(var i = 0; i < genreData.length; i++){
            if(genreData[i].id == genre_id){
                return (<Link to="/genrespage" onClick={() => {localStorage.setItem("GENRES", JSON.stringify(genreData[i]))}}>{genreData[i].name}</Link>);
            }
        }  
    }

    function companyName(comp_id) {
        for(var i = 0; i < compData.length; i++){
            if(compData[i].id == comp_id){
                return (<Link to="/companies/comp" onClick={() => {localStorage.setItem("COMPANY", JSON.stringify(compData[i]))}}>{compData[i].name}</Link>);
            }
        }  
    }

    return (
        <div className='page default-bg'>
            {/* <div class="gamepage-bg" style={{backgroundImage: 'url(' + gameData.pictures[0] + ')'}}>
            </div> */}

            <div style={{}}>
            <link rel="stylesheet" href="style.css" type="text/css" />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
            <link
                href="https://fonts.googleapis.com/css2?family=Space+Mono&display=swap"
                rel="stylesheet"
            />
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"/>

            <NavBar></NavBar>
            <div className="container" style={{}}>
                <div className="row justify-content-around">
                    <div className="col" style={{}}>
                        <div className="pageTitleText" style={{ animation: "fadeIn 0.5s"}}>
                            {gameData==null?null:gameData.name}
                        </div>
                        <Carousel>
                                {gameData==null?null:gameData.pictures.map(pic => (
                                    <Carousel.Item>
                                        <img className="d-block w-100" src={pic} alt="First slide" />
                                    </Carousel.Item>
                                ))}
                        </Carousel>
                        <p className="game-metascore" style={{marginTop:'15px'}}>Metascore: {gameData==null?null:gameData.score}</p>
                        <p className="game-descr">{gameData==null?null:gameData.description}</p>
                        <p className="game-descr"><div style={{color: "white"}}>Developed by {companyName(gameData==null?null:gameData.company_id)}</div></p>
                        <p className="game-descr"><b>Released:</b> {gameData==null?null:gameData.released}</p>
                        <p className="game-descr" style={{height:50}}><p style={{float:"left"}}><b>Genre:&nbsp;</b></p>
                             <div style={{float:"left"}}> {genreName(gameData==null?null:gameData.genre_id)}&nbsp;</div></p>
                        <p className="game-descr"><b>Platforms:</b> {gameData==null?null:gameData.platforms.join(', ')}</p>
                    </div>
                </div>
            </div>

            <BackBtn></BackBtn>

            </div>
        </div>
    )
}

export default GamePage