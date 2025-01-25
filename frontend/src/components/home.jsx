import React from "react";
import "./home.css"
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import apiPath from "./path";
import { useEffect } from "react";
function Home() {
  const navigate = useNavigate();  
  let [user, setUser] = useState("user");
  
 const getUser=async()=>{
  const token=sessionStorage.getItem("token");
  console.log(user);
  
  if (!token) {
    alert("No token found. Redirecting to login.");
    navigate("/login"); 
    return;
  }

  console.log(token);
  try {
   const res = await axios.get(`${apiPath()}/home`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (res.status === 200) {
        console.log(res.data.username);
        const name=res.data.username
        setUser(name);
        
      }
  } catch (error) {
    console.log(error);
    
  }
  
 }

 useEffect(() => {
  getUser();
}, []);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <div className="navbar-brand">MyApp</div>
          <div className="navbar-user" id="nav">
            <div className="photo">
              <img src="" alt="" />
            </div>
            <span className="username">{user ? `Hello, ${user}` : "Loading..."}</span>
           <Link to={"/login"}> <a href="./pages/login.html" className="logout-button">login</a></Link>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Home;
