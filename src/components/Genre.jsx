const Genre = (props) => {
  let myColorVariable 
  switch (props.genre) {
    case "Action": 
    myColorVariable ='skyblue'
    break
    case "Drama":
    myColorVariable ='yellow'
    break
    case "Horror":
    myColorVariable = 'red'
    break
    default:
    myColorVariable = 'aqua'
  }
  return (
    <div>
    <p style={{backgroundColor: myColorVariable, color: '#000000'}} >{props.genre}</p>
    </div>
  )
    }


export default Genre