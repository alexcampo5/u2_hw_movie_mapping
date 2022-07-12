import './styles/App.css'
import Genre from './components/Genre'
import Movie from './components/Movie'
import movies from './data/movies.json'

const App = () => {
  console.log(movies)
  return (
    <div className="App">
      <h1>Movie List</h1>
      {movies.map((movie) => (
        <div>
          <Movie
            key={movies.title}
            title={movie.title}
            picture={movie.poster_path}
            release={movie.release_date}
            overview={movie.overview}
          />
          <h3>Genres:</h3>
          {movie.genres.map((currentGenre) => (
            <Genre genre={currentGenre.name} />
          ))}
        </div>
      ))}
    </div>
  )
}

export default App
