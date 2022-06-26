const MemberInfo = () => {
    var membersData = require('./membersData.json');
    return (
        <div className='container'>
                {membersData.map(item =>
                    <div className='row profile-card' style={{margin:"2%"}}>
                        <div className='col-3 '>
                          
                            <img src={item.picture} alt="Profile Picture"
                                style={{
                                width: 150,
                                borderRadius: "5%",
                                animation: "glowIn 0.5s",
                                boxShadow: "0 0 20px rgba(81, 203, 238, 1)"}}/>
                        </div>
                        <div className='col-5 text-black card-inside '>
                            <p className='text-light-head'>{item.name}</p>
                            <p><b>Responsibility:</b> {item.resp}</p>
                            <p><b>Major:</b> {item.major}</p>
                            <p><b>Year:</b> {item.year}</p>
                            <p>{item.about}</p>

                        </div>
                        <div className='col-3 text-black card-solid'>
                            <p>Commits made: {item.commits}</p>
                            <p>Issues resolved: {item.issues}</p>
                            <p>Unit tests run: {item.tests}</p>
                        </div>      
                    </div>
                )}
            </div>
    )
}

export default MemberInfo