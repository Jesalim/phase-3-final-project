import React from "react"
import Register from "./register";
import Login from "./login";
import Pages from "./pages";
import MovieCard from "./moviecard";
import {Routes, Route } from "react-router-dom";
import Navbar from "./navbar";

function Homepage() {

 
       

    return (
        <div >
            <Navbar/>
            <div className="container-lg">
                <p className="fs-4">ITS SHOW TIME!!...</p>
                
            </div>

         <Routes>
                <Route path="/login" element= {<Login/>}></Route> 
                <Route path="/register" element= {<Register/>}></Route> 
                <Route path="/" element= {<Pages/>}></Route> 
                <Route path="/moviecard" element= {<MovieCard/>}></Route> 
            </Routes>
        </div>
    )
}

export default Homepage // Exporting the "Homepage" component as the default export of this module.