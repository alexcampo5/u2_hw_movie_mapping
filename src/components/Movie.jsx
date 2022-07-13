import React from 'react'
import Genres from './Genres'
 
const Movie = (props) => {
   return (
     <div>
       
       <h2>Title: {props.title}</h2>
       <h3>Release Date: {props.release}</h3>
       <p>Overview: {props.overview}</p>
       {props.genres.map((genre)=>{
        return(
            <Genres
                name={genre.name}
        />

       )})}
       <img src={props.image} />
     </div>
   )
 };

export default Movie;