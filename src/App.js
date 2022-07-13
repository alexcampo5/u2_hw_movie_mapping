import React from 'react'
import './styles/App.css'
import movieArray from './data/movies.json'
import Movie from './components/Movie'
import Genre from './components/Genre'
// console.log(movieArray)
const App = () => {
  return (
    <div className="App">
      <h1>Movie List</h1>
      <Genre />
      {movieArray.map((movieArray) => (
        <Movie
          key={movieArray.title}
          title={movieArray.title}
          poster={movieArray.poster_path}
          release_date={movieArray.release_date}
          overview={movieArray.overview}
          genres={movieArray.genres}
        />
      ))}
    </div>
  )
}

export default App
