import {useState} from 'react';
import {useDispatch} from "react-redux";
import { addFormData } from '../redux/formSlice';
import "./ReduxForm.css";

export default function ComponentA() {
    const dispatch = useDispatch();
    const [formData,setFormData] = useState({
        name:"",
        email:"",
        phone:"",
        city:"",
        role:"",
    });
    const handleChange=(e)=>{
        setFormData({
            ...formData,
            [e.target.name]:e.target.value,
        });
    };
    const handleSubmit = (e)=>{
        e.preventDefault();
        dispatch(addFormData(formData));
        alert("Form submitted successfully!");
        setFormData({
            name:"",
            email:"",
            phone:"",
            city:"",
            role:"",
        });
    };
  return (
    <div className='form-container'>
        <h2>Student Registration</h2>
        <p className='form-subtitle'>Enter your details to register</p>    
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input type="text" id='name' name='name' placeholder='Enter your name' value={formData.name} onChange={handleChange} required/>
            <label htmlFor="email">Email:</label>
            <input type="email" name='email' id='email' placeholder='Enter your email' value={formData.email} onChange={handleChange} required/>
            <label htmlFor="phone">Phone Number:</label>
            <input type="tel" name="phone" id="phone" placeholder='Enter your phone number' value={formData.phone} onChange={handleChange} pattern='[0-9]{10}' title='Enter a 10-digit phone number' required />
            <label htmlFor="city">City:</label>
            <input type="text" name="city" id="city" placeholder='Enter your city' value={formData.city} onChange={handleChange} required />
            <label htmlFor="role">Role:</label>
            <select name="role" id="role" value={formData.role} onChange={handleChange} required>
                <option value="">Select your role</option>
                <option value="Student">Student</option>
                <option value="Frontend Developer">Frontend Developer</option>
                <option value="Backend Developer">Backend Developer</option>
                <option value="Full Stack Developer">Full Stack Developer</option>
            </select>
            <button type='submit' className='submit-btn'>Submit Details</button>
        </form>
    </div>
  )
}
