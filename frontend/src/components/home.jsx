import React from "react";
import "./home.css"
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import apiPath from "./path";
import { useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 

function Home({setID}){ 
  const navigate = useNavigate();  
  let [user, setUser] = useState(null);
  
 const getUser=async()=>{
  const token=localStorage.getItem("token");
  console.log(user);
  
  if (!token) {
    toast.error('no token found! redirect to login', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });
    setTimeout(() => navigate("/login"), 3000); 
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
        setID(name);
        
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
      <ToastContainer />
      {/* <nav className="navbar">
        <div className="navbar-container">
          <div className="navbar-brand">MyApp</div>
          <div className="navbar-user" id="nav">
            <div className="photo">
              <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="" />
            </div>
            <span className="username">{user ? `Hello, ${user}` : "Loading..."}</span>
           <Link to={"/login"}> <a href="./pages/login.html" className="logout-button">login</a></Link>
          </div>
        </div>
      </nav> */}
    </>
  );
}

export default Home;
