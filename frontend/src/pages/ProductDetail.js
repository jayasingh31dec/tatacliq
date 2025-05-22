// // src/pages/ProductDetail.jsx
// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';
// import ProductCard from '../components/ProductCard';

// function ProductDetail() {
//   const { id } = useParams();
//   const [product, setProduct] = useState(null);
//   const [related, setRelated] = useState([]);

//   useEffect(() => {
//     axios.get(`http://localhost:3000/api/products/${id}`)
//       .then(res => {
//         setProduct(res.data);
//         return axios.get(`http://localhost:3000/api/products?brand=${res.data.brand}`);
//       })
//       .then(res => {
//         setRelated(res.data.filter(p => p._id !== id));
//       })
//       .catch(err => console.error("Error fetching product:", err));
//   }, [id]);

//   if (!product) return <div>Loading...</div>;

//   return (
//     <div className="container mt-4">
//       <h2>{product.name}</h2>
//       <img src={product.image} alt={product.name} style={{ width: '100%', maxHeight: '400px', objectFit: 'cover' }} />
//       <p>{product.description}</p>
//       <p><strong>Price:</strong> ₹{product.price}</p>
//       <hr />
//       <h4>Related Products</h4>
//       <div className="row">
//         {related.map((item) => (
//           <div key={item._id} className="col-12 col-sm-6 col-md-4 col-lg-3">
//             <ProductCard product={item} />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default ProductDetail;
