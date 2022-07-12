const Genre=(props)=>{
let myColorVariable;
switch(props.genre) {
  case 'action': 
    myColorVariable = '#ff7676 '
    break
  default:
    myColorVariable = '#f7f7f7'
}
<div>
genre: {props.genres}
</div>
return (
  
  <div>
    // EXAMPLE of inline styling without a variable
    <p style={{ backgroundColor: 'darkslateblue', color: 'rgb(255,255,255)' }} >{props.genre}</p>

    // EXAMPLE of inline styling WITH a variable
    <p style={{backgroundColor: myColorVariable, color: '#000000'}} >{props.something}</p>
  </div>
)
}
export default Genre