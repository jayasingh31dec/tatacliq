import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { API_BASE_URL } from '../config';

function BrandSubcategoryProducts() {
  const { brandSlug, subSlug } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFilteredProducts = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/api/products?brand=${brandSlug}&subcategory=${subSlug}`);

        

        if (!response.ok) {
          throw new Error('Failed to fetch filtered products');
        }
        const data = await response.json();
        setProducts(data);
      } catch (err) {
        console.error(err);
        setError('Could not load filtered products');
      } finally {
        setLoading(false);
      }
    };

    fetchFilteredProducts();
  }, [brandSlug, subSlug]);

  if (loading) return <div className="text-center mt-5">Loading products...</div>;
  if (error) return <div className="text-danger text-center mt-5">{error}</div>;

  return (
    <div className="container mt-4">
      <h3 className="mb-4 text-capitalize">{brandSlug} → {subSlug}</h3>
      <div className="row">
        {products.map((product) => (
          <div key={product._id} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default BrandSubcategoryProducts;
