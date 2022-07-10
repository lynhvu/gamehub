import "../StyleAndImg/style.css";
import NavBar from "../components/NavBar";
import { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import BackBtn from "../BackBtn";

const GameList = (props) => {
  var [gameData, setData] = useState([]) // full dataset of games
  var [games, setGames] = useState([])  // filtered games to display

  const [comps, setComps] = useState([])

  const [gens, setGens] = useState([])

  useEffect(() => {
    fetch("https://gamehubapi.me/games/").then(
      res => res.json()
    ).then(
      data => {
        setData(data)
        setGames(data)
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

    fetch("https://gamehubapi.me/genres/").then(
      res => res.json()
    ).then(
      data => {
        setGens(data)
        console.log(data)
        console.log(data.length)
      }
    ).catch(err => console.log(err))
  }, [])

  /*var gameData = require("./gamedata.json");*/

  const [pageNumber, setPageNumber] = useState(0);

  const gamesPerPage = 10;
  const pagesVisited = pageNumber * gamesPerPage;

  const options = [
    { value: "name", text: "Title" },
    { value: "developer", text: "Company" },
    { value: "genre", text: "Genre" },
    { value: "score", text: "Metascore" },
    { value: "platforms", text: "Platforms" },
  ];

  const [selected, setSelected] = useState(options[0].value);

  const orders = [
    { value: 1, text: "Ascending" },
    { value: -1, text: "Descending" },
  ];

  const [order, setOrder] = useState(orders[0].value);

  const handleSelectChange = (event) => {
    console.log(event.target.value);
    setSelected(event.target.value);
  };

  const handleOrderChange = (event) => {
    console.log(event.target.value);
    setOrder(event.target.value);
  };

  // Sort the table by attributes in the selection menu
  function sortByProperty() {
    var objArray = games;
    var prop = "attributes." + selected;
    var direct = order;
    if (!Array.isArray(objArray))
      throw new Error("FIRST ARGUMENT NOT AN ARRAY");
    const clone = objArray.slice(0);
    const propPath = prop.constructor === Array ? prop : prop.split(".");
    clone.sort(function (a, b) {
      for (let p in propPath) {
        if (a[propPath[p]] && b[propPath[p]]) {
          a = a[propPath[p]];
          b = b[propPath[p]];
        }
      }
      return a < b ? -1 * direct : a > b ? 1 * direct : 0;
    });
    games = clone;
  }

  sortByProperty();

  // search by name, new
  function searchFor(term) {
    setGames(gameData.filter(function (item) {
      return item.name.toLowerCase().includes(term.toLowerCase()) || item.description.toLowerCase().includes(term.toLowerCase())
    }))
  }

  function reset() {
    setGames(gameData);
  }

  const displayGames = games
    .slice(pagesVisited, pagesVisited + gamesPerPage)
    .map((item) => {
      return (
        <Link
          to={{ pathname: "/games/gamepage" }}
          onClick={() => {
            localStorage.setItem("GAME", JSON.stringify(item));
          }}
          style={{ textDecoration: "none" }}
        >
          <div class="row row2">
            <div class="col-lg col-12">{item.name}</div>
            <div class="col-lg col-12">{compIDtoCompName(item.company_id)}</div>
            <div class="col-lg col-12">
              {genName(item.genre_id)}
            </div>
            <div class="col-lg col-12">{item.score}</div>
            <div class="col-lg col-12" style={{ fontSize: 20 }}>
              {item.platforms.toString()}
            </div>
          </div>
        </Link>
      );
    });

  function compIDtoCompName(givenId) {
    for (var i = 0; i < comps.length; i++) {
      if (comps[i].id == givenId) {
        return comps[i].name;
      }
    }
  }

  // get genre name from id
  function genName(id) {
    for (var i = 0; i < gens.length; i++) {
      if (gens[i].id == id) {
        return gens[i].name;
      }
    }
  }

  const pageCount = Math.ceil(games.length / gamesPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };


  function applyFilters(startChar, endChar, startYear, endYear, location, genreID, minGames, maxGames){
    setGames(gameData.filter(function(item){
      var qualifies = true;
      if(startChar && endChar){
        qualifies &= item.name.charAt(0).toLowerCase() >= startChar.toLowerCase() && item.name.charAt(0).toLowerCase() <= endChar.toLowerCase();
      }
      if(startYear && endYear){
        qualifies &= item.year >= startYear && item.year <= endYear;
      }
      if(location){
        qualifies &= item.location.toLowerCase() == location.toLowerCase();
      }
      
      return qualifies;
    }));
  }

  return (
    <div className="page">
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
      <br></br>
      <input type="text" name="search" id="search" placeholder="Game name . . ."></input>
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
              Names (Starting character to ending character, filter by alphabetical order):<br></br>
              <input type="text" name="startChar" id="startChar" placeholder="A" maxlength="1"></input>
              &nbsp;-&nbsp;
              <input type="text" name="endChar" id="endChar" placeholder="Z" maxlength="1"></input>
              <br></br><br></br>
              Year Established:
              <br></br>
              <input type="number" name="startYear" id="startYear" placeholder="Start" maxlength="4"></input>
              &nbsp;-&nbsp;
              <input type="number" name="endYear" id="endYear" placeholder="End" maxlength="4"></input>
              <br></br><br></br>
              Location:&nbsp;
              <input type="text" name="location" id="location" placeholder="Example: USA" maxlength="20"></input>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary" onClick={() => applyFilters(
                document.getElementById("startChar").value,
                document.getElementById("endChar").value,
                document.getElementById("startYear").value,
                document.getElementById("endYear").value,
                document.getElementById("location").value)}>Save changes</button>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="gamelist-select-table">Sort By:</div>
        <select value={selected} onChange={handleSelectChange}>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.text}
            </option>
          ))}
        </select>
        <select value={order} onChange={handleOrderChange}>
          {orders.map((option) => (
            <option key={option.value} value={option.value}>
              {option.text}
            </option>
          ))}
        </select>
      </div>

      <div class="container">
        <div
          class="row bg-dark text-light"
          style={{ opacity: 0.9, borderRadius: 1, textAlign: "center" }}
        >
          <div class="col-lg col-12">Game Title</div>
          <div class="col-lg col-12">Company</div>
          <div class="col-lg col-12">Genre</div>
          <div class="col-lg col-12">Metascore</div>
          <div class="col-lg col-12">Platforms</div>
        </div>
        {displayGames}
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
    </div>
  );
};

export default GameList;
