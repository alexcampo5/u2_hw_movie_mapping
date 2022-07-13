import React from 'react'
import Genre from './Genre';
 
const Movie = (props) => {
   return (
     <div>
       <h2>{props.title}</h2>
       <h3>Release Date: {props.release_date}</h3>
       <h3>Overview: {props.overview}</h3>
       {props.genres.map((genre)=>(
        <Genre 
        name = {genre.name}
        />
       ))}
       <img src={props.poster_path}/>
       <hr></hr>
     </div>
   )
 }

export default Movie;