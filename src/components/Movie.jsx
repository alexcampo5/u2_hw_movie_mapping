import Genre from "./Genre"

const Movie = ({title, poster, release, genres, rating, plot}) => {
  return (
    <div>
              <h2>{title}</h2>
              <img src={poster} alt="poster"/>
              <h4>Rating: {rating}</h4>
              <h4>Release: {release}</h4>
              <h4>{plot}</h4>
              {genres.map((genre) => {
                return (
                  <Genre 
                    genre={genre.name} />
                  )
                })}
              </div>
              )
            }       
export default Movie