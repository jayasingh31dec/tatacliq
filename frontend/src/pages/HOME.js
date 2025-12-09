// src/pages/Home.js
import React from 'react';
// import ProductGrid from '../components/ProductGrid';
import BannerCarousel from '../components/BannerCarousel';
import CategoryCard from '../components/CategoryCard';
import BrandCard from '../components/BrandCard';
import SquareBrandCard from '../components/SquareBrandCard'



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
  { title: 'HOME & LIVING', image: 'https://assets.tatacliq.com/medias/sys_master/images/64927656902686.png', link: '/category/HOME & LIVING' },
  { title: 'HEALTHY LIVING', image: 'https://assets.tatacliq.com/medias/sys_master/images/64927673614366.png', link: '/category/HEALTHY%20LIVING' },
  { title: 'GADGETS', image: 'https://assets.tatacliq.com/medias/sys_master/images/64927656968222.png', link: '/category/GADGETS' },
];


{/* -----------------------SquareBrandCard---------------------------------- */ }


const SquareBrands = [
  { name: `U.S. Polo Assn`, image: 'https://assets.tatacliq.com/medias/sys_master/images/65236469383198.jpg' },
  { name: 'W', image: 'https://assets.tatacliq.com/medias/sys_master/images/65236469448734.jpg' },
  { name: 'Titan', image: 'https://assets.tatacliq.com/medias/sys_master/images/65236469514270.jpg' },
  { name: 'Vero Moda', image: 'https://assets.tatacliq.com/medias/sys_master/images/65236469579806.jpg' },
  { name: 'Adidas', image: 'https://assets.tatacliq.com/medias/sys_master/images/65236469645342.jpg' },
  { name: 'Puma', image: 'https://assets.tatacliq.com/medias/sys_master/images/65236469710878.jpg' },
  { name: 'ALDO', image: 'https://assets.tatacliq.com/medias/sys_master/images/65236469776414.jpg' },
  { name: 'Tommy Hilfiger', image: 'https://assets.tatacliq.com/medias/sys_master/images/65236469841950.jpg' },
  { name: 'Ray-Ban', image: 'https://assets.tatacliq.com/medias/sys_master/images/65236469907486.jpg' },
  { name: 'Skinn', image: 'https://assets.tatacliq.com/medias/sys_master/images/65236469973022.jpg' },

  // Add more as needed
];














{/* -----------------------BrandCard---------------------------------- */ }






const CliqAllStars = [
  { name: 'Varanga', image: 'https://assets.tatacliq.com/medias/sys_master/images/65236466237470.png' },
  { name: 'Hoversoul', image: 'https://assets.tatacliq.com/medias/sys_master/images/65236466303006.png' },
  { name: `Cover Story`, image: 'https://assets.tatacliq.com/medias/sys_master/images/65236482523166.png' },
  { name: 'Linen Club', image: 'https://assets.tatacliq.com/medias/sys_master/images/65236466434078.png' },
  { name: 'Fablestreet', image: 'https://assets.tatacliq.com/medias/sys_master/images/65236466761758.png' },
  { name: 'Timex', image: 'https://assets.tatacliq.com/medias/sys_master/images/65236466827294.png' },
  { name: `D'Decor`, image: 'https://assets.tatacliq.com/medias/sys_master/images/65236466892830.png' },
  { name: 'Tommy Hilfiger', image: 'https://assets.tatacliq.com/medias/sys_master/images/65236466958366.png' },
  // { name: '5', image: 'https://assets.tatacliq.com/medias/sys_master/images/65236467286046.png' },
  // { name: '6', image: 'https://assets.tatacliq.com/medias/sys_master/images/65236467220510.png' },
  // { name: `7`, image: 'https://assets.tatacliq.com/medias/sys_master/images/65236467351582.png' },
  // { name: '8', image: 'https://assets.tatacliq.com/medias/sys_master/images/65236467417118.png' },
  

];



const HerFastionUniverse = [
  { name: 'Fashor', image: 'https://assets.tatacliq.com/medias/sys_master/images/65236468334622.png' },
  { name: `Levi's`, image: 'https://assets.tatacliq.com/medias/sys_master/images/65236468400158.png' },
  { name: 'Styli', image: 'https://assets.tatacliq.com/medias/sys_master/images/65236468465694.png' },
  { name: 'Autumn Lane', image: 'https://assets.tatacliq.com/medias/sys_master/images/65236468531230.png' },
  // Add more as needed
];


const HisFastionUniverse = [
  { name: 'Pantaloons', image: 'https://assets.tatacliq.com/medias/sys_master/images/65236467744798.png' },
  { name: `Lifestyle`, image: 'https://assets.tatacliq.com/medias/sys_master/images/65236467810334.png' },
  { name: 'Rigo', image: 'https://assets.tatacliq.com/medias/sys_master/images/65236467875870.png' },
  { name: 'Numero UNO', image: 'https://assets.tatacliq.com/medias/sys_master/images/65236467941406.png' },
  // Add more as needed
];



const YourSoleWorld = [
  { name: 'Aldo', image: 'https://assets.tatacliq.com/medias/sys_master/images/65236471152670.png' },
  { name: `Metro`, image: 'https://assets.tatacliq.com/medias/sys_master/images/65236471218206.png' },
  { name: 'Bata', image: 'https://assets.tatacliq.com/medias/sys_master/images/65236471283742.png' },
  { name: 'Ruosh', image: 'https://assets.tatacliq.com/medias/sys_master/images/65236471349278.png' },
  // Add more as needed
];



