import React from 'react';
import './Team.css';

const Team = (props) => {
    const {name, id, username, email} = props.team;
    const handleAddTeam = props.handleAddTeam;
    
    return (
        <div className="team-main">
            <h2>Name : {name}</h2>
            <h5>User Name : {username}</h5>
            <h5>ID : {id}</h5>
            <h5>Email : {email}</h5>
            <button onClick={()=> handleAddTeam(name, id)}>Team Member Added</button>
        </div>
    );
};

export default Team;