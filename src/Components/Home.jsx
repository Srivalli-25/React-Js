// import React from 'react'

export default function Home({onLogout}) {
  return (
    <div className="login-container">
      <h1>Welcome Home</h1>
      <p>You are sucessfully logged in...</p>
      <button className="btn btn-logout" onClick={onLogout}>Logout</button>
    </div>
  )
}
