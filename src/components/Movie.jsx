import React from 'react'
import Genre from './Genre';

 
const Movie = ({title, release, overview, image, genres}) => {
    
    return (
     <div>
        <h1>{title}</h1>
        <img src={image}/>
        <h3>Release Date: {release}</h3>
        <p>{overview}</p>
        {genres.map((genre) => {
            return(
<Genre
genre={genre.name} />
            )
        })}
    
     </div>
   )
 };

export default Movie;