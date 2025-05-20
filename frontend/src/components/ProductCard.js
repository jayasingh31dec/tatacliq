import React from 'react';
import { Link } from 'react-router-dom';
import ProductButtonCard from './ProductButtonCard'; // 🔁 Make sure this path is correct

function ProductCard({ product }) {
  console.log(" ProductCard rendered with:", product);

  return (
    <div className="card h-100 shadow-sm position-relative" style={{ cursor: 'pointer' }}>
      {/* Image + Link */}
      <Link
        to={`/product/${product._id}`}
        style={{ textDecoration: 'none', color: 'inherit' }}
      >
        <img
          src={product.image}
          alt={product.name || 'Product'}
          onError={(e) => e.target.src = '/fallback.jpg'}
          className="card-img-top"
          style={{ height: '370px', objectFit: 'cover', width: '100%' }}
        />

        {/* Product details */}
        <div className="card-body">
          <h5 className="card-title">{product.name}</h5>
          <p className="card-text text-success fw-bold">₹{product.price}</p>
          <p className="card-text"></p>









          {/* 📝 Description */}
          {product.description && (
            <p className="card-text" style={{ fontSize: '14px', color: '#333' }}>
  {product.description.slice(0, 60)}...
</p>

          )}




        </div>
      </Link>

      {/* 🖤 Wishlist + 🛒 Cart Icons */}
      <div className="position-absolute top-0 end-0 m-2">
        <ProductButtonCard product={product} />
      </div>
    </div>
  );
}

export default ProductCard;
