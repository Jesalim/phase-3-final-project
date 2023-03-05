import React, { useState} from "react";
import {Link} from "react-router-dom";

import MovieCard from "./moviecard";

function Pages () {

    const [movies, setMovies] = useState([]);
   

 useState(()=>{

    fetch("http://127.0.0.1:9292/")
    .then(response => response.json())
    .then((data)=>{
        console.log(data);
        setMovies(data);
    })


 },[])


return (
    <div><Link to="/homepage"><button class="btn btn-success">Logout</button></Link>
   <div className="container movies">
    
   <span><p className="fs-4 text-white bg-danger">Are you ready to have some fun?Grab your porpcorns and enjoy the show...</p> </span>

    {movies.map(movie => <MovieCard title={movie.title} MovieCard Releaseyear={movie.year}  Description={movie.description}/>)}

   </div>
   </div>
)
}

export default Pages