
const Genre = (props) => {
  let myColorVariable;
  switch (props.name) {
    case 'Action':
      myColorVariable = "red";
      break;
    case 'Adventure':
      myColorVariable = "yellow";
      break;
    case 'Fantasy':
      myColorVariable = "green";
      break;
    case 'Crime':
      myColorVariable = "orange";
      break;
    case 'Thriller':
      myColorVariable = "grey"
      break;
    default:
      myColorVariable = "aqua";
  }
  return (
    <div>
      <p style={{ backgroundColor: myColorVariable, color: '#000000' }} >{props.name}</p>
    </div>
  )
}
export default Genre