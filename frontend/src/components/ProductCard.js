import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ProductButtonCard from './ProductButtonCard';
import { IoStarSharp, IoStarHalfSharp, IoStarOutline } from "react-icons/io5";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./ProductCard.css";

function ProductCard({ product }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleImageChange = (direction) => {
    if (!product.images || product.images.length === 0) return;
    const totalImages = product.images.length;

    setCurrentImageIndex((prevIndex) =>
      direction === "left"
        ? (prevIndex - 1 + totalImages) % totalImages
        : (prevIndex + 1) % totalImages
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

  return (
    <div className="card h-100 shadow-sm position-relative" style={{ cursor: 'pointer' }}>
      
      {/* Wishlist + Cart */}
      <div className="position-absolute top-0 end-0 m-2 z-1" onClick={(e) => e.stopPropagation()}>
        {!product.outOfStock && <ProductButtonCard product={product} />}
      </div>

      {/* Stock Status */}
      {product.outOfStock && (
        <p style={{ color: "red", position: "absolute", bottom: "10px", left: "10px", paddingLeft: "16px" }}>
          Out of Stock!
        </p>
      )}
      {!product.outOfStock && product.limitedItem && (
        <p style={{ color: "red", position: "absolute", bottom: "10px", left: "10px", paddingLeft: "16px" }}>
          Limited stock!
        </p>
      )}

      {/* Image & Arrows wrapped in Link */}
      <div className="image-container" style={{ position: "relative" }}>
        <Link to={`/product/${product._id}`}>
          <img
            src={product.images?.[currentImageIndex] || product.image}
            alt={product.name}
            className="card-img-top"
            style={{
              height: "370px",
              objectFit: "cover",
              borderTopLeftRadius: "10px",
              borderTopRightRadius: "10px",
            }}
          />
        </Link>
        {product.images?.length > 1 && (
          <>
            <FaChevronLeft
              onClick={(e) => {
                e.preventDefault(); e.stopPropagation();
                handleImageChange("left");
              }}
              className="image-arrow arrow-left"
            />
            <FaChevronRight
              onClick={(e) => {
                e.preventDefault(); e.stopPropagation();
                handleImageChange("right");
              }}
              className="image-arrow arrow-right"
            />
          </>
        )}
      </div>

      {/* Dots */}
      {product.images?.length > 1 && (
        <div style={{ display: "flex", justifyContent: "right" }}>
          {product.images.map((_, dotIndex) => (
            <div
              key={dotIndex}
              style={{
                width: "5px",
                height: "5px",
                borderRadius: "50%",
                backgroundColor: currentImageIndex === dotIndex ? "#333" : "#ccc",
                margin: "0 4px",
                cursor: "pointer",
              }}
              onClick={(e) => {
                e.preventDefault(); e.stopPropagation();
                setCurrentImageIndex(dotIndex);
              }}
            ></div>
          ))}
        </div>
      )}

      {/* Product Info */}
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text" style={{ color: "#555" }}>{product.description}</p>

        {/* Price */}
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

        {/* Rating */}
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
  );
}

export default ProductCard;
