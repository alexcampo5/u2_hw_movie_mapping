import React from 'react'

const Movie = (props) => {
  return (
    <div>
      <h5 className="title">{props.title}</h5>
      <h5 className="release">{props.release}</h5>
      <p className="overview">{props.overview}</p>
        <img className="poster" src={props.image} />
    </div>
  )
}

export default Movie
