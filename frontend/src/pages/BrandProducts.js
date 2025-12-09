// pages/BrandProducts.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const BrandProducts = () => {
  const { brandName } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:3000/api/products?brand=${brandName}`)
      .then((res) => setProducts(res.data))
      .catch((err) => console.error("Error fetching brand products", err));
  }, [brandName]);

  return (
    <div>
      <h2 style={{ textTransform: 'capitalize' }}>{brandName} Products</h2>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {products.map((product) => (
          <div key={product._id} style={{ 
            border: "1px solid #ccc", 
            padding: "10px", 
            width: "200px", 
            textAlign: "center" 
          }}>
            <div style={{ 
              width: "180px", 
              height: "180px", 
              overflow: "hidden", 
              margin: "0 auto"
            }}>
              <img 
                src={product.image} 
                alt={product.name} 
                style={{ 
                  width: "100%", 
                  height: "100%", 
                  objectFit: "cover" 
                }} 
              />
            </div>
            <h3 style={{ fontSize: "16px" ,color:"red"}}>{product.name}</h3>
            <p style={{ fontWeight: "bold", margin: "5px 0" }}>₹{product.price}</p>
            <p style={{ fontSize: "14px", color: "#555" }}>{product.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandProducts;
