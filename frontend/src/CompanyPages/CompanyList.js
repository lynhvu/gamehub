import { useState, useEffect } from "react";
import "../StyleAndImg/style.css";
import NavBar from "../components/NavBar";
import ReactPaginate from "react-paginate";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Row, Card, Col, ListGroup, ListGroupItem } from "react-bootstrap";
import BackBtn from "../BackBtn";
import CompSearch from "./searchCompany";


const CompanyList = (props) => {
    var [data, setData] = useState([]) // all companies in dataset
    var [comps, setComps] = useState([]); // cpmpanies to display (filtered)
    const [genreData, setGens] = useState([]);

    useEffect(() => {
        fetch("https://gamehubapi.me/companies/").then(
            res => res.json()
        ).then(
            data => {
                setData(data)
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

 /* var data = require("./companydata.json");*/

  const [pageNumber, setPageNumber] = useState(0);

  const compsPerPage = 9;
  const pagesVisited = pageNumber * compsPerPage;

  const options = [
    { value: "name", text: "Name" },
    { value: "year", text: "Year" },
    { value: "location", text: "Location" },
    { value: "rating", text: "Overall Rating" },
    { value: "games", text: "Top 3 Games" },
  ];
  const [selected, setSelected] = useState(options[0].value);
  const orders = [
    { value: 1, text: "Ascending (A-Z or numerical)" },
    { value: "-1", text: "Descending (Z-A or numerical)" },
  ];
  const [order, setOrder] = useState(orders[0].value);

  const handleSelectChg = (event) => {
    setSelected(event.target.value);
  };

  const handleOrderChg = (event) => {
    setOrder(event.target.value);
  };

  
  function genreName(id){
    for(var i = 0; i < genreData.length; i++){
        if (genreData[i].id == id){
            return genreData[i].name;
        }
    }
}

  sortByProperty();


// search by name, new
function searchFor(term){
  setComps(data.filter(function(item){
     return item.name.toLowerCase().includes(term.toLowerCase()) || item.description.toLowerCase().includes(term.toLowerCase())
  }))
}

function reset(){
  setComps(data);
}


  const displayComps = comps
    .slice(pagesVisited, pagesVisited + compsPerPage)
    .map((item) => {
      return (
        <Col sm={4} style={{marginBottom: '10px'}}>
            <Link to="/companies/comp" className="link-style" onClick={() => {localStorage.setItem("COMPANY", JSON.stringify(item))}} style={{ textDecoration: 'none' }}>
                <Card style={{height: '100%', width: '100%'}}>
                    <Card.Img variant="top" src={item.img} style={{objectFit: 'cover'}}/>
                    <Card.Body>
                        <Card.Title><h1>{item.name}</h1></Card.Title>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroupItem>
                            Year: {item.year}
                        </ListGroupItem>
                        <ListGroupItem>
                            Location: {item.location}
                        </ListGroupItem>
                        <ListGroupItem>
                            Main Genre: {genreName(item.genre_id)}
                        </ListGroupItem>
                        <ListGroupItem>
                            <b>Total Number of Games:</b> {item.num_games}
                        </ListGroupItem>
                    </ListGroup>
                </Card>
            </Link>
        </Col>
      );
    });

  const pageCount = Math.ceil(comps.length / compsPerPage);

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
        Companies
      </div>
      <br></br>
      <input type="text" name="search" id="search" placeholder="Company name . . ."></input>
      <button className="searchbttn" onClick={() => searchFor(document.getElementById("search").value)}>Search</button>
      <button className="searchbttn" onClick={reset}>Reset</button>
      <div id="search-sort">Sort By:</div>
      <select value={selected} onChange={handleSelectChg}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.text}
          </option>
        ))}
      </select>
      <select value={order} onChange={handleOrderChg}>
        {orders.map((option) => (
          <option key={option.value} value={option.value}>
            {option.text}
          </option>
        ))}
      </select>
      <div class="container">
        <Row id="hoverable">
          {displayComps}
        </Row>
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

  function sortByProperty() {
    var objArr = comps;
    var prop = "attributes." + selected;
    var dir = order;

    if (!Array.isArray(objArr)) throw new Error("FIRST ARGUMENT NOT AN ARRAY");

    const clone = objArr.slice(0);
    const propPath = prop.constructor === Array ? prop : prop.split(".");

    clone.sort(function (a, b) {
      for (let p in propPath) {
        if (a[propPath[p]] && b[propPath[p]]) {
          a = a[propPath[p]];
          b = b[propPath[p]];
        }
      }

      return a < b ? -1 * dir : a > b ? 1 * dir : 0;
    });
    // update the data
    comps = clone;
  }
};

export default CompanyList;
