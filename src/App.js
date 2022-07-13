import './styles/App.css'
import movieArray from './data/movies.json'
import Movie from './components/Movie'

const App = () => {
  return (
    <div className="App">
      <h1>Movie List</h1>
      <ul>
        {movieArray.map((movie) => (
          <Movie
            key={movie.id}
            title={movie.title}
            release_date={movie.release_date}
            overview={movie.overview}
            poster_path={movie.poster_path}
            genres={movie.genres}
          />
        ))}
      </ul>
    </div>
  )
}

export default App
