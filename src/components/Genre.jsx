const Genre = (props) => {
  let colorVariable
    switch(props.genre) {
      case 'Action':
        colorVariable= "grey"
    break

      case 'Adventure':
        colorVariable="green"
    break

      case 'Animation':
        colorVariable="coral"
    break

      case 'Comedy':
        colorVariable="red"
    break

      case 'Crime':
        colorVariable="pink"
    break

      case 'Documentary':
        colorVariable="purple"
    break

    case 'Family':
      colorVariable="teal"
  break

    case 'History':
      colorVariable="brown"
  break

      case 'Horror':
        colorVariable="orange"
    break

    case 'Fantasy':
      colorVariable="magenta"
  break

      case 'Mystery':
        colorVariable="yellow"
    break

      case 'Romance':
        colorVariable="violet"
    break


      case 'Science Fiction':
        colorVariable="lavender"
    break

      case 'Thriller':
        colorVariable="indigo"
    break

    default:
      colorVariable = "ivory"
    }

  return (
    <div>
      <p style={{backgroundColor: colorVariable, color: '#000000'}} >{props.genre}</p>
    </div>
  )
}

export default Genre