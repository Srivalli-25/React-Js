// import React from 'react'

export default function Login({onLogin}) {
  return (
    <div className="login-container">
      <h1>Login Page</h1>
      <p>Please Login to continue........</p>
      <button className="btn btn-login" onClick={onLogin}>Login</button>
    </div>
  )
}
