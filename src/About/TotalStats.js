import "../StyleAndImg/style.css";

const TotalStats = (props) => {
    var stats = require('./totalStats.json');
    return (   
        <div className="row">
        <div className='card-solid'>
            <div className='col-6'>
                <div className='card-inside'>
                    <p className='text-black-head'>Group Stats</p>
                    <div className='row' style={{margin: "3%"}}>
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
            <div className='col-6 test'>  
                    <a href="#" className="link-style">Postman API</a><br></br>
                    <a href="https://gitlab.com/lynhvu138/cs373-idb/-/issues" className="link-style">GitLab Issue Tracker</a><br></br>
                    <a href="https://gitlab.com/lynhvu138/cs373-idb" className="link-style">GitLab Repo</a><br></br>
                    <a href="https://gitlab.com/lynhvu138/cs373-idb/-/wikis/home" className="link-style">GitLab Wiki</a>
                      
            </div>
        </div>
        </div>
    )
}

export default TotalStats