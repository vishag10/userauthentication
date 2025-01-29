import React from "react";
import "./home.css"
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Nav({user}){
    const logOut=()=>{
        localStorage.removeItem("token");
       window.location.reload();
    }
    return(
        <>
          <nav className="navbar">
            <div className="navbar-container">
              <div className="navbar-brand">MyApp</div>
              <div className="navbar-user" id="nav">
                <div className="photo">
                  <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="" />
                </div>
                <span className="username">{user ? `Hello, ${user}` : "Loading..."}</span>
               {
                user?<Link to={"/login"} className="logout-button" onClick={logOut}>logout</Link>:<Link to={"/login"} className="logout-button" >login</Link>
               }
              </div>
            </div>
          </nav>
        </>
      );
}
export default Nav;