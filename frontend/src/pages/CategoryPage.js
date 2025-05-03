import React from 'react';
import { useParams } from 'react-router-dom';

function CategoryPage() {
  const { categoryName } = useParams();

  // Dummy products – aap yeh data backend/API se bhi laa sakte ho
  const products = [
    { id: 1, name: 'Product 1', category: 'women', price: 999, image: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Product 2', category: 'women', price: 799, image: 'https://via.placeholder.com/150' },
    { id: 3, name: 'Product 3', category: 'men', price: 499, image: 'https://via.placeholder.com/150' },
    { id: 4, name: 'Product 4', category: 'electronics', price: 1999, image: 'https://via.placeholder.com/150' },
  ];

  // Filter products based on categoryName from URL
  const filteredProducts = products.filter(p => p.category.toLowerCase() === categoryName.toLowerCase());

  return (
    <div className="container my-4">
      <h3 className="text-capitalize mb-4">{categoryName} Products</h3>
      <div className="row">
        {filteredProducts.map(product => (
          <div className="col-md-3 mb-4" key={product.id}>
            <div className="card h-100 shadow-sm">
              <img src={product.image} className="card-img-top" alt={product.name} />
              <div className="card-body text-center">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">₹{product.price}</p>
              </div>
            </div>
          </div>
        ))}
        {filteredProducts.length === 0 && (
          <p>No products found in this category.</p>
        )}
      </div>
    </div>
  );
}

export default CategoryPage;




// ye first card ke liy detal rkhta hai