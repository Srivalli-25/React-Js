// import React from 'react'
import Rendering from "./Rendering"
export default function ListRendering() {
    const data = [
        {
            name: "Ravi",
            email: "ravi@gmail.com",
            age: 25,
            city: "Hyderabad",
            role: "Developer"
        },
        {
            name: "Sri",
            email: "sri@gmail.com",
            age: 20,
            city:"Chennai",
            role: "Tester"
        },
        {
            name:"Rahul",
            email:"rahul@gmail.com",
            age:23,
            city:"Pune",
            role:"Manager"
        },
        {
            name:"Sita",
            email:"sita@gmail.com",
            age:21,
            city:"Bangalore",
            role:"HR"
        },
        {
            name:"Seema",
            email:"seema@gmail.com",
            age:19,
            city:"Visakhapatnam",
            role:"Designer"
        }
    ]
return (
    <div className="datacontainer">
        <Rendering data={data}/>
    </div>
)
}
