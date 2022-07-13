import React from 'react';
import Genre from './Genre';

export default function MovieItem(props) {
  return (
    <div className="MovieItem">
      <h2 className="movieTitle">{props.title}</h2>
      <p className="date">{props.release_date}</p>
      <img src={props.poster_path} />
      <div className="genreContainer">
        {props.genres.map((genre) => (
          <Genre
            key={genre.id}
            name={genre.name}
          />
        ))}
      </div>
      <p className="overview">{props.overview}</p>
    </div>
  );
}