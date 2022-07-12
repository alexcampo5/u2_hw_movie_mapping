import './styles/App.css'
import movieArray from './data/movies.json'
import Movie from './components/movie'

movieArray.map((movie) => {
  console.log(movie)
})

const App = () => {
  return (
    <div className="App">
      <h1>Movie List</h1>
      <div id="main">
        {movieArray.map((movie) => (
          <Movie
            title={movie.title}
            poster_path={movie.poster_path}
            generes={movie.genres}
          />
        ))}
      </div>
    </div>
  )
}

export default App
