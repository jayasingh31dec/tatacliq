









import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';

function CategoryPage() {
  const { categoryName } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await fetch(`http://localhost:3000/api/products?section=${categoryName}`);
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error loading products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [categoryName]);

  return (
    <div className="container my-4">
      <h3 className="text-capitalize mb-4">{categoryName} Products</h3>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="row">
          {products.length > 0 ? (
            products.map((product) => (
              <div className="col-md-3 mb-4" key={product._id}>
                <ProductCard product={product} />
              </div>
            ))
          ) : (
            <p>No products found in this section.</p>
          )}
        </div>
      )}
    </div>
  );
}

export default CategoryPage;














