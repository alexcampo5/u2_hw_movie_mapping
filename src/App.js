import './styles/App.css'
import movieArray from './data/movies.json'
import Movie from './components/Movie'
import InputBox from './components/InputBox'


const App = () => {
  const handleClick = () => {
    const submit = document.getElementById('inputbox').value
    console.log(submit)
  }


  return (
    <div className="App">
      <h1>Movie List</h1>
      <InputBox/>
          {
            movieArray.map((movie) => (
              <Movie 
              key={movie.id}
              title={movie.title}
              poster={movie.poster_path}
              genres={movie.genres}
              />
            )
              )
          }
    </div>
  )
}
export default App
