import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Fuse from 'fuse.js';
import ProductCard from '../components/ProductCard'; // Ensure correct path
import { API_BASE_URL } from '../config';


const SearchResultsPage = () => {
  const { query } = useParams();
  const [allProducts, setAllProducts] = useState([]);
  const [matchedProducts, setMatchedProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch all products from the backend once
    const fetchAllProducts = async () => {
      try {
        const res = await axios.get(`${API_BASE_URL}/api/products`); // Use endpoint that returns all products
        setAllProducts(res.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false);
      }
    };

    fetchAllProducts();
  }, []);

  useEffect(() => {
    if (!loading && allProducts.length > 0) {
      // Set up Fuse.js with desired fields
      const fuse = new Fuse(allProducts, {
        keys: ['name', 'brand', 'category', 'subcategory', 'item'],
        threshold: 0.3, // Adjust sensitivity (lower = stricter, higher = fuzzier)
      });

      const results = fuse.search(query);
      const matched = results.map(result => result.item);
      setMatchedProducts(matched);
    }
  }, [query, allProducts, loading]);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="container mt-4">
      <h2>Search Results for: "{decodeURIComponent(query)}"</h2>
      <div className="row">
        {matchedProducts.length > 0 ? (
          matchedProducts.map(product => (
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
