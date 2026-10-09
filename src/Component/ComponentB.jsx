import {useSelector} from 'react-redux'
import './ReduxForm.css'

export default function ComponentB() {
    const formData = useSelector((state)=>state.form.formData);
  return (
    <div className='records-container'>
      <h2>Registered Users</h2>
      <p className='form-subtitle'>View all submitted details</p>
      {formData.length === 0 ? (
        <p className='empty-message'>
            No records yet. Submit the form to see details here!
            </p>
      ):(
        <div className='records-list'>
            {formData.map((user,index)=>(
                <div className="user-card" key={index}>
                    <div className="user-card-header">
                        <h3>{user.name}</h3>
                        <span className='role-badge'>{user.role}</span>
                    </div>
                    <p><strong>Email:</strong>{user.email}</p>
                    <p><strong>Phone:</strong>{user.phone}</p>
                    <p><strong>City:</strong>{user.city}</p>
                </div>
            ))}
        </div>
      )}
      <p className='record-count'>Total Registered Users: {formData.length}</p>
    </div>
  );
}
