import "../StyleAndImg/style.css";
import logo from "../StyleAndImg/logosmall.png"
import sega from "../StyleAndImg/sega.svg"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

const NavBar = () => {
    return (
        
        <nav class="navbar navbar-expand-lg navbar-dark">
            <img src={logo} alt="logo" style={{width: 70, marginLeft:10}}/>
            <a class="navbar-brand" href="#">GameHub</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    <Link to="/">
                        <a class="nav-item nav-link">Home</a>
                    </Link>
                    <Link to="/games">
                        <a class="nav-item nav-link active">Games</a>
                    </Link>
                    <Link to="/companies">
                        <a class="nav-item nav-link">Companies</a>
                    </Link>
                    <Link to="/genres">
                        <a class="nav-item nav-link">Genres</a>
                    </Link>
                    <Link to="/about">
                        <a class="nav-item nav-link">About Us</a>
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default NavBar