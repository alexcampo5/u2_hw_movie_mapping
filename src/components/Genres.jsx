// import Movie from './Movie'

const Genres = (props) =>{
// return(
//     <div>
//         {props.name}
//     </div>
// )
let myColorVariable=''
switch(props.name){
    case 'Action':
        myColorVariable='gold'
        break
    case 'Adventure':
        myColorVariable='blue'
        break
    case 'Fantasy':
        myColorVariable='green'
        break
    case 'Crime':
        myColorVariable='red'
        break
    case 'Thriller':
        myColorVariable='orange'
        break
    case 'Science Fiction':
        myColorVariable='purple'
        break
    case 'Horror':
        myColorVariable='pink'
        break
    case 'Animation':
        myColorVariable='aqua'
        break
    case 'Comedy':
        myColorVariable='yellow'
        break
    case 'Drama':
        myColorVariable='grey'
        break
    case 'Family':
        myColorVariable='indigo'
        break
    case 'Music':
        myColorVariable='maroon'
        break
    case 'Mystery':
        myColorVariable='lime'
        break
    case 'History':
        myColorVariable='violet'
        break
    case 'Romance':
        myColorVariable='brown'
        break
    case 'War':
        myColorVariable='magenta'
        break
    case 'TV Movie':
        myColorVariable='seagreen'
        break
    case 'Western':
        myColorVariable='cyan'
        break
    case 'Documentary':
        myColorVariable='coral'
        break
}
    
return (
      <div>
        <p style={{backgroundColor: myColorVariable, color: '#000000'}} >{props.name}</p>
      </div>
    )
}

export default Genres