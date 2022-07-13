import React from 'react'

const Movie = (props) => {
  return (
    <div>
      <h5 className="title">{props.title}</h5>
      <h5 className="release">{props.release}</h5>
      <p><img className='poster' width='75px' height='100px' src={props.image}/>{props.overview}</p>
      
    </div>
  )
}

export default Movie
