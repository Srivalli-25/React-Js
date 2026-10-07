import useFetchData from "../Hooks/useFetchData";
import "./Users1.css";

export default function Users1() {
    const {data,loading,error}=useFetchData("https://jsonplaceholder.typicode.com/users");
    if(loading){
        return <h2 className="status">Loading...</h2>;
    }
    if(error){
        return <h2 className="status-error">{error}</h2>
    }
return (
<div className="users-container">
    <h1>Users List</h1>
    <div className="users-grid">
        {data.map((user)=>(
            <div className="user-card" key={user.id}>
                <h2>{user.name}</h2>
                <p><strong>ID:</strong>{user.id}</p>
                <p><strong>Username:</strong>{user.username}</p>
                <p><strong>Email:</strong>{user.email}</p>
                <p><strong>Phone:</strong>{user.phone}</p>
                <p><strong>Website:</strong>{user.website}</p>
                <p><strong>City:</strong>{user.address.city}</p>
            </div>
        ))}
    </div>    
</div>
)
}
