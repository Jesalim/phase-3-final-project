import React from "react";
import { Link } from "react-router-dom";


function Homepage() {

    return(
        <div className="homenav">
            <nav className="top">
                <Link to="/dashboard">Dashboard</Link>
                <Link to="/registerpage">Sign Up</Link>
                <Link to="/login">Login</Link>
                <Link to="/mymovies">My Movies</Link>
            </nav>
            <h1 className="bottom">Welcome to FilmHub! Here, you'll discover an array of incredible movies to explore and add to your watchlist. We strive to provide the ultimate movie experience and hope you'll thoroughly enjoy every moment of it. Get ready to embark on an exciting journey of cinematic discovery!</h1>
        </div>
    )
}

export default Homepage;