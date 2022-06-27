import { useState, useEffect } from 'react'
import "../StyleAndImg/style.css";
import logo from "../StyleAndImg/logosmall.png"
import NavBar from "../components/NavBar";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import BackBtn from '../BackBtn';

const Genres = (props) => {
    // var genresData = require('./genresdata.json');

    var [data, setData] = useState([])

    useEffect(() => {
        fetch("/genresdata/").then(
            res => res.json()
        ).then(
            data => {
                setData(data)
                console.log(data)
            }
        )
    }, [])

    const options = [{value: 'name', text: 'Name'},
                    {value: 'games', text: 'Games'},
                    {value: 'companies', text: 'Companies'},
                    {value: 'num', text: 'Number of Popular Games'},
                    {value: 'themes', text: 'Themes'},];
    const [selected, setSelected] = useState(options[0].value);
    const orders = [{value: 1, text: 'Ascending (A-Z or numerical)'},
                    {value: '-1', text: 'Descending (Z-A or numerical)'}];
    const [order, setOrder] = useState(orders[0].value);

    const handleSelectChg = event => {
        setSelected(event.target.value);
    };

    const handleOrderChg = event => {
        setOrder(event.target.value);
    };

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
                Genres
            </div>
            <div id="sort">
                Sort By:
            </div>
            <select value={selected} onChange={handleSelectChg}>
                {options.map(option => (
                    <option key={option.value} value={option.value}>
                        {option.text}
                    </option>
                ))}
            </select>
            <select value={order} onChange={handleOrderChg}>
                    {orders.map(option => (
                    <option key={option.value} value={option.value}>
                        {option.text}
                    </option>
                    ))}
            </select>
            <div class="container">
                <div className="row">
                    {data.map(item => (
                        <div className="col-lg-12">
                            <Link to="/genres/genrespage" className='link-style' onClick={() => { localStorage.setItem("GENRES", JSON.stringify(item)) }} style={{ textDecoration: "none" }}>
                                <Link to="/genrespage" className='link-style'>
                                    <div class="card">
                                        <img class="companyLogo" src={item.icon} alt="company logo"></img>
                                        <div class="compName">
                                            {item.name}
                                        </div>
                                        <div class="">
                                            {item.games[0]}, {item.games[1]}, {item.games[2]}
                                        </div>
                                        <div class="">
                                            {item.companies[0]}, {item.companies[1]}, {item.companies[2]}
                                        </div>
                                        <div class="">
                                            # Popular Games: {item.num}
                                        </div>
                                        <div class="">
                                            {item.themes}
                                        </div>
                                    </div>
                                </Link>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>

            <BackBtn></BackBtn>
        </div >
    )
    function sortByProperty() {
        var objArr = data;
        var prop = "attributes." + selected;
        var dir = order;

        if (!Array.isArray(objArr)) throw new Error("FIRST ARGUMENT NOT AN ARRAY");

        const clone = objArr.slice(0);
        const propPath = (prop.constructor === Array) ? prop : prop.split(".");

        clone.sort(function (a, b) {
            for (let p in propPath) {
                if (a[propPath[p]] && b[propPath[p]]) {
                    a = a[propPath[p]];
                    b = b[propPath[p]];
                }
            }
            // convert numeric str's to ints
            return ((a < b) ? -1 * dir : ((a > b) ? 1 * dir : 0));
        });
        // update the data
        data = clone;
    }
}

export default Genres
