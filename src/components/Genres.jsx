

const Genres = (props) => {
    let genreColor
switch (props.name) {
    case 'Action':
        genreColor = 'blue'
        break
    case 'Adventure':
        genreColor = 'purple'
        break
    case 'Animation':
        genreColor = 'red'
        break
    case 'Comedy':
        genreColor = 'orange'
        break
    case 'Crime':
        genreColor = 'blueviolet'
        break
    case 'Drama':
        genreColor = 'black'
        break
    case 'Family':
        genreColor = 'brown'
        break
    case 'Fantasy':
        genreColor = 'dimgray'
        break
    case 'Horror':
        genreColor = 'orangered'
        break
    case 'Music':
        genreColor = 'steelblue'
        break
    case 'Mystery':
        genreColor = 'darkmagenta'
        break
    case 'Science Fiction':
        genreColor = 'forestgreen'
        break
    case 'Thriller':
        genreColor = 'saddlebrown'
        break
    default:
        genreColor = 'green'
}
    
    return (
        <div>
            <p className='color' style={{ backgroundColor: genreColor, color: 'white' }} >{props.name}</p>
        </div>
    )
}

export default Genres