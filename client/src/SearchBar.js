import React, { useState } from 'react';
import './SearchBar.css';

const SearchBar = ({ handleSearch }) => {
  // State variables for search term and media type
  const [searchTerm, setSearchTerm] = useState('');
  const [mediaType, setMediaType] = useState('all');

  // Event handler for input change
  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Event handler for select change
  const handleSelectChange = (e) => {
    setMediaType(e.target.value);
  };

  // Event handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch(searchTerm, mediaType);
  };

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      {/* Input field for search term */}
      <input
        type="text"
        value={searchTerm}
        onChange={handleInputChange}
        placeholder="Enter search term"
        className="search-bar__input"
      />

      {/* Select dropdown for media type */}
      <select
        value={mediaType}
        onChange={handleSelectChange}
        className="search-bar__select"
      >
        <option value="all">All</option>
        <option value="movie">Movie</option>
        <option value="podcast">Podcast</option>
        <option value="music">Music</option>
        <option value="audiobook">Audiobook</option>
        <option value="shortFilm">Short Film</option>
        <option value="tvShow">TV Show</option>
        <option value="software">Software</option>
        <option value="ebook">Ebook</option>
      </select>

      {/* Button for submitting the form */}
      <button type="submit" className="search-bar__button">Search</button>
    </form>
  );
};

export default SearchBar;
