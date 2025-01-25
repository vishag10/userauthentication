import React from "react";
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import "./App.css";
import Home from "./components/home";
import Login from "./components/login";
import Register from "./components/register";


function App(){
      return(
        <>
          <BrowserRouter>
             <Routes>
             <Route path="/" Component={Home} />
             <Route path="/login" Component={Login}  />
             <Route path="/register" Component={Register}  />
             <Route path=""  />
             </Routes>
          </BrowserRouter>
        </>
      )
    }

export default App;
