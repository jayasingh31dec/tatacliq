import React from 'react';
import { Link } from 'react-router-dom';

function ProductCard({ product }) {
  return (
    <Link
      to={`/product/${product._id}`}  // Assuming you're using MongoDB `_id`
      style={{ textDecoration: 'none', color: 'inherit' }}
    >
      <div className="card h-100 shadow-sm" style={{ cursor: 'pointer' }}>
        <img
          src={product.image}
          alt={product.name || 'Product'}
          onError={(e) => e.target.src = '/fallback.jpg'}
          className="card-img-top"
          style={{ height: '370px', objectFit: 'cover', width: '100%' }}
        />
        <div className="card-body">
          <h5 className="card-title">{product.name}</h5>
          <p className="card-text">₹{product.price}</p>
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;
