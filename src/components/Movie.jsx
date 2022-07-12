import React from 'react'
 
const Movie = (props) => {
   return (
     <div>
      <h3>Title:{props.title}</h3>
      <h3>Release Date:{props.release_date}</h3>
      <h3>Overview:{props.overview}</h3>
      <h3>Poster{props.poster_path}</h3>
     </div>
   )
 };

export default Movie;