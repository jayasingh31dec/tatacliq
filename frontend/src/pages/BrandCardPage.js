// src/pages/BrandCardPage.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import ProductButtonCard from '../components/ProductButtonCard'; // ✅ Make sure this path is correct

const BrandCardPage = () => {
  const { brandName } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/products?brand=${brandName}`);
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products", error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, [brandName]);

  if (loading) {
    return <h3>Loading...</h3>;
  }

  return (
    <div>
      <h2 style={{ textAlign: 'center', margin: '20px 0' }}>Shop by {brandName}</h2>

      <div className="container my-4">
        <div className="row">
          {products.length > 0 ? (
            products.map((product) => (
              <div key={product._id} className="col-md-3 mb-4">
                <div className="card" style={{ width: '100%', borderRadius: '10px', position: 'relative' }}>
                  
                  {/* ❤️🛒 Wishlist + Cart Icons */}
                  <div style={{
                    position: 'absolute',
                    top: '10px',
                    right: '10px',
                    zIndex: 1
                  }}>
                    <ProductButtonCard product={product} />
                  </div>

                  <img
                    src={product.image}
                    alt={product.name}
                    className="card-img-top"
                    style={{
                      height: '370px',
                      width: '100%',
                      objectFit: 'cover',
                      borderTopLeftRadius: '10px',
                      borderTopRightRadius: '10px'
                    }}
                  />

                  <div className="card-body">
                    <h5 className="card-title" style={{ fontSize: '1.2rem' }}>{product.name}</h5>
                    <p className="card-text" style={{ fontSize: '1rem', fontWeight: 'bold' }}>₹{product.price}</p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>No products found for {brandName}.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default BrandCardPage;
