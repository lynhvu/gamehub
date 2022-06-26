import "../StyleAndImg/style.css";
import NavBar from "../components/NavBar";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import BackBtn from '../BackBtn';
import MemberInfo from "./MemberInfo";
import GroupStats from "./GroupStats";

const AboutUs = (props) => {
    
    return (
        <div className='page'>
            <link rel="stylesheet" href="style.css" type="text/css" />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
            <link
                href="https://fonts.googleapis.com/css2?family=Space+Mono&display=swap"
                rel="stylesheet"
            />
            <NavBar></NavBar>
            <br />
            <div className="title" style={{ animation: "fadeIn 0.5s" }}>
                About Us
            </div>
            <div className="textbox" style={{ animation: "fadeIn 1.5s" }}>
                We are GameHub developers, a group of CS students at UT Austin.
            </div>
            <div className="textbox" style={{ animation: "fadeIn 2.5s" }}>
                Meet our members
            </div>
            <br></br>
            <MemberInfo></MemberInfo>

            <div className="textbox" style={{ animation: "fadeIn 2.5s" }}>
                Project Info
            </div>
            <GroupStats></GroupStats>
           
            <div className="textbox" style={{ animation: "fadeIn 2.5s" }}>
                APIs
            </div>
            <div className="textbox" style={{ animation: "fadeIn 2.5s" }}>
                Tools
            </div>
            <br></br>
           <BackBtn></BackBtn>
        </div>
    )
    
}

export default AboutUs