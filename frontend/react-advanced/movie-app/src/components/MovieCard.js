import React from 'react';

/**
 * Display single movie card
 * @param {Object} movie - Movie object from OMDB API
 */
function MovieCard({ movie }) {
  return (
    <div className="movie-card">
      <img 
        src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/200x300'} 
        alt={movie.Title} 
      />
      <h3>{movie.Title}</h3>
      <p>{movie.Year}</p>
    </div>
  );
}

export default MovieCard;
