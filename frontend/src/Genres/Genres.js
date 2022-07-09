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
    const [genres, setGenres] = useState([]);
    var [data, setData] = useState([])

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

    const displayGenres = data
      .slice(pagesVisited, pagesVisited + genresPerPage)
      .map((item) => {
        return (
          <Col sm={4} style={{marginBottom: '10px'}}>
              <Link to="/genrespage" className='link-style' onClick={() => { localStorage.setItem("GENRES", JSON.stringify(item)) }} style={{ textDecoration: "none" }}>
                  <Card style={{height: '100%', width: '100%'}}>
                      <Card.Img variant="top" src={item.picture} style={{objectFit: 'cover'}}/>
                      <Card.Body>
                          <Card.Title><h1>{item.name}</h1></Card.Title>
                      </Card.Body>
                      <ListGroup className="list-group-flush">
                          <ListGroupItem>
                            <b>Games: </b> {listAllGames(item.id) }
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
  
    function listAllGames(givenId){
        let result = "";
        for(var i = 0; i < games.length && result.length < 70; i++){
            if(games[i].genre_id == givenId){
                result += games[i].name + " ";
            }
        }
        return result;
    }

    function listAllCompanies(givenId){
        let result = "";
        for(var i = 0; i < comps.length && result.length < 70; i++){
            if(comps[i].genre_id == givenId){
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
