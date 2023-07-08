import React from 'react';
import './SearchResult.css';

// SearchResult component receives the result object and a callback function to handle adding to favorites
const SearchResult = ({ result, handleAddToFavorites }) => {
  const { artworkUrl100, trackName, artistName, kind } = result;

  // Function to handle adding the result to favorites
  const handleAddFavorite = () => {
    handleAddToFavorites(result);
  };

  // Render the SearchResult component with the result data and the add to favorites button
  return (
    <div className="search-result">
      <img src={artworkUrl100} alt={trackName} />
      <h3>{trackName}</h3>
      <p>{artistName}</p>
      <p>{kind}</p>
      <button onClick={handleAddFavorite}>Add to Favorites</button>
    </div>
  );
};

export default SearchResult;
