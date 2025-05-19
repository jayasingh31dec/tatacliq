import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ProductCard from '../components/ProductCard'; // Make sure path is correct

const SearchResultsPage = () => {
  const { query } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSearchResults = async () => {
      try {
        const res = await axios.get(`http://localhost:3000/api/products/search?query=${query}`);
        setProducts(res.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching search results:", error);
        setLoading(false);
      }
    };

    fetchSearchResults();
  }, [query]);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="container mt-4">
      <h2>Search Results for: "{decodeURIComponent(query)}"</h2>
      <div className="row">
        {products.length > 0 ? (
          products.map(product => (
            <div className="col-md-3 mb-4" key={product._id}>
              <ProductCard product={product} />
            </div>
          ))
        ) : (
          <p>No products found for "{decodeURIComponent(query)}".</p>
        )}
      </div>
    </div>
  );
};

export default SearchResultsPage;
