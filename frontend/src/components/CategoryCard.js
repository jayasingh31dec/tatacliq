
import React from 'react';
import { Link } from 'react-router-dom';

function CategoryCard({ title, image, link }) {
  return (
    <div className="text-center mx-2 mb-3">
      {/* Clickable Image Card */}
      <Link to={link}>
        <div
          style={{
            width: '100px',
            height: '100px',
            borderRadius: '8px',
            overflow: 'hidden',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
            backgroundColor: '#f8f8f8', // Light background for empty space
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <img
            src={image}
            alt={title}
            style={{ width: '100%', height: '100%', objectFit: 'contain' }}
          />
        </div>
      </Link>

      {/* Title below card */}
      <div style={{ display: 'none' }}>{title}</div>

    </div>
  );
}

export default CategoryCard;
