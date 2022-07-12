const Genre = (props) => {
let genreColor;
switch(props.genre){
  case 'Action': genreColor = 'yellow'
  break;
  case 'Adventure': genreColor = 'red';
  break;
  case 'Fantasy': genreColor = 'pink';
  break;
  case 'Crime': genreColor = 'blue'
  break;
  case 'Thriller': genreColor = 'green'
  break;
  case 'Science Fiction': genreColor = 'orange'
  break;
  case 'Horror': genreColor = 'gray'
  break;
  case 'Animation': genreColor = 'teal'
  break;
  case 'Comedy': genreColor = 'yellowgreen'
  break;
  case 'Drama' : genreColor = 'greenyellow'
  break;
  case 'Family': genreColor = 'darkblue'
  break;
  case 'Music': genreColor = 'lightblue'
  break;
  default: genreColor = 'purple;'
}
  return (
  <div>
    <p style={{backgroundColor: genreColor}}>{props.genre}</p>
  </div>
)
}
export default Genre