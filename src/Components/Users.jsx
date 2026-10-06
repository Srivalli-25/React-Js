// import {useState}  from 'react';
import {useSearchParams} from 'react-router-dom';
import "./Users.css";

export default function Users() {
    const users = [
        {id:1,name:"Anu",email:"anu@gmail.com",age:21,city:"Kochi"},
        {id:2,name:"Manu",email:"manu@gmail.com",age:23,city:"Pune"},
        {id:3,name:"Fareen",email:"fareen@gmail.com",age:25,city:"Jaipur"},
        {id:4,name:"Aditya",email:"aditya@gmail.com",age:24,city:"Chennai"},
        {id:5,name:"Vikram",email:"vikram@gmail.com",age:22,city:"Bangalore"},
        {id:6,name:"Divya",email:"divya@gmail.com",age:21,city:"Vizag"},
        {id:7,name:"Pooja",email:"pooja@gmail.com",age:20,city:"vijayawada"},
        {id:8,name:"Suresh",email:"suresh@gmail.com",age:24,city:"Hyderabad"},
        {id:9,name:"Varun",email:"varun@gmail.com",age:23,city:"Jaipur"},
        {id:10,name:"Keerthi",email:"keerthi@gmail.com",age:22,city:"Mumbai"},
        {id:11,name:"Manoj",email:"manoj@gmail.com",age:21,city:"Chennai"},
        {id:12,name:"Anjali",email:"anjali@gmail.com",age:22,city:"Mysore"},
        {id:13,name:"Meena",email:"meena@gmail.com",age:23,city:"Kurnool"},
        {id:14,name:"Harika",email:"harika@gmail.com",age:20,city:"Kadapa"},
        {id:15,name:"Sneha",email:"sneha@gmail.com",age:22,city:"Delhi"},
        {id:16,name:"Rahul",email:"rahul@gmail.com",age:24,city:"Agra"},
        {id:17,name:"Swathi",email:"swathi@gmail.com",age:25,city:"kolkata"},
        {id:18,name:"Naveen",email:"naveen@gmail.com",age:22,city:"Thiruvananthapuram"},
        {id:19,name:"Arjun",email:"arjun@gmail.com",age:20,city:"Guntur"},
        {id:20,name:"Kiran",email:"kiran@gmail.com",age:23,city:"Rajahmundry"}
        ]
        const [searchParams, setSearchParams]=useSearchParams();
        const currentPage = Number(searchParams.get("page"))||1;
        const recordsPerPage = 5;
        const startIndex=(currentPage - 1)*recordsPerPage;
        const currentUsers = users.slice(startIndex,startIndex+recordsPerPage);
        const totalPages = Math.ceil(users.length / recordsPerPage);
return (
<div className='users-container'>
    <h1>Users Details</h1>
    <div className='table-container'>
        <table className='users-table'>
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Age</th>
                <th>City</th>
            </tr>
        </thead>
        <tbody>
            {currentUsers.map((user)=>(
                <tr key={user.id}>
                    <td>{user.id}</td>          
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.age}</td>
                    <td>{user.city}</td>
                </tr>
            ))}
        </tbody>
    </table>
    </div>
    <div className='pagination'>
        <button onClick={()=>setSearchParams({page:currentPage - 1})} disabled={currentPage === 1}>Previous</button>
        <span className='page-number'>Page {currentPage} of {totalPages}</span>
        <button onClick={()=>setSearchParams({page:currentPage + 1})} disabled={currentPage === totalPages}>Next</button>
    </div>
</div>
)
}
