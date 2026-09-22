// import React from 'react'

export default function Child(props) {
return (
    <div className="user-card">
        <h3>{props.name}</h3>
        <p>City:{props.city}</p>
        <p>Age:{props.age}</p>
        <p>Email:{props.email}</p>
        <p>Phone Number:{props.phoneno}</p>
    </div>
);
}
