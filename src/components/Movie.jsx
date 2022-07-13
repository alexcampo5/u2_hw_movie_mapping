import Genre from "./Genre"

const Movie = (props) => {
  return (
    <div className="movie">
      <h2>{props.title}</h2>
      <img className="img" src={props.poster} />
      <h4>{props.overview}</h4>
      {props.genres.map((genre) => (
        <Genre
          key={genre.id}
          name={genre.name}
        />
      ))}
    </div>
  )
}

export default Movie 