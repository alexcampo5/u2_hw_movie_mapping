const Genre = (props) => {

    let myColorVariable;
    switch(props.name) {
      case 'Action': 
        myColorVariable = 'red'
        break
        case 'Adventure': 
        myColorVariable = 'gold'
        break
        case 'Fantasy': 
        myColorVariable = 'aqua'
        break
        case 'Crime': 
        myColorVariable = 'greenyellow'
        break
        case 'Thriller': 
        myColorVariable = 'orchid'
        break
        case 'Science Fiction': 
        myColorVariable = 'green'
        break
        case 'Horror': 
        myColorVariable = 'purple'
        break
        case 'Animation': 
        myColorVariable = 'aquamarine'
        break
        case 'Comedy': 
        myColorVariable = 'orange'
        break
        case 'Drama': 
        myColorVariable = 'grey'
        break
        case 'Family': 
        myColorVariable = 'lavender'
        break
        case 'Music': 
        myColorVariable = 'skyblue'
        break
        case 'Mystery': 
        myColorVariable = 'indigo'
        break
        case 'History': 
        myColorVariable = 'maroon'
        break
        case 'Romance': 
        myColorVariable = 'pink'
        break
        case 'War': 
        myColorVariable = 'blue'
        break
        case 'TV Movie': 
        myColorVariable = 'yellow'
        break
        case 'Western': 
        myColorVariable = 'olive'
        break
        case 'Documentary': 
        myColorVariable = 'tan'
        break
      default:
        myColorVariable = 'white'
    }
  
    return (
      <div>
        {/* // EXAMPLE of inline styling without a variable
        <p style={{ backgroundColor: 'darkslateblue', color: 'rgb(255,255,255)' }} >{props.name}</p>
  
        // EXAMPLE of inline styling WITH a variable */}
        <p style={{backgroundColor: myColorVariable, color: '#000000'}} >{props.name}</p>
      </div>
    )

  
  
}

export default Genre