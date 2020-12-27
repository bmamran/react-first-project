import React from 'react';

const Member = (props) => {
    const member =props.member;
    return (
        <div>
            <h4>Member Added : {member.length}</h4>
        </div>
    );
};

export default Member;