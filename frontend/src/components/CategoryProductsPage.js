import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { categoryProductList } from './categoryProductList'; // Adjust path if needed
import ProductCard from '../components/ProductCard';
import './CategoryProductsPage.css'; 

function CategoryProductsPage() {
  const { categorySlug, subCategory, item } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // ✅ Console log to check URL params
    console.log("Params from URL:", categorySlug, subCategory, item);

    async function fetchProducts() {
      setLoading(true);
      setError(null);
      try {
        const data = await categoryProductList({
          category: categorySlug,
          subcategory: subCategory,
          item: item,
        });
        setProducts(data);
      } catch (err) {
        setError(err.message || 'Failed to load products');
      } finally {
        setLoading(false);
      }
    }
    fetchProducts();
  }, [categorySlug, subCategory, item]);

  if (loading) return <p>Loading products...</p>;
  if (error) return <p style={{ color: 'red' }}>{error}</p>;
  if (products.length === 0) return <p>No products found.</p>;

  return (
    <div>
      <h2>
        Products: {categorySlug} / {subCategory} / {item}
      </h2>
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default CategoryProductsPage;
