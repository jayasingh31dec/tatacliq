import React, { useState } from 'react';
import categories from '../data/categories'; // your existing data

const CategoryLookup = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = () => {
    const lowerQuery = query.toLowerCase();
    const matches = [];

    categories.forEach((category) => {
      Object.entries(category.subcategories).forEach(([subName, items]) => {
        items.forEach((item) => {
          if (item.toLowerCase() === lowerQuery) {
            matches.push({
              section: category.name,
              category: subName,
              subItem: item,
            });
          }
        });
      });
    });

    setResults(matches);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h3>Find Subitem Category (e.g. jeans)</h3>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Enter subitem (e.g. jeans)"
        style={{ padding: '8px', width: '250px' }}
      />
      <button onClick={handleSearch} style={{ marginLeft: '10px', padding: '8px 12px' }}>
        Search
      </button>

      {results.length > 0 ? (
        <div style={{ marginTop: '20px' }}>
          <h4>Found in:</h4>
          <ul>
            {results.map((res, idx) => (
              <li key={idx}>
                <strong>{res.subItem}</strong> → {res.section} &gt; {res.category}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        query && <p style={{ marginTop: '20px', color: 'red' }}>No matches found.</p>
      )}
    </div>
  );
};

export default CategoryLookup;
