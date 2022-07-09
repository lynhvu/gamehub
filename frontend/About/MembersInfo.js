import "../StyleAndImg/style.css";

const MembersInfo = (props) => {
    // var stats = require('./membersData.json');
    var stats = require('./totalStats.json');
    var memberInfo = require('./membersData.json')
    return (   
        <div className="row card-solid" id="member-stats" style={{display: "none", margin: "2%"}}>    
            <div className='col'>
                <div className="col">
                    <div className="row" style={{color: "white"}}>
                        <p>Name: {memberInfo.name}</p> 
                        <p>Year: {memberInfo.year}</p>  
                        <p>Major: {memberInfo.major}</p> 
                    </div>
                </div>
                <div className="row" style={{color: "white"}}>
                    <p>Skills: {memberInfo.skills}</p>
                </div>
            </div>
            <div className='col card-inside'>
                <p className='text-black-head'>Stats</p>
                <div className='row' style={{margin: "2%"}}>
                    {stats.map(item =>
                        <div className="col stat-blue"> 
                            <p className="text-light-head">{item.number}</p>
                            <p className="text-circle">{item.type}</p>
                        <br></br>
                        </div>

                    )}
            </div>
                
            </div>
        </div>
    )
}

export default MembersInfo