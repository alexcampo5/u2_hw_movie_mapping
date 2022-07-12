const Movie = (props) => {
  const colorMap = new Map()
  colorMap.set('Action', 'blue')
  colorMap.set('Adventure', 'red')
  colorMap.set('Fantasy', 'pink')
  colorMap.set('Crime', 'orange')
  colorMap.set('Thriller', 'green')
  colorMap.set('Science Fiction', 'purple')
  colorMap.set('Horror', 'bisque')
  colorMap.set('Animation', 'cyan')
  colorMap.set('Comedy', 'lime')
  colorMap.set('Drama', 'gray')
  colorMap.set('Family', 'fuchsia')
  colorMap.set('Music', 'brown')
  colorMap.set('History', 'silver')
  colorMap.set('TV Movie', 'plum')
  colorMap.set('War', 'maroon')
  colorMap.set('Romance', 'deeppink')
  colorMap.set('Mystery', 'khaki')
  colorMap.set('Mystery', 'khaki')

  //   let myColorVariable
  //   switch (props.genre) {
  //   }
  const { title, poster_path, generes } = props
  return (
    <div id="eachMovie">
      <img src={poster_path} alt="" />
      <h2>{title}</h2>
      <div key={title}>
        <div id="genreaDisplay">
          {generes.map((genere) => (
            <span
              id="genera"
              style={{
                backgroundColor: colorMap.get(genere.name),
                color: 'white'
              }}
            >
              {genere.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Movie
