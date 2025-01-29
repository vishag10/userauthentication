import React, { useState } from "react";
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import "./App.css";
import Home from "./components/home";
import Login from "./components/login";
import Register from "./components/register";
import Nav from "./components/nav";


function App(){
  const [user,setID]=useState("")
      return(
        <>
          <BrowserRouter>
          {
            user&&<Nav user={user}/>
          }
             <Routes>
             <Route path="/" element={<Home setID={setID}/>} />
             <Route path="/login" Component={Login}  />
             <Route path="/register" Component={Register}  />
             <Route path=""  />
             </Routes>
          </BrowserRouter>
        </>
      )
    }

export default App;
