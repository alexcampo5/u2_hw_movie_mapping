import React from "react";
const Movie = (props) => {
  return (
    <div>
      <ul>
        <h1>Movie: {props.title}</h1>
        <h3>Release Date: {props.release_date}</h3>
        <h4>Discription: {props.overview}</h4>
        <img src={props.poster_path} alt="" />
      </ul>
    </div>
  );
};

export default Movie;
