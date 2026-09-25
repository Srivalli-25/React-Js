import {useState} from 'react';
import "./Form.css"
export default function Form() {
    const [formData, setFormData]=useState({
        name: "",
        email:"",
        phone:"",
        age:"",
        gender:"",
        city:"",
        address:"",
        password:"",
    });
    const [error, setError] = useState("");
    const [submittedData,setSubmittedData]=useState(null);
    const handleSubmit = (e)=>{
        e.preventDefault();
        if(
            !formData.name||
            !formData.email||
            !formData.phone||
            !formData.age||
            !formData.gender||
            !formData.city||
            !formData.address||
            !formData.password
        ){
            setError("Error !!!!. Please fill all the fields for sucessfull submission.");
            return;
        }
        setError("");
        setSubmittedData(formData);
};
const handleReset = ()=>{
    setFormData({
        name: "",
        email:"",
        phone:"",
        age:"",
        gender:"",
        city:"",
        address:"",
        password:"",
    });
    setSubmittedData(null);
    setError("");
};
return (
    <div className='form-container'>
    <h1 className='form-title'>Registration Form</h1>

    <form onSubmit={handleSubmit}>
        <div className="form-group"><label htmlFor='name'>Name</label>
        <input type="text" value={formData.name}id='name' placeholder='Please enter your name' onChange={(e)=> setFormData({ ...formData, name: e.target.value})} /></div>
        <div className="form-group"><label htmlFor="email">Email</label>
        <input type="text" value={formData.email} id='email' placeholder='Please enter your email' onChange={(e)=> setFormData({ ...formData, email: e.target.value})} /></div>
        <div className="form-group"><label htmlFor="phoneno">Phone Number</label>       
        <input type="text" value={formData.phone} id='phoneno' placeholder='Please enter your phone number' onChange={(e)=> setFormData({ ...formData, phone: e.target.value})}/></div>
        <div className="form-group"><label htmlFor="age">Age</label>
        <input type="text" value={formData.age} id='age' placeholder='Please enter your age' onChange={(e)=> setFormData({ ...formData, age: e.target.value})} /></div>
        <div className="form-group"><label htmlFor="gender">Gender</label>
        <select id='gender' value={formData.gender} onChange={(e)=> setFormData({ ...formData, gender: e.target.value})}>
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
        </select></div>
        <div className="form-group"><label htmlFor="city">City</label>
        <input type="text" value={formData.city} id='city' placeholder='Please enter your city' onChange={(e)=> setFormData({ ...formData, city: e.target.value})}/></div>
        <div className="form-group"><label htmlFor="address">Address</label>
        <textarea value={formData.address} id='address' placeholder='Please enter your address' onChange={(e)=> setFormData({ ...formData, address: e.target.value})}></textarea></div>
        <div className="form-group"><label htmlFor="password">Password</label>
        <input type="password" value={formData.password} id='password' placeholder='Please create your password' onChange={(e)=> setFormData({ ...formData, password: e.target.value})} /></div>
        {error && <p className='error'>{error}</p>}
        <div className="button-group">
        <button type='submit' className='submit-btn'>Submit</button>
        <button type='button' onClick={handleReset} className='reset-btn'>Reset</button>
        </div>
    </form>
    {
        submittedData && ( 
            <div className='submitted-card'>
                <h2>Submitted Data</h2>
                
                <p>Name: {submittedData.name}</p>
                <p>Email: {submittedData.email}</p>
                <p>Phone: {submittedData.phone}</p>
                <p>Age: {submittedData.age}</p>
                <p>Gender: {submittedData.gender}</p>
                <p>City: {submittedData.city}</p>
                <p>Address: {submittedData.address}</p>
                <p>Password: {submittedData.password}</p>
            </div>
        )
    }
    </div>
)
}
