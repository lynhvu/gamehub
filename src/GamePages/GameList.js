import "../StyleAndImg/style.css";
import NavBar from "../components/NavBar";
import {useState, useEffect} from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

const GameList = (props) => {
    var gameData = require('./gamedata.json');

    const options = [
        {value: 'name', text: 'Title'},
        {value: 'developer', text: 'Company'},
        {value: 'genre', text: 'Genre'},
        {value: 'score', text: 'Metascore'},
        {value: 'platforms', text: 'Platforms'},
      ];
    
    const [selected, setSelected] = useState(options[0].value);

    const orders = [
    {value: 1, text: 'Ascending'},
    {value: -1, text: 'Descending'},
    ];
    
    const [order, setOrder] = useState(orders[0].value);
    
    const handleSelectChange = event => {
        console.log(event.target.value);
        setSelected(event.target.value);
    };

    const handleOrderChange = event => {
        console.log(event.target.value);
        setOrder(event.target.value);
    };
    
    function sortByProperty(){
        var objArray = gameData;
        var prop = "attributes." + selected;
        var direct= order;
        // if (arguments.length<2) throw new Error("ARRAY, AND OBJECT PROPERTY MINIMUM ARGUMENTS, OPTIONAL DIRECTION");
        if (!Array.isArray(objArray)) throw new Error("FIRST ARGUMENT NOT AN ARRAY");
        const clone = objArray.slice(0);
        const propPath = (prop.constructor===Array) ? prop : prop.split(".");
        clone.sort(function(a,b){
            for (let p in propPath){
                    if (a[propPath[p]] && b[propPath[p]]){
                        a = a[propPath[p]];
                        b = b[propPath[p]];
                    }
            }
            // convert numeric strings to integers
            /*a = a.match(/^\d+$/) ? +a : a;
            b = b.match(/^\d+$/) ? +b : b;*/
            return ( (a < b) ? -1*direct : ((a > b) ? 1*direct : 0) );
        });
        gameData = clone;
    }

    sortByProperty();

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
            
            <div>
                <div className="gamelist-select-table">Sort By:</div>
                <select value={selected} onChange={handleSelectChange}>
                    {options.map(option => (
                    <option key={option.value} value={option.value}>
                        {option.text}
                    </option>
                    ))}
                </select>
                <select value={order} onChange={handleOrderChange}>
                    {orders.map(option => (
                    <option key={option.value} value={option.value}>
                        {option.text}
                    </option>
                    ))}
                </select>
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
                    <div class="col-sm">
                        Metascore
                    </div>
                    <div class="col-sm">
                        Platforms
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
                        <div class="col-sm">
                            {item.score}
                        </div>
                        <div class="col-sm" style={{fontSize:20}}>
                            {item.platforms}
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