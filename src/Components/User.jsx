import { Link } from 'react-router-dom';
import {useState, useEffect} from 'react';
import "./User.css";
export default function User() {
    const[users,setUsers]=useState([]);
    const[loading,setLoading]=useState(true);
    const[error,setError]=useState("");
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((res)=>{
            if(!res.ok){
                throw new Error("Failed to fetch users");
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
    },[]);
return (
        <div className='users-container'>
            <h1>Users List</h1>
            {loading && <p>Loading Users....</p>}
            {error && <p>{error}</p>}
            {!loading && !error &&(
                <div className='users-grid'>
                    {users.map((user)=>{
                        return(
                        <div className='user-card' key={user.id}>
                            <h2>{user.name}</h2>
                            <p>Email: {user.email}</p>
                            <p>City: {user.address.city}</p>

                            <Link className='details-button' to={`/users/${user.id}`}>
                            View Details
                            </Link>
                        </div>
                    )})}
                </div>
            )}
        </div>
        )}
        