const GalaxyOfTime = [
  { name: 'Fastrack', image: 'https://assets.tatacliq.com/medias/sys_master/images/65236470104094.png' },
  { name: `Guess`, image: 'https://assets.tatacliq.com/medias/sys_master/images/65236470169630.png' },
  { name: 'ARMANI EXCHANGE', image: 'https://assets.tatacliq.com/medias/sys_master/images/65236470235166.png' },
  { name: 'Mathey Tissot', image: 'https://assets.tatacliq.com/medias/sys_master/images/65236470300702.png' },
  // Add more as needed
];


const StellarAccessories = [
  { name: 'Baggit', image: 'https://assets.tatacliq.com/medias/sys_master/images/65236279722014.png' },
  { name: `wildcraft`, image: 'https://assets.tatacliq.com/medias/sys_master/images/65236279853086.png' },
  { name: 'Fastrack bags', image: 'https://assets.tatacliq.com/medias/sys_master/images/65236279918622.png' },
  { name: 'it luggage', image: 'https://assets.tatacliq.com/medias/sys_master/images/65236279984158.png' },
  // Add more as needed
];





const PlanetHome = [
  { name: 'Wonderchef', image: 'https://assets.tatacliq.com/medias/sys_master/images/65236470628382.png' },
  { name: `Kapoor Lamp Shades`, image: 'https://assets.tatacliq.com/medias/sys_master/images/65236470693918.png' },
  { name: 'Smokey Cocktail', image: 'https://assets.tatacliq.com/medias/sys_master/images/65236470759454.png' },
  { name: 'Nautica Bianca', image: 'https://assets.tatacliq.com/medias/sys_master/images/65236470824990.png' },
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












      {/* -----------------------SquareBrandCard---------------------------------- */}


      <div style={{ marginBottom: "10%", color: "red", fontSize: "24px" }}>
        <h2 className="text-center my-4">Lightening Deals</h2>
      </div>
      <div className="container my-4 d-flex flex-wrap justify-content-center gap-3">
        {SquareBrands.map((brand, index) => (
          <SquareBrandCard key={index} brandName={brand.name} image={brand.image} />
        ))}
      </div>
      <div style={{ marginBottom: '100px' }}></div>

















      {/* -----------------------BrandCard---------------------------------- */}





      {/* Cliq All Stars */}
<div style={{ marginBottom: "10%", color: "red", fontSize: "24px" }}>
  <h2 className="text-center my-4">Cliq All Stars</h2>
</div>

<div
  className="container my-4 d-flex flex-wrap justify-content-center"
  style={{ rowGap: '85px', columnGap: '1rem' }} // yeh line update ki gayi hai
>
  {CliqAllStars.map((brand, index) => (
    <BrandCard key={index} brandName={brand.name} image={brand.image} />
  ))}
</div>

<div style={{ marginBottom: '100px' }}></div>








      {/* Her Fastion Universe */}
      <div style={{ marginBottom: "10%", color: "red", fontSize: "24px" }}>
        <h2 className="text-center my-4">Her Fashion Universe</h2>
      </div>
      <div className="container my-4 d-flex flex-wrap justify-content-center gap-3">
        {HerFastionUniverse.map((brand, index) => (
          <BrandCard key={index} brandName={brand.name} image={brand.image} />
        ))}
      </div>
      <div style={{ marginBottom: '100px' }}></div>










      {/* His Fastion Universe */}
      <div style={{ marginBottom: "10%", color: "red", fontSize: "24px" }}>
        <h2 className="text-center my-4">His Fashion Universe</h2>
      </div>
      <div className="container my-4 d-flex flex-wrap justify-content-center gap-3">
        {HisFastionUniverse.map((brand, index) => (
          <BrandCard key={index} brandName={brand.name} image={brand.image} />
        ))}
      </div>
      <div style={{ marginBottom: '100px' }}></div>








      {/*Your Sole World */}
      <div style={{ marginBottom: "10%", color: "red", fontSize: "24px" }}>
        <h2 className="text-center my-4">Your Sole World</h2>
      </div>
      <div className="container my-4 d-flex flex-wrap justify-content-center gap-3">
        {YourSoleWorld.map((brand, index) => (
          <BrandCard key={index} brandName={brand.name} image={brand.image} />
        ))}
      </div>
      <div style={{ marginBottom: '100px' }}></div>






      {/*Galaxy Of Time */}
      <div style={{ marginBottom: "10%", color: "red", fontSize: "24px" }}>
        <h2 className="text-center my-4">Galaxy Of Time</h2>
      </div>
      <div className="container my-4 d-flex flex-wrap justify-content-center gap-3">
        {GalaxyOfTime.map((brand, index) => (
          <BrandCard key={index} brandName={brand.name} image={brand.image} />
        ))}
      </div>
      <div style={{ marginBottom: '100px' }}></div>







      {/*Stellar Accessories */}
      <div style={{ marginBottom: "10%", color: "red", fontSize: "24px" }}>
        <h2 className="text-center my-4">Stellar Accessories</h2>
      </div>
      <div className="container my-4 d-flex flex-wrap justify-content-center gap-3">
        {StellarAccessories.map((brand, index) => (
          <BrandCard key={index} brandName={brand.name} image={brand.image} />
        ))}
      </div>
      <div style={{ marginBottom: '100px' }}></div>












      {/*Planet Home */}
      <div style={{ marginBottom: "10%", color: "red", fontSize: "24px" }}>
        <h2 className="text-center my-4">Planet Home</h2>
      </div>
      <div className="container my-4 d-flex flex-wrap justify-content-center gap-3">
        {PlanetHome.map((brand, index) => (
          <BrandCard key={index} brandName={brand.name} image={brand.image} />
        ))}
      </div>
      <div style={{ marginBottom: '100px' }}></div>










    </div>
  );
}

export default Home;
