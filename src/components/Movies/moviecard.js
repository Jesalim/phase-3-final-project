import React from 'react';

const MovieCard = ({ title, image, Releaseyear, Description }) => {
  return (
    <div className="movie-card">
      <img src={image} alt={title} />
      <div className="movie-info">
        <h2>{title}</h2>
        <p>Releaseyear: {Releaseyear}</p>
        <p>Description: {Description}</p>
      </div>
    </div>
  );
};

export default MovieCard;
