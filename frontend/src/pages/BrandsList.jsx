import React from 'react';
import { Link } from 'react-router-dom';

const brandList = [
  { name: 'Libas', image: 'https://assets.tatacliq.com/medias/sys_master/images/63588841586718.jpg' },
  { name: 'nike', image: 'https://logos-world.net/wp-content/uploads/2020/04/Nike-Logo.png' },
  { name: 'puma', image: 'https://logos-world.net/wp-content/uploads/2020/04/Puma-Logo.png' },
  { name: 'reebok', image: 'https://logos-world.net/wp-content/uploads/2020/04/Reebok-Logo.png' },
  { name: 'levis', image: 'https://logos-world.net/wp-content/uploads/2020/04/Levis-Logo.png' },
  { name: 'zara', image: 'https://logos-world.net/wp-content/uploads/2020/04/Zara-Logo.png' },
];

function Brands() {
  return (
    <div style={{ padding: '20px' }}>
      <h2 className="text-center mb-4">Choose a Brand</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
        {brandList.map((brand) => (
          <Link
            key={brand.name}
            to={`/brands/${brand.name}`}
            style={{
              textDecoration: 'none',
              color: 'inherit',
              width: '150px',
              textAlign: 'center',
            }}
          >
            <div style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '10px' }}>
              <img
                src={brand.image}
                alt={brand.name}
                style={{ width: '100%', height: '100px', objectFit: 'contain' }}
              />
              <h4 style={{ marginTop: '10px' }}>{brand.name.toUpperCase()}</h4>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Brands;






