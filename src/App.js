import './styles/App.css'
import movieArray from './data/movies.json'
import Movie from './components/Movie'
// console.log(movieArray)

const App = () => {
  return (
    <div className="App">
      <h1>Movie List</h1>
      {movieArray.map((movie) => (
        <div className="movies" key={movie.id}>
          <Movie
            title={movie.title}
            poster={movie.poster_path}
            genres={movie.genres}
            releaseDate={movie.release_date}
            overview={movie.overview}
          />
        </div>
      ))}
    </div>
  )
}

export default App
