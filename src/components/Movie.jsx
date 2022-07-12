import Genre from './Genre'

const Movie = (props) => {
  return (
    <div>
      {props.genres.map((genre) => (
        <Genre 
        genre={genre.name}
        />
      ))}
      <h1>Title:{props.title}</h1>
      <h3>Release date:{props.release}</h3>
      <p>Overview:{props.overview}</p>
      <img src={props.picture}/>
    </div>
  )
}
export default Movie