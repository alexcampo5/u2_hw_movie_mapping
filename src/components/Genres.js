const Genres = (movie) => {
  let myColorVariable = ''
  switch (movie.genre) {
    case 'Action':
      myColorVariable = 'crimson'
      break
    case 'Adventure':
      myColorVariable = 'blue'
      break
    case 'Fantasy':
      myColorVariable = 'palegreen'
      break
    case 'Crime':
      myColorVariable = 'red'
      break
    case 'Thriller':
      myColorVariable = 'maroon'
      break
    case 'Science Fiction':
      myColorVariable = 'coral'
      break
    case 'Horror':
      myColorVariable = 'orangered'
      break
    case 'Animation':
      myColorVariable = 'plum'
      break
    case 'Comedy':
      myColorVariable = 'paleturquoise'
      break
    case 'Drama':
      myColorVariable = 'royalblue'
      break
    case 'Family':
      myColorVariable = 'yellowgreen'
      break
    case 'Music':
      myColorVariable = 'orchid'
      break
    case 'Mystery':
      myColorVariable = 'sienna'
      break
    case 'History':
      myColorVariable = 'tan'
      break
    case 'Romance':
      myColorVariable = 'pink'
      break
    case 'Documentary':
      myColorVariable = 'teal'
      break
    case 'War':
      myColorVariable = 'indianred'
      break
    case 'TV Movie':
      myColorVariable = 'olive'
      break
  }
  return (
    <div>
      <p style={{ backgroundColor: myColorVariable, color: '#000000' }}>
        {movie.genre}
      </p>
    </div>
  )
}

export default Genres
