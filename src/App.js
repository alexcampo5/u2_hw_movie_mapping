import './styles/App.css'
import movieArray from './data/movies.json'
import Movie from './components/Movie'

const App = () => {
  return (
    <div className="App">
      <h1>Movie List</h1>
      <div>
        {movieArray.map((result) => (
          <div class="moviess">
            <Movie
              key={result.video}
              title={result.original_title}
              release={result.release_date}
              overview={result.overview}
              picture={result.poster_path}
              genres={result.genres}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
