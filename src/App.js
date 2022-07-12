import './styles/App.css'
import movieArray from './data/movies.json'
import Movie from './components/Movie'
import Genres from './components/Genres'

const App = () => {
  return (
    <div className="App">
      <h1>Movie List</h1>
      {movieArray.map((show, index) => (
        <div className="movie-container">
          <Movie
            key={show.adult}
            title={show.title}
            release={show.release_date}
            overview={show.overview}
            image={show.poster_path}
          />
          {show.genres.map((genre, index) => (
            <Genres key={genre.genres} name={genre.name} />
          ))}
        </div>
      ))}
    </div>
  )
}

export default App
