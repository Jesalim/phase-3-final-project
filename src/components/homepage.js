import React from "react"
import Register from "./register";
import Login from "./login";
import Pages from "./pages";
import { Link, Routes, Route } from "react-router-dom";


function Homepage() {


    return (
        <div >
            <div class="container-lg">
                <p className="fs-4">ITS SHOW TIME!!...</p>
                
            </div>

         <Routes>
                <Route path="/login" element= {<Login/>}></Route> 
                <Route path="/register" element= {<Register/>}></Route> 
                <Route path="/pages" element= {<Pages/>}></Route> 
            </Routes>
        </div>
    )
}

export default Homepage // Exporting the "Homepage" component as the default export of this module.