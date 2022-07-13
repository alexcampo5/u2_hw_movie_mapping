import Genre from './Genre'

const Movie = (props) => {
  return (
    <div>
      <h1>Title: {props.title}</h1>
      <img src={props.image} alt="poster" />
      <h2>Release Date: {props.release}</h2>
      <p>Overview: {props.overview}</p>
      {props.genres.map((genre) => {
        return <Genre name={genre.name} />
      })}
    </div>
  )
}
export default Movie
