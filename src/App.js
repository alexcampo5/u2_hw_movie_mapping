import './styles/App.css'
import movieArray from './data/movies.json'
import Movie from './components/Movie'

//
console.log(movieArray[0].genres)
const App = () => {
  return (
    <div lassName="App">
      <h1>Movie List</h1>
      {movieArray.map((movie, index) => (
        <Movie
          key={movie.title}
          title={movie.title}
          releaseDate={movie.release_date}
          overview={movie.overview}
          image={movie.poster_path}
          genreMovie={movie.genres} //might need to say which index
        />
      ))}
    </div>
  )
}

export default App
