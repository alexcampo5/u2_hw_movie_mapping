import Genre from './Genre'


const Movie = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <h3>{props.overview}</h3>
      <h5>Release Date: {props.releaseDate}</h5>
      {props.genres.map((genre)=>{
        return (
          <Genre 
          name={genre.name}
          />
        )
      })}
      <img src={props.poster}/>
    </div>
  )
}



export default Movie