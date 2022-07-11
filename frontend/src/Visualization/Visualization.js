import NavBar from '../components/NavBar';
import { useState, useEffect } from "react";

//https://observablehq.com/@d3/gallery - gallery of possible d3 visualizations

const Visualization = (props) => {

  const [jobs, setJobs] = useState([])
  const [locs, setLocs] = useState([])
  const [comps, setComps] = useState([])

  useEffect(() => {
    fetch("https://idb-3-354621.uc.r.appspot.com/jobs")
      .then((res) => res.json())
      .then((data) => {
        setJobs(data);
        console.log(data);
        console.log(data.length);
      })
      .catch((err) => console.log(err));
    fetch("https://idb-3-354621.uc.r.appspot.com/locations")
      .then((res) => res.json())
      .then((data) => {
        setLocs(data);
        console.log(data);
        console.log(data.length);
      })
      .catch((err) => console.log(err));
    fetch("https://idb-3-354621.uc.r.appspot.com/companies")
      .then((res) => res.json())
      .then((data) => {
        setComps(data);
        console.log(data);
        console.log(data.length);
      })
      .catch((err) => console.log(err));
}, [])
  
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
            Visualizations
          </div>
          <br></br>
          <div className="container">
            <p style={{color: "white"}}>Visualizations go here!</p>
            
          </div>
        </div>)
};

// we willl need titles for each one and maybe a small description of what the chart/diagram is displaying

export default Visualization;
