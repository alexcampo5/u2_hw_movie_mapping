import Movie from "./Movie";

const Genre = (movie) => {
let myColorVariable= ''
switch(movie.genre) {
  case 'Action': 
    myColorVariable = "blue";
    break
case 'Adventure': 
    myColorVariable = "pink";
    break
case 'Animation': 
    myColorVariable = "cyan";
    break
case 'Fantasy': 
    myColorVariable = "green";
    break
case 'Crime': 
    myColorVariable = "orange";
    break
case 'Thriller': 
    myColorVariable = "red";
    break
case 'Science Fiction': 
    myColorVariable = "purple";
    break
case 'Comedy': 
    myColorVariable = "teal";
    break
case 'Drama': 
    myColorVariable = "brown";
    break
case 'Family': 
    myColorVariable = "grey";
    break
case 'Mystery': 
    myColorVariable = "coral";
    break
case 'History': 
    myColorVariable = "gold";
    break
case 'Romance': 
    myColorVariable = "yellow";
    break
case 'Horror': 
    myColorVariable = "red";
    break
}

return (
  <div>
   <p style ={{backgroundColor: myColorVariable, color: "black"}}>
    {movie.genre}
    </p>
  </div>
)
}


export default Genre;