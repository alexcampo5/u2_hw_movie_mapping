const Genre = (props) => {
  let colorVar;
  switch (props.genre) {
    case "Crime":
    case "Drama":
      colorVar = "grey";
      break;
    case "Action":
      colorVar = "red";
    case "Science Fiction":
      colorVar = "green";
    case "Horror":
      colorVar = "black";
      break;
    default:
      break;
  }
  return (
    <div>
      <p style={{ backgroundColor: colorVar, color: "white" }}>{props.genre}</p>
    </div>
  );
};
export default Genre;
