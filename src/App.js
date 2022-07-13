import './styles/App.css'
import movieArray from './data/movies.json'
import Movie from './components/Movie'

const App = () => {
  return (
    <div className="App">
      <h1>Movie List</h1>
      <div>
        {movieArray.map((movie) => (
          <div key={movie.title}>
            <Movie
              title={movie.title}
              overview={movie.overview}
              release={movie.release_date}
              image={movie.poster_path}
              genres={movie.genres}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
