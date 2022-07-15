import React from "react";

const Genre = (props) => {
  let myColorVariable;
  switch (props.genre) {
    case "Action":
      myColorVariable = "red";
      break;
    case "Adventure":
      myColorVariable = "green";
      break;
    case "Thriller":
      myColorVariable = "violet";
      break;
    case "Horror":
      myColorVariable = "navy";
      break;
    case "Fantasy":
      myColorVariable = "skyblue";
      break;
    case "Family":
      myColorVariable = "gold";
      break;
    case "Crime":
      myColorVariable = "grey";
      break;
    case "Science Fiction":
      myColorVariable = "royalblue";
      break;
    case "Animation":
      myColorVariable = "limegreen";
      break;
    case "Comedy":
      myColorVariable = "orange";
      break;
    case "Drama":
      myColorVariable = "pink";
      break;
    case "Music":
      myColorVariable = "silver";
      break;
    case "Mystery":
      myColorVariable = "purple";
      break;
    case "History":
      myColorVariable = "brown";
      break;
    case "Romance":
      myColorVariable = "maroon";
      break;
    case "War":
      myColorVariable = "magenta";
      break;
    case "Tv Movie":
      myColorVariable = "yellow";
      break;
    case "Western":
      myColorVariable = "indigo";
      break;
    case "Documentary":
      myColorVariable = "blue";
      break;
    default:
      myColorVariable = "white";
  }

  return (
    <div>
      <p style={{ backgroundColor: myColorVariable, color: "#000000" }}>
        {props.genre}
      </p>
    </div>
  );
};
export default Genre;
