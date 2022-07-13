import './styles/App.css';
import movieArray from './data/movies.json';
import MovieItem from './components/MovieItem';

export default function App() {

  return (
    <div className="App">
      <h1 className="sectionTitle">Movie List</h1>
      <div className="moviesContainer">
        {movieArray.map((movie) => (
          <MovieItem
            key={movie.id}
            title={movie.title}
            poster_path={movie.poster_path}
            release_date={movie.release_date}
            genres={movie.genres}
            overview={movie.overview}
          />
        ))

        }
      </div>
    </div>
  );
};