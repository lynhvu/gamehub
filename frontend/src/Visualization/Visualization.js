import NavBar from '../components/NavBar';
import { useState, useEffect } from "react";

//https://observablehq.com/@d3/gallery - gallery of possible d3 visualizations
//https://recharts.org/en-US/examples

const Visualization = (props) => {

  const [jobs, setJobs] = useState([])
  const jMap = new Map()
  const [locs, setLocs] = useState([])
  const lMap = new Map()
  const [comps, setComps] = useState([])
  const cMap = new Map()

  useEffect(() => {
//    fetch("https://idb-3-354621.uc.r.appspot.com/jobs")
    fetch("http://localhost:5000/jobs/")
      .then((res) => res.json())
      .then((data) => {
        setJobs(data["Jobs"]);
        console.log(data["Jobs"]);
        console.log(data["Jobs"].length);
      })
      .catch((err) => console.log(err));
//    fetch("https://idb-3-354621.uc.r.appspot.com/locations")
    fetch("http://localhost:5000/locs/")
      .then((res) => res.json())
      .then((data) => {
        setLocs(data["Locations"]);
        console.log(data["Locations"]);
        console.log(data["Locations"].length);
      })
      .catch((err) => console.log(err));
//    fetch("https://idb-3-354621.uc.r.appspot.com/companies")
    fetch("http://localhost:5000/comps/")
      .then((res) => res.json())
      .then((data) => {
        setComps(data["Companies"]);
        console.log(data["Companies"]);
        console.log(data["Companies"].length);
      })
      .catch((err) => console.log(err));
}, []);

// function for counting number of jobs per category
function jobData() {
  jobs.map((item) => {
    if (jMap.get(item["category"]) !== undefined) {
      jMap.set(item["category"], (jMap.get(item["category"])) + 1)
    } else {
      jMap.set(item["category"], 1)
    }
  });
};

// function for counting number of jobs per city
function locsData() {
  locs.map((item) => {
    if (lMap.get(item["city"]) !== undefined) {
      lMap.set(item["city"], (lMap.get(item["city"])) + item["jobs"].length)
    } else {
      lMap.set(item["city"], item["jobs"].length)
    }
  });
};

// function for counting number of companies per industry
function compsData() {
  comps.map((item) => {
    if (cMap.get(item["industry"]) !== undefined) {
      cMap.set(item["industry"], (cMap.get(item["industry"])) + 1)
    } else {
      cMap.set(item["industry"], 1)
    }
  });
};

jobData()
locsData()
compsData()
  
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
