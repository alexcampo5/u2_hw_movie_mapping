import './styles/App.css'
import MovieRight from './components/MovieRight'
import MovieLeft from './components/MovieLeft'
import MovieItem from './components/MovieItem'
import moviesData from './data/moviesData.json'

const App = () => {

  return (
    <div className="App">
      <MovieLeft />
      <MovieRight>  
        <ul>
          {moviesData.map((movie) => (
            <li>
              <h2>Title: {movie.title}</h2>
              <h4>Genre: {movie.genres.name}</h4>
              <h4>Rating: {movies.vote_average}</h4>
              <h4>Plot: {movies.overview}</h4>
            </li>
          ))}
        </ul>
      </MovieRight>
    </div>
  )
}

export default App
