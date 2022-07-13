import './styles/App.css'
import Movie from './components/Movie'
import movieArray from './data/movies.json'


const App = () => {
  return (
    <div className="App">
      <h1>Movie List</h1>
      <div>
     {movieArray.map((movie) => (
      <div class="box" key={movie.id}>
        <Movie
        key={movie.title}
        title={movie.title}
        image={movie.poster_path}
        release={movie.release_date}
        overview={movie.overview}
        genres={movie.genres}
        />
      </div>
      ))} 
      </div>
    </div>
  );
}

export default App;
