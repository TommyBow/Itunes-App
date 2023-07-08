import React, { useState } from 'react';
import SearchBar from './SearchBar';
import SearchResult from './SearchResult';
import './App.css';

const App = () => {
  // State variables for search results and favorites
  const [searchResults, setSearchResults] = useState([]);
  const [favorites, setFavorites] = useState([]);

  // Function to handle the search
  const handleSearch = async (query, mediaType) => {
    try {
      const response = await fetch(`/api/search?query=${query}&mediaType=${mediaType}`);
      if (response.ok) {
        const data = await response.json();
        if (data.resultCount > 0) {
          setSearchResults(data.results);
        } else {
          setSearchResults([]);
        }
      } else {
        setSearchResults([]);
      }
    } catch (error) {
      console.error(error);
      setSearchResults([]);
    }
  };

  // Function to add an item to favorites
  const handleAddToFavorites = (item) => {
    setFavorites((prevFavorites) => [...prevFavorites, item]);
  };

  // Function to remove an item from favorites
  const handleRemoveFromFavorites = (item) => {
    setFavorites((prevFavorites) => prevFavorites.filter((fav) => fav !== item));
  };

  // Calculate the number of rows needed based on the number of search results
  const numRows = Math.ceil(searchResults.length / 4);

  // Generate an array of row indexes
  const rowIndexes = Array.from({ length: numRows }, (_, index) => index);

  return (
    <div>
      <nav className="navbar">
        <h1 className="navbar-brand">iTunes Search App</h1>
      </nav>
      
      <SearchBar handleSearch={handleSearch} />

      <h2 className="header2">Search Results:</h2>
      {searchResults.length > 0 ? (
        <div className="search-results-container">
          {rowIndexes.map((rowIndex) => (
            <div key={rowIndex} className="search-results-row">
              {searchResults
                .slice(rowIndex * 4, rowIndex * 4 + 4)
                .map((result, index) => (
                  <SearchResult
                    key={index}
                    result={result}
                    handleAddToFavorites={handleAddToFavorites}
                  />
                ))}
            </div>
          ))}
        </div>
      ) : (
        <p className="par">No search results found.</p>
      )}

      <h2 className="header2">My Favorites:</h2>
      <div className="search-results-container">
        {rowIndexes.map((rowIndex) => (
          <div key={rowIndex} className="search-results-row">
            {favorites
              .slice(rowIndex * 4, rowIndex * 4 + 4)
              .map((favorite, index) => (
                <div key={index} className="search-result-item">
                  <img src={favorite.artworkUrl100} alt={favorite.trackName} />
                  <h3>{favorite.trackName}</h3>
                  <p>{favorite.artistName}</p>
                  <p>{favorite.kind}</p>
                  <button onClick={() => handleRemoveFromFavorites(favorite)}>Remove from Favorites</button>
                </div>
              ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;