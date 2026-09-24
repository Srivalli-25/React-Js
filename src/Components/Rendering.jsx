// import React from 'react'
export default function Rendering({data}) {
return (
    <>
        {data.map((c,i)=>(
            <div className="user-card" key={i}>
            <h2>{c.name}</h2>
            <p>{c.email}</p>
            <p>{c.age}</p>
            <p>{c.city}</p>
            <span className="badge">{c.role}</span>
            </div>
        ))}
    </>
);
}
