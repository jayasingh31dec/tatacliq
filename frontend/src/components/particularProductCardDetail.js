// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';

// function ParticularProductCardDetail() {
//   const { id } = useParams(); // URL se product id milega
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
//         <p><strong>Description:</strong> {product.description}</p>

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

// export default ParticularProductCardDetail;


































































import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { IoStarSharp, IoStarHalfSharp, IoStarOutline } from "react-icons/io5";
import { useCart } from '../contexts/CartContext';
import { API_BASE_URL } from '../config';

function ParticularProductCardDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState(null); // ✅ track selected size
  const { addToCart } = useCart(); // ✅ call from context

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(`${API_BASE_URL}/api/products/${id}`);
        setProduct(res.data);
      } catch (err) {
        console.error('Failed to load product:', err);
      }
    };
    fetchProduct();
  }, [id]);

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (rating >= i) {
        stars.push(<IoStarSharp key={i} style={{ color: "#f39c12" }} />);
      } else if (rating >= i - 0.5) {
        stars.push(<IoStarHalfSharp key={i} style={{ color: "#f39c12" }} />);
      } else {
        stars.push(<IoStarOutline key={i} style={{ color: "#f39c12" }} />);
      }
    }
    return stars;
  };

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert("Please select a size");
      return;
    }

    addToCart({
      ...product,
      size: selectedSize,
       // ✅ pass size
    });

    alert("Item added to cart!");
  };

  if (!product) return <p>Loading...</p>;

  return (
    <div style={{ padding: "30px", maxWidth: "1200px", margin: "auto" }}>
      <div style={{ display: "flex", gap: "140px", alignItems: "flex-start" }}>

        {/* Left Column - Images */}
        <div style={{ display: "flex", gap: "20px" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            {product.images?.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Thumbnail ${index}`}
                onClick={() => setCurrentImageIndex(index)}
                style={{
                  width: "80px",
                  height: "80px",
                  objectFit: "cover",
                  border: currentImageIndex === index ? "2px solid #000" : "1px solid #ccc",
                  cursor: "pointer",
                  borderRadius: "5px",
                }}
              />
            ))}
          </div>

          <img
            src={product.images?.[currentImageIndex] || product.image}
            alt="Main Product"
            style={{
              width: "400px",
              height: "400px",
              objectFit: "cover",
              borderRadius: "10px",
              border: "1px solid #ccc"
            }}
          />
        </div>

        {/* Right Column - Product Details */}
        <div style={{ flex: 1 }}>
          <p style={{ fontWeight: "bold", fontSize: "24px" }}>{product.name}</p>
          <p style={{ fontSize: "18px", marginBottom: "10px" }}>{product.description}</p>

          <p>
            <strong>Price:</strong>{" "}
            {product.discountPrice ? (
              <>
                <span style={{ textDecoration: "line-through", color: "#888" }}>₹{product.price}</span>
                &nbsp;
                <span style={{ fontWeight: "bold", color: "green" }}>₹{product.discountPrice}</span>
                &nbsp;
                {product.discountPercent && (
                  <span style={{ color: "red" }}>({product.discountPercent}% OFF)</span>
                )}
              </>
            ) : (
              <span style={{ fontWeight: "bold" }}>₹{product.price}</span>
            )}
          </p>

          <p style={{ fontSize: "13px", marginTop: "5px" }}>Inclusive of all taxes</p>

          <p style={{ color: product.outOfStock ? 'red' : 'green', marginTop: "10px" }}>
            {product.outOfStock ? 'Out of Stock' : 'In Stock'}
          </p>

          <p style={{ fontSize: "0.9rem", display: "flex", alignItems: "center", gap: "5px", marginTop: "10px" }}>
            {product.rating ? (
              <>
                <span style={{ display: "flex" }}>{renderStars(product.rating)}</span>
                <span style={{ marginLeft: "5px", color: "#555" }}>{product.rating} / 5</span>
              </>
            ) : (
              "No rating"
            )}
          </p>

          {/* Size Selector */}
          {/* Size Selector */}
{product?.sizes?.length > 0 && (
  <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
    {product.sizes.map((size, index) => (
      <button
        key={index}
        onClick={() => setSelectedSize(size)}
        style={{
          padding: "10px 15px",
          border: selectedSize === size ? "2px solid #007BFF" : "1px solid #ccc",
          backgroundColor: selectedSize === size ? "#e0f7fa" : "#f5f5f5",
          color: selectedSize === size ? "#007BFF" : "#333",
          fontWeight: selectedSize === size ? "bold" : "normal",
          borderRadius: "4px",
          cursor: "pointer",
          transition: "all 0.2s ease-in-out"
        }}
      >
        {size}
      </button>
    ))}
  </div>
)}




          {/* Add to Cart Button */}
          <button
            onClick={handleAddToCart}
            style={{
              marginTop: "20px",
              padding: "12px 25px",
              backgroundColor: "#007bff",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer"
            }}
          >
            Add to Cart
          </button>

        </div>
      </div>
    </div>
  );
}

export default ParticularProductCardDetail;











































































// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';

// function ParticularProductCardDetail() {
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

// export default ParticularProductCardDetail;
























// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';

// function ParticularProductCardDetail() {
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

// export default ParticularProductCardDetail;
