// import React from "react";
import APPcom from "./Components/ListRendering";
import Login from './Components/Login';
import Home from './Components/Home'
  let isLoggedIn =true;
export default function App() {
  function login(){
    isLoggedIn =true;
  }
  function logout(){
    isLoggedIn=false;
  }
  return(
    <div className="app-container">
      {isLoggedIn ? <Home onLogout={logout} /> : <Login onLogin={login} /> }
      <APPcom />
    </div>
  )
}
