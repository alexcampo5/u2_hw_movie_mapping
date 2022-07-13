const Genre=(props)=>{
let myColorVariable;

switch(props.name) {
  case 'Action': 
    myColorVariable = '#5B507A'
    break
    case 'Adventure': 
    myColorVariable = '#5B618A'
    break
    case 'Fantasy': 
    myColorVariable = '#9EADC8'
    break
    case 'Crime': 
    myColorVariable = '#B9E28C'
    break
    case 'Thriller': 
    myColorVariable = '#D6D84F'
    break
    case 'Horror': 
    myColorVariable = '#DDDAE7'
    break
    case 'Science Fiction': 
    myColorVariable = '#9CA1BF'
    break
    case 'Animation': 
    myColorVariable = '#33415B'
    break
    case 'Comedy': 
    myColorVariable = '#87CE3B'
    break
    case 'Drama': 
    myColorVariable = '#E8E99B'
    break
    case 'Music': 
    myColorVariable = '#36304A'
    break
    case 'Family': 
    myColorVariable = '#848AAE'
    break
    case 'Fantasy': 
    myColorVariable = '#E5E9F0'
    break

  default:
    myColorVariable = 'E5E9F0'
}


return (
  
  <div>
  <p style={{backgroundColor: myColorVariable, color: '#000000'}} >{props.name}</p>
  </div>
)
}
export default Genre