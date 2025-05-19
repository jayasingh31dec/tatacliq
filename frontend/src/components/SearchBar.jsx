import React, { useState, useEffect } from 'react';
import './SearchBar.css';
import { useNavigate, useLocation } from 'react-router-dom';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    setQuery('');
  }, [location.pathname]);

  const handleSearch = () => {
    if (!query) return;
    navigate(`/search-results?query=${encodeURIComponent(query)}`);
  };

  return (
    <div className="p-1">
      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Search for products..."
          className="custom-input"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button onClick={handleSearch} className="custom-search-button">
          <i className="bi bi-search"></i>
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
