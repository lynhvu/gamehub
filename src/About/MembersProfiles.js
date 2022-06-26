import logo from "../StyleAndImg/logo2.png";
import linh from "../StyleAndImg/profile-pics/linh.JPG";

const MembersProfiles = (props) => {

    var membersData = require('./membersData.json');
    return (
        <div className="row">
            {membersData.map(item => 
                <div className='col'>
                    <img
                    src={item.picture}
                    alt="logo"
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
    )
}

export default MembersProfiles