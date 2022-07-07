import "../StyleAndImg/style.css";
import NavBar from "../components/NavBar";
import { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import BackBtn from "../BackBtn";

const GameList = (props) => {
  var [gameData, setData] = useState([])
  const [games, setGames] = useState([])

  const [comps, setComps] = useState([])

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
    var objArray = gameData;
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
    gameData = clone;
  }

  sortByProperty();

  const displayGames = gameData
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
              TEMP
            </div>
            <div class="col-lg col-12">{item.score}</div>
            <div class="col-lg col-12" style={{ fontSize: 20 }}>
              {item.platforms}
            </div>
          </div>
        </Link>
      );
    });

  function compIDtoCompName(givenId){
      for(var i = 0; i < comps.length; i++) {
          if(comps[i].id == givenId){
            return comps[i].name;
          }
      }
  }

  const pageCount = Math.ceil(games.length / gamesPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

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
