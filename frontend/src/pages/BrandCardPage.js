import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import ProductButtonCard from "../components/ProductButtonCard";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./BrandCardPage.css";
import { IoStarSharp, IoStarHalfSharp, IoStarOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';


const BrandCardPage = () => {
  const { brandName } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/products?brand=${brandName}`);
        setProducts(response.data.map(p => ({ ...p, currentIndex: 0 })));
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products", error);
        setLoading(false);
      }
    };
    fetchProducts();
  }, [brandName]);

 const handleImageChange = (index, direction, selectedIndex = null) => {
  setProducts(prev =>
    prev.map((p, i) =>
      i === index
        ? {
            ...p,
            currentIndex: selectedIndex !== null
              ? selectedIndex
              : direction === "left"
              ? (p.currentIndex - 1 + p.images.length) % p.images.length
              : (p.currentIndex + 1) % p.images.length,
          }
        : p
    )
  );
};







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








  

  if (loading) return <h3>Loading...</h3>;

  return (
    <div>
      <h2 style={{ textAlign: "center", margin: "20px 0" }}>Shop by {brandName}</h2>
      <div className="container my-4">
        <div className="row">
          {products.length > 0 ? (
            products.map((product, index) => (






              <div key={product._id} className="col-md-3 mb-4">
  <Link to={`/product/${product._id}`} style={{ textDecoration: "none", color: "inherit" }}>
    <div className="card" style={{ borderRadius: "10px", position: "relative" }}>
      {/* Wishlist + Cart Icons */}
      <div style={{ position: "absolute", top: "10px", right: "10px", zIndex: 1 }}>
        <ProductButtonCard product={product} disabled={product.outOfStock} />
      </div>

      {/* Stock Status */}
      {product.outOfStock && (
        <p style={{ color: "red", position: "bottom", bottom: "10px", paddingLeft: "13px" }}>
          Out of Stock!
        </p>
      )}
      {!product.outOfStock && product.limitedItem && (
        <p style={{ color: "red", position: "absolute", bottom: "10px", paddingLeft: "16px" }}>
          Limited stock!
        </p>
      )}

      {/* Image with Arrows */}
      <div className="image-container" style={{ position: "relative" }}>
        <img
          src={product.images?.[product.currentIndex] || product.image}
          alt={product.name}
          className="card-img-top"
          style={{
            height: "370px",
            objectFit: "cover",
            borderTopLeftRadius: "10px",
            borderTopRightRadius: "10px",
          }}
        />
        {product.images?.length > 1 && (
          <>
            <FaChevronLeft
              onClick={(e) => {
                e.preventDefault();
                handleImageChange(index, "left");
              }}
              className="image-arrow arrow-left"
            />
            <FaChevronRight
              onClick={(e) => {
                e.preventDefault();
                handleImageChange(index, "right");
              }}
              className="image-arrow arrow-right"
            />
          </>
        )}
      </div>

      {/* Dots Indicator */}
      {product.images?.length > 1 && (
        <div style={{ display: "flex", justifyContent: "right" }}>
          {product.images.map((_, imgIndex) => (
            <div
              key={imgIndex}
              onClick={(e) => {
                e.preventDefault();
                handleImageChange(index, null, imgIndex);
              }}
              style={{
                height: "5px",
                width: "5px",
                borderRadius: "50%",
                backgroundColor: product.currentIndex === imgIndex ? "#333" : "#ccc",
                margin: "0 4px",
                cursor: "pointer",
              }}
            />
          ))}
        </div>
      )}

      {/* Card Body */}
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text" style={{ color: "#555" }}>{product.description}</p>
        {product.discountPrice ? (
          <p>
            <span style={{ textDecoration: "line-through", color: "#888" }}>₹{product.price}</span>
            &nbsp;<span style={{ fontWeight: "bold", color: "green" }}>₹{product.discountPrice}</span>
            &nbsp;
            {product.discountPercent && (
              <span style={{ color: "red", fontSize: "0.85rem" }}>({product.discountPercent}% OFF)</span>
            )}
          </p>
        ) : (
          <p style={{ fontWeight: "bold" }}>₹{product.price}</p>
        )}
        <p style={{ fontSize: "0.9rem", display: "flex", alignItems: "center", gap: "5px" }}>
          {product.rating ? (
            <>
              <span style={{ display: "flex" }}>{renderStars(product.rating)}</span>
              <span style={{ marginLeft: "5px", color: "#555" }}>{product.rating} / 5</span>
            </>
          ) : (
            "No rating"
          )}
        </p>
      </div>
    </div>
  </Link>
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
