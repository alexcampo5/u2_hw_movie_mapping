export default function Genre(props) {
  let colorVariable;
  switch (props.type) {
    case "Action":
      colorVariable = "red";
      break;
    case "Thriller":
      colorVariable = "orange";
      break;
    case "Comedy":
      colorVariable = "yellow";
      break;
    case "Fantasy":
      colorVariable = "purple";
      break;
    case "Crime":
      colorVariable = "green";

      break;
    case "Horror":
      colorVariable = "blue";
      break;
    case "Science Fiction":
      colorVariable = "grey";
      break;
    case "Drama":
      colorVariable = "white";
      break;
    case "Music":
      colorVariable = "brown";
      break;
    case "Family":
      colorVariable = "lime";
      break;
    case "Adventure":
      colorVariable = "teal";
      break;
    case "Animation":
      colorVariable = "aqua";
      break;
    default:
      break;
  }

  return (
    <div>
      {/* // EXAMPLE of inline styling without a variable
      <p
        style={{ backgroundColor: "darkslateblue", color: "rgb(255,255,255)" }}
      >
        {props.genre}
      </p> */}
      {/* // EXAMPLE of inline styling WITH a variable */}
      <p style={{ backgroundColor: colorVariable, color: "#000000" }}>
        {props.type}
      </p>
    </div>
  );
}
