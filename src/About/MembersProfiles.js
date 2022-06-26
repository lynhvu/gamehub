import "../StyleAndImg/style.css";

const MembersProfiles = (props) => {

    var membersData = require('./membersData.json');
    return (
        <div className="containter">
            <div className="row" style={{margin: "5% 2%"}}>
                {membersData.map(item =>                
                    <div className='col profile-card' id="request-info" onClick={() => showInfo()}>
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
    <div className="row" id="total-stats">
        
        </div>
}
export default MembersProfiles