import "../StyleAndImg/style.css";
import logo from "../StyleAndImg/logosmall.png"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useMatch,
    useResolvedPath
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
                    <Link to="/" className="nav-item nav-link">
                        Home
                    </Link>
                    <Link to="/games" className="nav-item nav-link">
                        Games
                    </Link>
                    <Link to="/companies" className="nav-item nav-link">
                        Companies
                    </Link>
                    <Link to="/genres" className="nav-item nav-link">
                        Genres
                    </Link>
                    <Link to="/about" className="nav-item nav-link">
                        About Us
                    </Link>
                </div>
            </div>
        </nav>
    )
}


export default NavBar