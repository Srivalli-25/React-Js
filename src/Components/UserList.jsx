import {useState, useEffect} from 'react';
import "../App.css";

export default function UserList() {
    const[users,setUsers]=useState([]);
    const[loading,setLoading]=useState(true);
    const[error,setError]=useState("");
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((response)=>{
            if(!response.ok){
                throw new Error("Failed to fetch users");
            }
            return response.json();
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
    if(loading){
        return <h2>Loading users....</h2>;
    }
    if(error){
        return <h2>Error: {error}</h2>;
    }
return (
    <div className='user-section'>
    <h2>User Details</h2>
    <div className='user-container'>
        {users.map((user)=>(
        <div className='user-card' key={user.id}>
            <h3>{user.name}</h3>
            <p><b>ID:</b> {user.id}</p>
            <p><b>Username:</b> {user.username}</p>
            <p><b>Email:</b> {user.email}</p>
            <p><b>Phone:</b> {user.phone}</p>
            <p><b>Website:</b> {user.website}</p>
        </div>
    ))}
    </div>
    </div>
)
}
