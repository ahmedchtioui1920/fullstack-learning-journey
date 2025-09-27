import React, { useState } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import MovieList from './components/MovieList';

/**
 * Main App component for Movie Search App
 */
function App() {
  const [movies, setMovies] = useState([]); // Store movies from API

  /**
   * Fetch movies from OMDB API based on query
   * @param {string} query - Movie search text
   */
  const handleSearch = async (query) => {
    try {
      const response = await fetch(`http://www.omdbapi.com/?s=${query}&apikey=d9d5456`);
      const data = await response.json();
      if (data.Search) {
        setMovies(data.Search);
      } else {
        setMovies([]);
      }
    } catch (error) {
      console.error('Error fetching movies:', error);
      setMovies([]);
    }
  };

  return (
    <div>
      <h1>🎬 Movie Search App</h1>
      <SearchBar onSearch={handleSearch} />
      <MovieList movies={movies} />
    </div>
  );
}

export default App;
