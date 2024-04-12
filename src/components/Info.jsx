import React from 'react';

function Info(props){
    return (
        <div>
            <h1>Welcome, you are signed in!</h1>
            <h3>Here are your credentials:</h3>
            <p style={{fontWeight: '700'}}> Role: </p>
            <p> {props.userData.role}</p>
            <p style={{fontWeight: '700'}}> Bearer Token: </p>
            <p> {props.userData.token}</p>
        </div>
    );
};

export default Info;