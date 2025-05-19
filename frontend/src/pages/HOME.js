// src/pages/Home.js
import React from 'react';
import ProductGrid from '../components/ProductGrid';
import BannerCarousel from '../components/BannerCarousel';
import CategoryCard from '../components/CategoryCard';
import BrandCard from '../components/BrandCard';



const categories = [
  { title: 'WESTSIDE', image: 'https://assets.tatacliq.com/medias/sys_master/images/64927656378398.png', link: '/category/WESTSIDE' },
  { title: 'WOMENSWEAR', image: 'https://assets.tatacliq.com/medias/sys_master/images/64927656443934.png', link: '/category/WOMENSWEAR' },
  { title: 'MENSWEAR', image: 'https://assets.tatacliq.com/medias/sys_master/images/64927656509470.png', link: '/category/MENSWEAR' },
  { title: 'HANDBAGS', image: 'https://assets.tatacliq.com/medias/sys_master/images/64927656575006.png', link: '/category/HANDBAGS' },
  { title: 'WATCHES', image: 'https://assets.tatacliq.com/medias/sys_master/images/64927661555742.png', link: '/category/WATCHES' },
  { title: 'FOOTWEAR', image: 'https://assets.tatacliq.com/medias/sys_master/images/64927656640542.png', link: '/category/FOOTWEAR' },
  { title: 'KIDSWEAR', image: 'https://assets.tatacliq.com/medias/sys_master/images/64927656706078.png', link: '/category/KIDSWEAR' },
  { title: 'JEWELLERY', image: 'https://assets.tatacliq.com/medias/sys_master/images/64927656771614.png', link: '/category/JEWELLERY' },
  { title: 'BEAUTY', image: 'https://assets.tatacliq.com/medias/sys_master/images/64927656837150.png', link: '/category/BEAUTY' },
  { title: 'HOME & LIVING', image: 'https://assets.tatacliq.com/medias/sys_master/images/64927656902686.png', link: '/category/HOME%20%26%20LIVING' },
  { title: 'HEALTHY LIVING', image: 'https://assets.tatacliq.com/medias/sys_master/images/64927673614366.png', link: '/category/HEALTHY%20LIVING' },
  { title: 'GADGETS', image: 'https://assets.tatacliq.com/medias/sys_master/images/64927656968222.png', link: '/category/GADGETS' },
];

const brands = [
  { name: 'Libas', image: 'https://assets.tatacliq.com/medias/sys_master/images/63588841586718.jpg' },
  { name: 'Vero Moda', image: 'https://assets.tatacliq.com/medias/sys_master/images/63588841652254.jpg' },
  { name: `Levi's`, image: 'https://assets.tatacliq.com/medias/sys_master/images/63588841717790.jpg' },
  { name: 'Adidas', image: 'https://assets.tatacliq.com/medias/sys_master/images/63588841848862.jpg' },
  // Add more as needed
];

function Home() {
  return (
    <div>
      {/* Banner Section */}
      <BannerCarousel />

      {/* Category Section */}
      <h4 className="text-center my-4">Shop by Category</h4>
      <div className="container my-4">
        <div className="d-flex overflow-auto px-3" style={{ whiteSpace: 'nowrap' }}>
          {categories.map((cat, index) => (
            <CategoryCard
              key={index}
              title={cat.title}
              image={cat.image}
              link={cat.link}
            />
          ))}
        </div>
      </div>

      {/* Brand Section */}
      <h4 className="text-center my-4">Shop by Brand</h4>
      <div className="container my-4 d-flex flex-wrap justify-content-center gap-3">
        {brands.map((brand, index) => (
          <BrandCard key={index} brandName={brand.name} image={brand.image} />
        ))}
      </div>

      {/* Product Grid */}
      <ProductGrid />




      <div style={{ marginBottom: '100px' }}></div> 


      

    </div>
  );
}

export default Home;
