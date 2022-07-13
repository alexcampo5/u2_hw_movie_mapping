import React from 'react'
import Genre from "./Genre"

const Movie = (props) => {
   return (
     <div>
          <h2>{props.title}</h2>
          <h3>{props.releaseDate}</h3>
          <p>{props.overview}</p>
          <img src = {props.image}></img>
          {props.genreMovie.map((genreIndex) => (
                      <Genre 
                      genre ={genreIndex.name}
                      />
          ))

}
          







             {/* <Genre
            key = {props.genreMovie}
            genre = {props.genreMovie[0]}
            /> */}
     </div>
   )
       }

export default Movie