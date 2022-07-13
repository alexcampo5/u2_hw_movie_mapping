import Genres from './Genres'

const Movie = (props) => {
  return (
    <div>
      <h3>{props.title}</h3>
      <img src={props.poster}></img>
      {props.genres.map((genre) => (
        <Genres key={genre.id} genre={genre.name} />
      ))}
      <h5>Release Date: {props.releaseDate}</h5>
      <p>{props.overview}</p>
    </div>
  )
}

export default Movie
