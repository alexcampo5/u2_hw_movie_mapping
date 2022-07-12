import "./styles/App.css";
import movieArray from "./data/movies.json";
import Movie from "./components/Movie.js";
import Genre from "./components/Genre.js";
import MovieItems from "./components/MovieItems.js";

const App = () => {
  return (
    <div className="App">
      <h1>Movie List</h1>
      <MovieItems>
        {movieArray.map((Movie) => (
          <li>
            <Movie>
              key={Movie.title}
              <h3>Title={Movie.title}</h3>
              <h3>Release Date={Movie.releaseDate}</h3>
              <h3>Overview={Movie.overview}</h3>
              <h3>Poster={Movie.pic}</h3>
            </Movie>
            {movieArray.genres.map((Genre) => (
              <Genre genre={Genre.name} />
            ))}
          </li>
        ))}
      </MovieItems>
    </div>
  );
};

export default App;
