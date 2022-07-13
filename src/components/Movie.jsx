import Genre from './Genre';
import React from 'react'

const Movie = (props) => {
   return (
     <div>
      <h3>{props.title}</h3>
      <h3>Release Date:{props.release}</h3>
      <h3>Overview:{props.overview}</h3>
      <img src={ props.poster}/>
      {props.genres.map((genre)=>{
        return(
        <Genre
        name={genre.name}
        />
        )
      })}
     </div>
   )
 }

export default Movie;