import './styles/App.css'
import Movie from './components/Movie'
import moviesData from './data/moviesData.json'

const App = () => {

  return (
    <div className="App">
      <h1>Film List</h1>
          {moviesData.map((movie) => (
            <Movie
              title={movie.title}
              poster={movie.poster_path}
              release={movie.release_date}
              genres={movie.genres}
              rating={movie.vote_average}
              plot={movie.overview}
              key={movie.title}
              />
          ))}
        </div>
  )
}

export default App
