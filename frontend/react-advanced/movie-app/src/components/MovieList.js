import React from 'react';
import MovieCard from './MovieCard';

/**
 * MovieList Component
 * Renders a list of movies using MovieCard component
 * @param {Array} movies - Array of movie objects from OMDB API
 */
function MovieList({ movies }) {
  // If there are no movies, show a message
  if (!movies || movies.length === 0) {
    return <p>No movies found.</p>;
  }

  return (
    <div className="movie-list">
      {movies.map((movie) => (
        // Each movie card needs a unique key for React
        <MovieCard key={movie.imdbID} movie={movie} />
      ))}
    </div>
  );
}

export default MovieList;
