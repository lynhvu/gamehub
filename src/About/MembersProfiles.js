import "../StyleAndImg/style.css";
import MembersInfo from "./MembersInfo";
import {useState, useEffect} from 'react'

const MembersProfiles = (props) => {

    var membersData = require('./membersData.json');
    return (
        <div className="containter">
            <div className="row" style={{margin: "5% 2%"}}>
                {membersData.map(item =>                
                    <div className='col profile-card' id="request-info" onClick={showInfo}>
                        <img
                        src={item.picture}
                        alt="Profile Picture"
                        style={{
                            width: 150,
                            borderRadius: "5%",
                            animation: "glowIn 0.5s",
                            boxShadow: "0 0 20px rgba(81, 203, 238, 1)"
                        }}
                        />
                        <p className='text'>{item.name}</p>
                    </div>
                )}
            </div>    
        </div>
    )
}
function showInfo(id) {
    
    document.getElementById("member-stats").style.display = "block";
    document.getElementById("total-stats").style.display = "none";
}



export default MembersProfiles