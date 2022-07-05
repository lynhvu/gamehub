import "../StyleAndImg/style.css";
import "./pag.css";
import React, { useState } from "react";
//import JsonData from "./test.JSON";
import ReactPaginate from "react-paginate";

const Paginate = () => {
  const JsonData = require("./test.json");
  //const [users, setUsers] = useState(JsonData.slice(0, 50));
  const [users, setUsers] = useState(JsonData);
  const [pageNumber, setPageNumber] = useState(0);

  const usersPerPage = 10;
  const pagesVisited = pageNumber * usersPerPage;

  const displayUsers = JsonData.slice(
    pagesVisited,
    pagesVisited + usersPerPage
  ).map((user) => {
    return (
      <div className="row row2">
        <div class="col-lg col-12">{user.id}</div>
        <div class="col-lg col-12">{user.firstName}</div>
        <div class="col-lg col-12">{user.lastName}</div>
        <div class="col-lg col-12">{user.email}</div>
        <div class="col-lg col-12">{user.password}</div>
      </div>
    );
  });

  const pageCount = Math.ceil(users.length / usersPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <div className="container-fluid">
      {displayUsers}
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
  );
};

export default Paginate;
