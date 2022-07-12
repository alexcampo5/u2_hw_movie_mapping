import "./styles/App.css";
import movies from "./data/movies.json";
import Movie from "./components/Movie";
import Genre from "./components/Genre";
const App = () => {
  return (
    <div className="App">
      <h1 className="App-logo App-link ">Movie List</h1>
      {movies.map((data) => (
        <div className="App-header">
          <Movie
            key={data.id}
            title={data.title}
            release={data.release_date}
            overview={data.overview}
            photo={data.poster_path}
          />
          {data.genres.map((genre) => (
            <Genre type={genre.name} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default App;
