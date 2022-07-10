import NavBar from '../components/NavBar';
import { useState, useEffect } from "react";

//https://observablehq.com/@d3/gallery - gallery of possible d3 visualizations

const Visualization = (props) => {

  const [songs, setSongs] = useState([])
  const [albums, setAlbums] = useState([])
  const [artists, setArtists] = useState([])

  useEffect(() => {
    fetch("https://cs373-idb-backend.uc.r.appspot.com/songs/")
      .then((res) => res.json())
      .then((data) => {
        setSongs(data);
        console.log(data);
        console.log(data.length);
      })
      .catch((err) => console.log(err));
    fetch("https://cs373-idb-backend.uc.r.appspot.com/albums/")
      .then((res) => res.json())
      .then((data) => {
        setAlbums(data);
        console.log(data);
        console.log(data.length);
      })
      .catch((err) => console.log(err));
    fetch("https://cs373-idb-backend.uc.r.appspot.com/artists/")
      .then((res) => res.json())
      .then((data) => {
        setArtists(data);
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
