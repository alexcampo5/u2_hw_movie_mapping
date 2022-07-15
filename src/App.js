import "./styles/App.css";
import movieArray from "./data/movies.json";
import Movie from "./components/Movie";
import Genre from "./components/Genre";
const App = () => {
  return (
    <div className="App">
      <h1>Movie List</h1>
      {movieArray.map((movie) => (
        <div>
          <Movie
            key={movie.title}
            title={movie.title}
            release_date={movie.release_date}
            overview={movie.overview}
            poster_path={movie.poster_path}
          />
          {movie.genres.map((genre) => (
            <Genre genre={genre.name} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default App;
