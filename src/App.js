import './styles/App.css'
import movieArray from './data/movies.json'
import Movie from './components/Movie'
//import Genres from './components/Genres'

const App = () => {
  return (
    <div className="App">
      <h1>Movie List</h1>
      {movieArray.map((show) => (
        <Movie
          key={show.adult}
          title={show.title}
          release={show.release_date}
          overview={show.overview}
          image={show.poster_path}
          genre={show.genres}
        />
      ))}
    </div>
  )
}

export default App
