import './styles/App.css'
import movieArray from './data/movies.json'
import Movie from './components/Movie'
import Genre from './components/Genre'
const App = () => {
  return (
    <div className="App">
      <h1>Movie List</h1>
      {movieArray.map((movie, index) => (
        <Movie
          key={movie.id}
          title={movie.title}
          release={movie.release_date}
          overview={movie.overview}
          poster={movie.poster_path}
          genres={movie.genres}
        />
      ))}
    </div>
  )
}

export default App
