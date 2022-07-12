export default function Genre(props){
  let colorVariable = null
  if(props.genre == 'Action'){
    colorVariable = 'red'
  }else if (props.genre == 'Adventure'){
    colorVariable = 'blue'
  }else if (props.genre == 'Fantasy'){
    colorVariable = 'yellow'
  }else if (props.genre == 'Crime'){
    colorVariable = 'orange'
  }else if (props.genre == 'Thriller'){
    colorVariable = 'olive'
  }else if (props.genre == 'Science Fiction'){
    colorVariable = 'lightblue'
  }else if (props.genre == 'Horror'){
    colorVariable = 'pink'
  }else if (props.genre == 'Comedy'){
    colorVariable = 'purple'
  }else if (props.genre == 'Drama'){
    colorVariable = 'indigo'
  }else if (props.genre == 'Family'){
    colorVariable = 'yellowgreen'
  }else if (props.genre == 'Music'){
    colorVariable = 'cyan'
  }else if (props.genre == 'Mystery'){
    colorVariable = 'darkgreen'
  }else if (props.genre == 'Animation'){
    colorVariable = 'forestgreen'
  }else if (props.genre == 'Romance'){
    colorVariable = 'darkred'
  }else{
    colorVariable = 'black'
  }
  return(
    <div>
      <p style={{backgroundColor: colorVariable, color: "black"}} >{props.genre}</p>
    </div>
  )
  }

