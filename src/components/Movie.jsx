import React from 'react'
import Genre from './Genre'
const Movie = (props) => {
  // console.log(props.title)
  return (
    <div>
    <h3>Title: {props.title}</h3>
    <h3>Release Date: {props.release_date}</h3>
    <h3>Overview: {props.overview}</h3>
    {props.genres.map((genres) => (
      <Genre
      name = {genres.name}
      />
    ))}
    <img src={props.poster_path}/>
    </div>
  )
  }
  

export default Movie