import React, { useState } from "react";

const SizeSelector = ({ sizes }) => {
  const [selectedSize, setSelectedSize] = useState(null);

  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };

  return (
    <div style={{ margin: "20px 0" }}>
      <strong>Select Size:</strong>
      <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
        {sizes.map((size, index) => (
          <button
            key={index}
            onClick={() => handleSizeClick(size)}
            style={{
              padding: "10px 15px",
              border: "1px solid #ccc",
              borderRadius: "4px",
              cursor: "pointer",
              backgroundColor: selectedSize === size ? "#333" : "#fff",
              color: selectedSize === size ? "#fff" : "#000",
              fontWeight: selectedSize === size ? "bold" : "normal"
            }}
          >
            {size}
          </button>
        ))}
      </div>

      {selectedSize && (
        <p style={{ marginTop: "10px", color: "green" }}>
          Selected Size: <strong>{selectedSize}</strong>
        </p>
      )}
    </div>
  );
};

export default SizeSelector;
