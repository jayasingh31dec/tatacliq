
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './SquareBrandCard.css'; 


const SquareBrandCard = ({ brandName, image }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/brand/${brandName.toLowerCase()}`);
  };

  return (
    <div className="SquareBrand-card" onClick={handleClick}>
      <div className="SquareBrand-image-wrapper">
      <img src={image} alt={brandName} className="SquareBrand-image" />
     
    </div>
    </div>
  );
};

export default SquareBrandCard;
