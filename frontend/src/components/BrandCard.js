// components/BrandCard.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './BrandCard.css'; // Importing external CSS


const BrandCard = ({ brandName, image }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/brand/${brandName.toLowerCase()}`);
  };

  return (
    <div className="brand-card" onClick={handleClick}>
      <div className="brand-image-wrapper">
      <img src={image} alt={brandName} className="brand-image" />
      {/* <h4 className="brand-name">{brandName}</h4> */}
    </div>
    </div>
  );
};

export default BrandCard;
