import {useState,useEffect} from 'react';
import {useParams, useNavigate} from 'react-router-dom';
import "./User.css";

export default function UserDetails() {
    const {id}=useParams();
    const navigate = useNavigate();
    const [user, setUsers]=useState(null);
    const [loading,setLoading]=useState(true);
    const [error,setError]=useState("");
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((res)=>{
            if(!res.ok){
                throw new Error("Failed to fetch user details");
            }
            return res.json();
        })
        .then((data)=>{
            setUsers(data);
            setLoading(false);
        })
        .catch((error)=>{
            setError(error.message);
            setLoading(false);
        });
    },[id]);
    if(loading){
        return <p>Loading user details....</p>;
    }
    if(error){
        return <p>{error}</p>;
    }
return (
        <div className='users-container'>
            <h1>User Details</h1>
            <div className='user-card'>
                <h2>{user.name}</h2>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
            <p>Website: {user.website}</p>
            <p>City: {user.address.city}</p>
            <p>Company: {user.company.name}</p>
            <button className='back-button' onClick={()=> navigate("/users")}>Back to Users</button>
            </div>
        </div>
)}
