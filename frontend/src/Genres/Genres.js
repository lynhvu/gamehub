import { useState, useEffect } from 'react'
import "../StyleAndImg/style.css";
import logo from "../StyleAndImg/logosmall.png"
import NavBar from "../components/NavBar";
import ReactPaginate from 'react-paginate';
import { Row, Card, Col, ListGroup, ListGroupItem } from "react-bootstrap";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import BackBtn from '../BackBtn';

const Genres = (props) => {
    /*var data = require('./genresdata.json');*/
    var [genres, setGenres] = useState([]);  // filtered genres to display
    var [data, setData] = useState([])  // full dataset of genres

    const [comps, setComps] = useState([])
    const [games, setGames] = useState([])

    useEffect(() => {
        fetch("https://gamehubapi.me/genres/").then(
            res => res.json()
        ).then(
            data => {
                setData(data)
                setGenres(data)
                console.log(data)
                console.log(data.length)
            }
        ).catch(err => console.log(err))

        // get the companies (to reference for company_id)
        fetch("https://gamehubapi.me/companies/").then(
            res => res.json()
        ).then(
            data => {
                setComps(data)
                console.log(data)
                console.log(data.length)
            }
        ).catch(err => console.log(err))

        // get the games (to reference for game_id)
        fetch("https://gamehubapi.me/games/").then(
            res => res.json()
        ).then(
            data => {
                setGames(data)
                console.log(data)
                console.log(data.length)
            }
        ).catch(err => console.log(err))
    }, [])


    const [pageNumber, setPageNumber] = useState(0);

    const genresPerPage = 9;
    const pagesVisited = pageNumber * genresPerPage;


    const options = [{ value: 'name', text: 'Name' },
    { value: 'games', text: 'Games' },
    { value: 'companies', text: 'Companies' },
    { value: 'num', text: 'Number of Popular Games' },
    { value: 'themes', text: 'Themes' },];
    const [selected, setSelected] = useState(options[0].value);
    const orders = [{ value: 1, text: 'Ascending (A-Z or numerical)' },
    { value: '-1', text: 'Descending (Z-A or numerical)' }];
    const [order, setOrder] = useState(orders[0].value);

    const handleSelectChg = event => {
        setSelected(event.target.value);
    };

    const handleOrderChg = event => {
        setOrder(event.target.value);
    };

    sortByProperty();

    // search by name, new
    function searchFor(term) {
        setGenres(data.filter(function (item) {
            return item.name.toLowerCase().includes(term.toLowerCase()) || item.description.toLowerCase().includes(term.toLowerCase())
        }))
    }

    function reset() {
        setGenres(data);
    }

    function applyFilters(startChar, endChar, minGames, maxGames) {
        setGenres(data.filter(function (item) {
            var qualifies = true;
            if (startChar && endChar) {
                qualifies &= item.name.charAt(0).toLowerCase() >= startChar.toLowerCase() && item.name.charAt(0).toLowerCase() <= endChar.toLowerCase();
            }
            if (minGames || maxGames) {
                qualifies &= item.num_games >= minGames && item.num_games <= maxGames;
            }
            return qualifies;
        }));
    }


    const displayGenres = genres
        .slice(pagesVisited, pagesVisited + genresPerPage)
        .map((item) => {
            return (
                <Col sm={4} style={{ marginBottom: '10px' }}>
                    <Link to="/genrespage" className='link-style' onClick={() => { localStorage.setItem("GENRES", JSON.stringify(item)) }} style={{ textDecoration: "none" }}>
                        <Card style={{ height: '100%', width: '100%' }}>
                            <Card.Img variant="top" src={item.picture} style={{ objectFit: 'cover' }} />
                            <Card.Body>
                                <Card.Title><h1>{item.name}</h1></Card.Title>
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                                <ListGroupItem>
                                    <b>Games: </b> {listAllGames(item.id)}
                                </ListGroupItem>
                                <ListGroupItem>
                                    <b>Companies: </b> {listAllCompanies(item.id)}
                                </ListGroupItem>
                                <ListGroupItem>
                                    <b># Popular Games: </b> {item.num_games}
                                </ListGroupItem>
                                <ListGroupItem>
                                    <b>Topics: </b> {item.themes}
                                </ListGroupItem>
                            </ListGroup>
                        </Card>
                    </Link>
                </Col>
            );
        });

    function listAllGames(givenId) {
        let result = "";
        for (var i = 0; i < games.length && result.length < 70; i++) {
            if (games[i].genre_id == givenId) {
                result += games[i].name + " ";
            }
        }
        return result;
    }

    function listAllCompanies(givenId) {
        let result = "";
        for (var i = 0; i < comps.length && result.length < 70; i++) {
            if (comps[i].genre_id == givenId) {
                result += comps[i].name + " ";
            }
        }
        return result;
    }

    const pageCount = Math.ceil(genres.length / genresPerPage);

    const changePage = ({ selected }) => {
        setPageNumber(selected);
    };


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
            <br></br>
            <input type="text" name="search" id="search" placeholder="Genre name . . ."></input>
            <button className="searchbttn" onClick={() => searchFor(document.getElementById("search").value)}>Search</button>
            <button className="searchbttn" onClick={reset}>Reset</button>

            {/* Filter options */}
            <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                Adjust Filters
            </button>
            <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-lg" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Adjust Filters</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            Names (Starting letter to ending letter, filter by alphabetical order):<br></br>
                            <input type="text" name="startChar" id="startChar" placeholder="A" maxlength="1"></input>
                            &nbsp;-&nbsp;
                            <input type="text" name="endChar" id="endChar" placeholder="Z" maxlength="1"></input>
                            <br></br><br></br>

                            Number of Games:
                            <br></br>
                            <input type="number" name="minGames" id="minGames" placeholder="Min. # Games" maxlength="4"></input>
                            &nbsp;-&nbsp;
                            <input type="number" name="maxGames" id="maxGames" placeholder="Max. # Games" maxlength="4"></input>

                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary" onClick={() => applyFilters(
                                document.getElementById("startChar").value,
                                document.getElementById("endChar").value,
                                document.getElementById("minGames").value,
                                document.getElementById("maxGames").value)}>Save changes</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Sorting options */}
            <div id="search-sort">
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
                    {displayGenres}
                </div>
                <ReactPaginate
                    previousLabel={"Prev"}
                    nextLabel={"Next"}
                    pageCount={pageCount}
                    onPageChange={changePage}
                    containerClassName={"paginationBttns"}
                    previousLinkClassName={"previousBttn"}
                    nextLinkClassName={"nextBttn"}
                    disabledClassName={"paginationDisabled"}
                    activeClassName={"paginationActive"}
                />
            </div>

            <BackBtn></BackBtn>
        </div >
    )
    function sortByProperty() {
        var objArr = genres;
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
        genres = clone;
    }
}

export default Genres
