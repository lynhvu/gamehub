import NavBar from '../components/NavBar';

//https://observablehq.com/@d3/gallery - gallery of possible d3 visualizations

const Visualization = (props) => {
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

export default Visualization;
