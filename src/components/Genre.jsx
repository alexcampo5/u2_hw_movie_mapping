import React from 'react'

const Genre = (props) => {
let myColorVariable;
switch(props.genre) {
  case 'Action': 
    myColorVariable = "red"
    break
    case 'Adventure': 
    myColorVariable = "purple"
    break
    case 'Fantasy': 
    myColorVariable = "green"
    break
    case 'Crime': 
    myColorVariable = "orange"
    break
    case 'Thriller': 
    myColorVariable = "yellow"
    break
    case 'Science Fiction': 
    myColorVariable = "lightsalmon"
    break
    case 'Horror': 
    myColorVariable = "mediumslateblue"
    break
    case 'Animation': 
    myColorVariable = "greenyellow"
    break
    case 'Comedy': 
    myColorVariable = "indigo"
    break
    case 'Drama': 
    myColorVariable = "navy"
    break
    case 'Family': 
    myColorVariable = "lightskyblue"
    break
    case 'Music': 
    myColorVariable = "orchid"
    break
    case 'Mystery': 
    myColorVariable = "darkolivegreen"
    break
    case 'History': 
    myColorVariable = "brown"
    break
    case 'Romance': 
    myColorVariable = "pink"
    break
    case 'War': 
    myColorVariable = "darkgoldenrod"
    break
    case 'TV Movie': 
    myColorVariable = "firebrick"
    break

  default:
    myColorVariable = 'grey'
}


return (
  <div>
    <p style={{backgroundColor: myColorVariable, color: '#000000'}} >{props.genre}</p>
  </div>
)
}

export default Genre;