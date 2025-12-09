import React from 'react';
import { useCart } from '../contexts/CartContext';
import { useWishlist } from '../contexts/WishlistContext';

function ProductButtonCard({ product }) {
  const { addToCart } = useCart();
  const { addToWishlist } = useWishlist();

  return (
    <div style={{ display: 'flex', gap: '8px' }}>
     <button
  onClick={() => addToWishlist(product)}
  className="btn btn-light p-1"
  style={{ backgroundColor: 'white', border: '1px solid #ccc', color: 'black' }}
>
  <i className="bi bi-heart"></i>
</button>
<button
  onClick={() => addToCart(product)}
  className="btn btn-light p-1"
  style={{ backgroundColor: 'white', border: '1px solid #ccc', color: 'black' }}
>
  <i className="bi bi-cart"></i>
</button>

    </div>
  );
}

export default ProductButtonCard;
