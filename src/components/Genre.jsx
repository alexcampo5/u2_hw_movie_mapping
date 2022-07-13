const Genre = (props) => {
    let myColorVariable;
    switch(props.name){
        case 'Action':
          myColorVariable= 'purple'
          break
          case 'Adventure':
          myColorVariable= 'blue'
          break
          case 'Fantasy':
          myColorVariable= 'green'
          break
          case 'Thriller':
          myColorVariable= 'pink'
          break
          case 'Horror':
          myColorVariable= 'orange'
          break
          case 'Comedy':
          myColorVariable= 'teal'
          break
          case 'Drama':
          myColorVariable= 'red'
          break
          case 'Family':
          myColorVariable= 'brown'
          break
          case 'Crime':
          myColorVariable= 'DarkGreen'
          break
          case 'Animation':
          myColorVariable= 'LightBlue'
          break
          case 'Mystery':
          myColorVariable= 'lightGreen'
          break
          default: 
          myColorVariable='yellow'
          break
    }    
  return (
        <div>
        <p style={{backgroundColor: myColorVariable, color: '#000000'}} >{props.name}</p>
        </div>
      )
}






export default Genre