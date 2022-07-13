const Genre = (movie) => {
  let myColorVariable = ''
  switch (movie.name) {
    case 'Action':
      myColorVariable = 'red'
      break
    case 'Adventure':
      myColorVariable = 'orange'
      break
    case 'Animation':
      myColorVariable = 'magenta'
      break
    case 'Comedy':
      myColorVariable = 'yellow'
      break
    case 'Crime':
      myColorVariable = 'green'
      break
    case 'Drama':
      myColorVariable = 'blue'
      break
    case 'Family':
      myColorVariable = 'aqua'
      break
    case 'Fantasy':
      myColorVariable = 'purple'
      break
    case 'Horror':
      myColorVariable = 'black'
      break
    case 'Romance':
      myColorVariable = 'pink'
      break
    case 'Thriller':
      myColorVariable = 'grey'
      break
    case 'Science Fiction':
      myColorVariable = 'navy'
      break
    default:
      myColorVariable = 'white'
  }

  return (
    <div>
      <p
        style={{ backgroundColor: myColorVariable, color: 'rgb(255,255,255)' }}
      >
        {movie.name}
      </p>
    </div>
  )
}
export default Genre
