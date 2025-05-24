// import React, { useEffect, useState } from 'react';
// import { useLocation } from 'react-router-dom';
// import axios from 'axios';
// import { useCart } from '../contexts/CartContext';
// import { useWishlist } from '../contexts/WishlistContext';
// import './SearchResultsPage.css';
// import { FaHeart, FaShoppingCart } from 'react-icons/fa';




// const SearchResultsPage = () => {
//   const location = useLocation();
//   const query = new URLSearchParams(location.search).get("query");
//   const [results, setResults] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const { addToCart } = useCart();
//   const { addToWishlist } = useWishlist();

//   useEffect(() => {
//     const fetchResults = async () => {
//       if (!query) return;
//       setLoading(true);
//       try {
//         const res = await axios.get(`http://localhost:3000/api/products/search?query=${query}`);
//         setResults(res.data);
//       } catch (error) {
//         console.error("Search failed:", error);
//       }
//       setLoading(false);
//     };

//     fetchResults();
//   }, [query]);

//   const handleAddToCart = (item) => {
//     const itemWithQuantity = { ...item, quantity: 1 };
//     addToCart(itemWithQuantity);
//     alert("Item added to cart!");
//   };

//   const handleAddToWishlist = (item) => {
//     addToWishlist(item);
//     alert("Item added to wishlist!");
//   };

//   return (
//     <div className="p-4">
//       <h2>Search Results for: "{query}"</h2>
//       {loading && <p>Loading...</p>}
//       {!loading && results.length === 0 && <p>No products found.</p>}
//       <div className="search-results">
//         {results.map((product) => (
//           <div key={product._id} className="product-card">
//             <div className="product-image-container">
//               <img
//                 src={product.image}
//                 alt={product.name}
//                 className="product-image"
//               />
//             </div>
//             <div className="product-info">
//               <h2>{product.name}</h2>
//               <p>Brand: {product.brand}</p>
//               <p>₹{product.price}</p>
//               <p>{product.category}</p>



//               <div className="product-buttons">
//   <button onClick={() => handleAddToWishlist(product)} title="Add to Wishlist">
//     <FaHeart />
//   </button>
//   <button onClick={() => handleAddToCart(product)} title="Add to Cart">
//     <FaShoppingCart />
//   </button>
// </div>




//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default SearchResultsPage;



















import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import ProductCard from '../components/ProductCard';
import './SearchResultsPage.css';

const SearchResultsPage = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("query");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchResults = async () => {
      if (!query) return;
      setLoading(true);
      try {
        const res = await axios.get(`http://localhost:3000/api/products/search?query=${query}`);
        setResults(res.data);
      } catch (error) {
        console.error("Search failed:", error);
      }
      setLoading(false);
    };

    fetchResults();
  }, [query]);

  return (
    <div className="p-4">
      <h2>Search Results for: "{query}"</h2>
      {loading && <p>Loading...</p>}
      {!loading && results.length === 0 && <p>No products found.</p>}
      <div className="row">
        {results.map((product) => (
          <div key={product._id} className="col-md-4 mb-4">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchResultsPage;

















