import {useState, useEffect} from 'react'
import "../StyleAndImg/style.css";
import logo from "../StyleAndImg/logo2.png"
import NavBar from "../components/NavBar";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import MembersProfiles from './MembersProfiles';
import MembersInfo from './MembersInfo';
import TotalStats from './TotalStats';
import BackBtn from '../BackBtn';

const About = (props) => {

    const [data, setData] = useState([{}])
    var members = JSON.parse(localStorage.getItem("COMPANY"));
    useEffect(() => {
        fetch("/profile/").then(
            res => res.json()
        ).then(
            data => {
                setData(data)
                console.log(data)
            }
        )
    }, []);

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
                Meet our members:
            </div>
            <MembersProfiles></MembersProfiles>
            
            <MembersInfo></MembersInfo>
            
            <TotalStats></TotalStats>
            
            <BackBtn></BackBtn>
        </div>
    )
    
}

export default About