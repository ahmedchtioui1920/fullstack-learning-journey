import React, { useState } from 'react';

/**
 * SearchBar Component
 * Allows user to type a movie name and trigger search
 * @param {Function} onSearch - Callback function from App to perform search
 */
function SearchBar({ onSearch }) {
  const [query, setQuery] = useState(''); // Track user input

  /**
   * Handle form submission
   * Prevents page reload and calls the onSearch function
   * @param {Event} e - Form submit event
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmedQuery = query.trim();

    // Only search if input is not empty
    if (trimmedQuery !== '') {
      onSearch(trimmedQuery);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Input field for movie name */}
      <input
        type="text"
        placeholder="Search movies..."
        value={query}
        onChange={(e) => setQuery(e.target.value)} // Update query state
      />
      {/* Submit button */}
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchBar;
