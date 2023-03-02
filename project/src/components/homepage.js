import React from "react"
import Register from "./register";
import Login from "./login";
import Pages from "./pages";
import { Link, Routes, Route } from "react-router-dom";


function Homepage() {


    return (
        <div >
            <div class="container-lg">
                <p className="fs-4">Its SHOW TIME!!...</p>
                
            </div>

         <Routes> // Using the "Routes" component to define a set of routes
                <Route path="/login" element= {<Login/>}></Route> // Defining a route for the "/login" path that renders the "Login" component
                <Route path="/register" element= {<Register/>}></Route> // Defining a route for the "/register" path that renders the "Register" component
                <Route path="/pages" element= {<Pages/>}></Route> // Defining a route for the "/moviesList" path that renders the "MoviesList" component
            </Routes>
        </div>
    )
}

export default Homepage // Exporting the "Homepage" component as the default export of this module.