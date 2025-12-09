import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

// function ParticularBrandCardPageDetail() {
//   const { id } = useParams(); // URL se product id milega
//   const [product, setProduct] = useState(null);
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   useEffect(() => {
//     console.log("Fetching product data for ID:", id);//// <- Add this
//     const fetchProduct = async () => {
//       try {
//         const res = await axios.get(`http://localhost:3000/api/products/${id}`); 
//         console.log("Product fetched successfully:", res.data); //// <- Add this
//         setProduct(res.data);
//       } catch (err) {
//         console.error('Failed to load product:', err);
//       }
//     };

//     fetchProduct();
//   }, [id]);console.log("Component rendered with product:", product); // <- Add this outside useEffect

//   if (!product) return <p>Loading...</p>;

//   return (
//     <div style={{ padding: "20px" }}>
//       <h2>{product.name}</h2>

//       {/* Image section */}
//       <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
//         <img
//           src={product.images?.[currentImageIndex] || product.image}
//           alt="Main Product"
//           style={{
//             width: "400px",
//             height: "400px",
//             objectFit: "cover",
//             borderRadius: "10px",
//             border: "1px solid #ccc"
//           }}
//         />
        
//         <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
//           {product.images?.map((img, index) => (
//             <img
//               key={index}
//               src={img}
//               alt={`Thumbnail ${index}`}
//               onClick={() => setCurrentImageIndex(index)}
//               style={{
//                 width: "80px",
//                 height: "80px",
//                 objectFit: "cover",
//                 border: currentImageIndex === index ? "2px solid #000" : "1px solid #ccc",
//                 cursor: "pointer",
//                 borderRadius: "5px",
//               }}
//             />
//           ))}
//         </div>
//       </div>

//       {/* Product Details */}
//       <div style={{ marginTop: "30px" }}>
//         <p><strong>Descriptionpppppppppppp:</strong> {product.description}</p>

//         <p>
//           <strong>Price:</strong>{" "}
//           {product.discountPrice ? (
//             <>
//               <span style={{ textDecoration: "line-through", color: "#888" }}>₹{product.price}</span>
//               &nbsp;
//               <span style={{ fontWeight: "bold", color: "green" }}>₹{product.discountPrice}</span>
//               &nbsp;
//               {product.discountPercent && (
//                 <span style={{ color: "red" }}>({product.discountPercent}% OFF)</span>
//               )}
//             </>
//           ) : (
//             <span style={{ fontWeight: "bold" }}>₹{product.price}</span>
//           )}
//         </p>

//         <p style={{ color: product.outOfStock ? 'red' : 'green' }}>
//           {product.outOfStock ? 'Out of Stock' : 'In Stock'}
//         </p>

//         <p><strong>Rating:</strong> {product.rating ? `${product.rating} / 5` : "No rating yet"}</p>
//       </div>
//     </div>
//   );
// }

// export default ParticularBrandCardPageDetail;













































// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';

// function ParticularBrandCardPageDetail() {
//   const { id } = useParams();
//   const [product, setProduct] = useState(null);
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   useEffect(() => {
//     const fetchProduct = async () => {
//       try {
//         const res = await axios.get(`http://localhost:3000/api/products/${id}`);
//         setProduct(res.data);
//       } catch (err) {
//         console.error('Failed to load product:', err);
//       }
//     };
//     fetchProduct();
//   }, [id]);

//   if (!product) return <p>Loading...</p>;

//   return (
//     <div style={{ display: "flex", gap: "40px", padding: "20px" }}>
//       {/* Left Side: Image and Thumbnails */}
//       <div>
//         <img
//           src={product.images?.[currentImageIndex] || product.image}
//           alt="Main Product"
//           style={{
//             width: "400px",
//             height: "400px",
//             objectFit: "cover",
//             borderRadius: "10px",
//             border: "1px solid #ccc"
//           }}
//         />
//         <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
//           {product.images?.map((img, index) => (
//             <img
//               key={index}
//               src={img}
//               alt={`Thumbnail ${index}`}
//               onClick={() => setCurrentImageIndex(index)}
//               style={{
//                 width: "80px",
//                 height: "80px",
//                 objectFit: "cover",
//                 border: currentImageIndex === index ? "2px solid #000" : "1px solid #ccc",
//                 cursor: "pointer",
//                 borderRadius: "5px",
//               }}
//             />
//           ))}
//         </div>
//       </div>

//       {/* Right Side: Product Info */}
//       <div style={{ flex: 1 }}>
//         <h2>{product.name}</h2>

//         {/* Price */}
//         <p>
//           <strong>Price:</strong>{" "}
//           {product.discountPrice ? (
//             <>
//               <span style={{ textDecoration: "line-through", color: "#888" }}>₹{product.price}</span>{" "}
//               <span style={{ fontWeight: "bold", color: "green" }}>₹{product.discountPrice}</span>{" "}
//               {product.discountPercent && (
//                 <span style={{ color: "red" }}>({product.discountPercent}% OFF)</span>
//               )}
//             </>
//           ) : (
//             <span style={{ fontWeight: "bold" }}>₹{product.price}</span>
//           )}
//         </p>

//         {/* Stock Info */}
//         <p style={{ color: product.outOfStock ? 'red' : 'green' }}>
//           {product.outOfStock ? 'Out of Stock' : 'In Stock'}
//         </p>

//         {/* Rating */}
//         <p><strong>Rating:</strong> {product.rating ? `${product.rating} / 5` : "No rating yet"}</p>

//         {/* Size Selector */}
//         <div style={{ margin: "20px 0" }}>
//           <strong>Select Size:</strong>
//           <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
//             {["UK 6", "UK 7", "UK 8", "UK 9", "UK 10"].map((size, index) => (
//               <button key={index} style={{
//                 padding: "10px 15px",
//                 border: "1px solid #ccc",
//                 borderRadius: "4px",
//                 backgroundColor: "#fff",
//                 cursor: "pointer"
//               }}>
//                 {size}
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Offers Section */}
//         <div style={{ margin: "20px 0" }}>
//           <strong>Available Offers:</strong>
//           <ul>
//             <li>10% off on HDFC cards | Min. ₹5000</li>
//             <li>15% Cashback on BoB Credit Cards | Min. ₹3000</li>
//             <li>Flat ₹100 off on ₹4999+ using MEGAOFF</li>
//             <li>Buy 2 Get 1 Free on select Adidas items</li>
//           </ul>
//         </div>

//         {/* Delivery Section */}
//         <div style={{ margin: "20px 0" }}>
//           <strong>Delivery to:</strong> 110001 (Delhi)<br />
//           <span style={{ color: 'green' }}>Delivery by 24th May</span> | <span>Cash on Delivery Available</span>
//         </div>

//         {/* Buttons */}
//         <div style={{ display: "flex", gap: "20px", marginTop: "30px" }}>
//           <button style={{
//             padding: "12px 25px",
//             backgroundColor: "#ff3e6c",
//             color: "white",
//             border: "none",
//             borderRadius: "4px",
//             cursor: "pointer"
//           }}>
//             Buy Now
//           </button>
//           <button style={{
//             padding: "12px 25px",
//             backgroundColor: "#fff",
//             border: "1px solid #ccc",
//             borderRadius: "4px",
//             cursor: "pointer"
//           }}>
//             Add to Bag
//           </button>
//         </div>

//         {/* Description */}
//         <div style={{ marginTop: "30px" }}>
//           <p><strong>Description:</strong> {product.description}</p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ParticularBrandCardPageDetail;















// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';

// function ParticularBrandCardPageDetail() {
//   const { id } = useParams();
//   const [product, setProduct] = useState(null);
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   useEffect(() => {
//     const fetchProduct = async () => {
//       try {
//         const res = await axios.get(`http://localhost:3000/api/products/${id}`);
//         setProduct(res.data);
//       } catch (err) {
//         console.error('Failed to load product:', err);
//       }
//     };

//     fetchProduct();
//   }, [id]);

//   if (!product) return <p>Loading...</p>;

//   return (
//     <div style={{ padding: "30px", maxWidth: "1200px", margin: "auto" }}>
//       <h2 style={{ marginBottom: "20px" }}>{product.name}</h2>

//       {/* Two Column Layout */}
//       <div style={{ display: "flex", gap: "40px" }}>
//         {/* Left Column - Images */}
//         <div style={{ flex: 1 }}>
//           <img
//             src={product.images?.[currentImageIndex] || product.image}
//             alt="Main Product"
//             style={{
//               width: "100%",
//               height: "400px",
//               objectFit: "cover",
//               borderRadius: "10px",
//               border: "1px solid #ccc"
//             }}
//           />
//           <div style={{
//             display: "flex",
//             gap: "10px",
//             marginTop: "10px",
//             flexWrap: "wrap"
//           }}>
//             {product.images?.map((img, index) => (
//               <img
//                 key={index}
//                 src={img}
//                 alt={`Thumbnail ${index}`}
//                 onClick={() => setCurrentImageIndex(index)}
//                 style={{
//                   width: "80px",
//                   height: "80px",
//                   objectFit: "cover",
//                   border: currentImageIndex === index ? "2px solid #000" : "1px solid #ccc",
//                   cursor: "pointer",
//                   borderRadius: "5px"
//                 }}
//               />
//             ))}
//           </div>
//         </div>

//         {/* Right Column - Details */}
//         <div style={{ flex: 1 }}>
//           {/* Description */}
//           <p><strong>Description:</strong> {product.description}</p>

//           {/* Price */}
//           <p>
//             <strong>Price:</strong>{" "}
//             {product.discountPrice ? (
//               <>
//                 <span style={{ textDecoration: "line-through", color: "#888" }}>₹{product.price}</span>
//                 &nbsp;
//                 <span style={{ fontWeight: "bold", color: "green" }}>₹{product.discountPrice}</span>
//                 &nbsp;
//                 {product.discountPercent && (
//                   <span style={{ color: "red" }}>({product.discountPercent}% OFF)</span>
//                 )}
//               </>
//             ) : (
//               <span style={{ fontWeight: "bold" }}>₹{product.price}</span>
//             )}
//           </p>

//           {/* Stock Status */}
//           <p style={{ color: product.outOfStock ? 'red' : 'green' }}>
//             {product.outOfStock ? 'Out of Stock' : 'In Stock'}
//           </p>

//           {/* Rating */}
//           <p><strong>Rating:</strong> {product.rating ? `${product.rating} / 5` : "No rating yet"}</p>

//           {/* Size Selection */}
//           <div style={{ marginTop: "20px" }}>
//             <strong>Select Size:</strong>
//             <div style={{ display: 'flex', gap: '10px', marginTop: '10px', flexWrap: "wrap" }}>
//               {["UK 6", "UK 7", "UK 8", "UK 9", "UK 10"].map((size, index) => (
//                 <button
//                   key={index}
//                   style={{
//                     padding: "10px 15px",
//                     border: "1px solid #ccc",
//                     borderRadius: "4px",
//                     backgroundColor: "#fff",
//                     cursor: "pointer"
//                   }}
//                 >
//                   {size}
//                 </button>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ParticularBrandCardPageDetail;
