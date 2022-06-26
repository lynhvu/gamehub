import "../StyleAndImg/style.css";

const TotalStats = (props) => {
    var stats = require('./totalStats.json');
    return (   
        <div className="row card-solid" id="total-stats">    
            <div className='col'>
                <div className='card-inside'>
                    <p className='text-black-head'>Group Stats</p>
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
            <div className='col center'>
            <p className='text-black-head'>Links</p>  
                    <a href="#" className="link-style-light">Postman API</a><br></br>
                    <a href="https://gitlab.com/lynhvu138/cs373-idb/-/issues" className="link-style-light">GitLab Issue Tracker</a><br></br>
                    <a href="https://gitlab.com/lynhvu138/cs373-idb" className="link-style-light">GitLab Repo</a><br></br>
                    <a href="https://gitlab.com/lynhvu138/cs373-idb/-/wikis/home" className="link-style-light">GitLab Wiki</a>
                      
            </div>
        </div>
    )
}

export default TotalStats