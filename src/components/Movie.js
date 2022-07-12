const Movie = (props) => {
  return (
    <div>
      <h3>{props.title}</h3>
      <h3>{props.releaseDate}</h3>
      <h3>{props.overview}</h3>
      <img src={props.pic}></img>
    </div>
  );
};
export default Movie;
