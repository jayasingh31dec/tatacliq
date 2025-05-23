// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useParams } from "react-router-dom";
// import ProductButtonCard from "../components/ProductButtonCard";
// import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
// import "./BrandCardPage.css";
// import { IoStarSharp, IoStarHalfSharp, IoStarOutline } from "react-icons/io5";
// import { Link } from "react-router-dom";

// const BrandCardPage = () => {
//   const { brandName } = useParams();
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const response = await axios.get(
//           `http://localhost:3000/api/products?brand=${brandName}`
//         );
//         setProducts(response.data.map((p) => ({ ...p, currentIndex: 0 })));
//         setLoading(false);
//       } catch (error) {
//         console.error("Error fetching products", error);
//         setLoading(false);
//       }
//     };
//     fetchProducts();
//   }, [brandName]);

//   const handleImageChange = (index, direction, selectedIndex = null) => {
//     setProducts((prev) =>
//       prev.map((p, i) =>
//         i === index
//           ? {
//               ...p,
//               currentIndex:
//                 selectedIndex !== null
//                   ? selectedIndex
//                   : direction === "left"
//                   ? (p.currentIndex - 1 + p.images.length) % p.images.length
//                   : (p.currentIndex + 1) % p.images.length,
//             }
//           : p
//       )
//     );
//   };

//   const renderStars = (rating) => {
//     const stars = [];
//     for (let i = 1; i <= 5; i++) {
//       if (rating >= i) {
//         stars.push(<IoStarSharp key={i} style={{ color: "#f39c12" }} />);
//       } else if (rating >= i - 0.5) {
//         stars.push(<IoStarHalfSharp key={i} style={{ color: "#f39c12" }} />);
//       } else {
//         stars.push(<IoStarOutline key={i} style={{ color: "#f39c12" }} />);
//       }
//     }
//     return stars;
//   };

//   if (loading) return <h3>Loading...</h3>;

//   return (
//     <div>
//       <h2 style={{ textAlign: "center", margin: "20px 0" }}>
//         Shop by {brandName}
//       </h2>
//       <div className="container my-4">
//         <div className="row">
//           {products.length > 0 ? (
//             products.map((product, index) => (
//               <div key={product._id} className="col-md-3 mb-4">
//                 <div
//                   className="card"
//                   style={{ borderRadius: "10px", position: "relative" }}
//                 >
//                   {/* Wishlist + Cart Icons */}
//                   <div
//                     style={{
//                       position: "absolute",
//                       top: "10px",
//                       right: "10px",
//                       zIndex: 1,
//                     }}
//                   >
//                     <ProductButtonCard
//                       product={product}
//                       disabled={product.outOfStock}
//                     />
//                   </div>

//                   {/* Stock Status */}
//                   {product.outOfStock && (
//                     <p
//                       style={{
//                         color: "red",
//                         position: "bottom",
//                         bottom: "10px",
//                         paddingLeft: "13px",
//                       }}
//                     >
//                       Out of Stock!
//                     </p>
//                   )}
//                   {!product.outOfStock && product.limitedItem && (
//                     <p
//                       style={{
//                         color: "red",
//                         position: "absolute",
//                         bottom: "10px",
//                         paddingLeft: "16px",
//                       }}
//                     >
//                       Limited stock!
//                     </p>
//                   )}

//                   {/* Image with Arrows */}
//                   <div className="image-container" style={{ position: "relative" }}>
//                     <Link
//                       to={`/product/${product._id}`}
//                       style={{ display: "block" }}
//                     >
//                       <img
//                         src={
//                           product.images?.[product.currentIndex] || product.image
//                         }
//                         alt={product.name}
//                         className="card-img-top"
//                         style={{
//                           height: "370px",
//                           objectFit: "cover",
//                           borderTopLeftRadius: "10px",
//                           borderTopRightRadius: "10px",
//                         }}
//                       />
//                     </Link>

//                     {product.images?.length > 1 && (
//                       <>
//                         <FaChevronLeft
//                           onClick={(e) => {
//                             e.preventDefault();
//                             handleImageChange(index, "left");
//                           }}
//                           className="image-arrow arrow-left"
//                         />
//                         <FaChevronRight
//                           onClick={(e) => {
//                             e.preventDefault();
//                             handleImageChange(index, "right");
//                           }}
//                           className="image-arrow arrow-right"
//                         />
//                       </>
//                     )}
//                   </div>

//                   {/* Dots Indicator */}
//                   {product.images?.length > 1 && (
//                     <div style={{ display: "flex", justifyContent: "right" }}>
//                       {product.images.map((_, imgIndex) => (
//                         <div
//                           key={imgIndex}
//                           onClick={(e) => {
//                             e.preventDefault();
//                             handleImageChange(index, null, imgIndex);
//                           }}
//                           style={{
//                             height: "5px",
//                             width: "5px",
//                             borderRadius: "50%",
//                             backgroundColor:
//                               product.currentIndex === imgIndex ? "#333" : "#ccc",
//                             margin: "0 4px",
//                             cursor: "pointer",
//                           }}
//                         />
//                       ))}
//                     </div>
//                   )}

//                   {/* Card Body */}
//                   <div className="card-body">
//                     <h5 className="card-title">{product.name}</h5>
//                     <p className="card-text" style={{ color: "#555" }}>
//                       {product.description}
//                     </p>
//                     {product.discountPrice ? (
//                       <p>
//                         <span
//                           style={{ textDecoration: "line-through", color: "#888" }}
//                         >
//                           ₹{product.price}
//                         </span>
//                         &nbsp;
//                         <span style={{ fontWeight: "bold", color: "green" }}>
//                           ₹{product.discountPrice}
//                         </span>
//                         &nbsp;
//                         {product.discountPercent && (
//                           <span style={{ color: "red", fontSize: "0.85rem" }}>
//                             ({product.discountPercent}% OFF)
//                           </span>
//                         )}
//                       </p>
//                     ) : (
//                       <p style={{ fontWeight: "bold" }}>₹{product.price}</p>
//                     )}
//                     <p
//                       style={{
//                         fontSize: "0.9rem",
//                         display: "flex",
//                         alignItems: "center",
//                         gap: "5px",
//                       }}
//                     >
//                       {product.rating ? (
//                         <>
//                           <span style={{ display: "flex" }}>
//                             {renderStars(product.rating)}
//                           </span>
//                           <span style={{ marginLeft: "5px", color: "#555" }}>
//                             {product.rating} / 5
//                           </span>
//                         </>
//                       ) : (
//                         "No rating"
//                       )}
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             ))
//           ) : (
//             <p>No products found for {brandName}.</p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BrandCardPage;
























































import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import ProductButtonCard from "../components/ProductButtonCard";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { IoStarSharp, IoStarHalfSharp, IoStarOutline } from "react-icons/io5";
import "./BrandCardPage.css";

const BrandCardPage = () => {
  const { brandName } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    inStock: false,
    price: [],
    brand: [],
    discount: [],
    rating: [],
    color: [],
  });
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/api/products?brand=${brandName}`
        );
        setProducts(response.data.map((p) => ({ ...p, currentIndex: 0 })));
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products", error);
        setError("Failed to load products.");
        setLoading(false);
      }
    };
    fetchProducts();
  }, [brandName]);

  function clearAllFilters() {
    setFilters({
      inStock: false,
      price: [],
      brand: [],
      discount: [],
      rating: [],
      color: [],
    });
  }

  function handleFilterChange(type, value) {
    setFilters((prev) => {
      if (type === "inStock") {
        return { ...prev, inStock: !prev.inStock };
      }

      const currentValues = prev[type];
      const updatedValues = currentValues.includes(value)
        ? currentValues.filter((v) => v !== value)
        : [...currentValues, value];

      return { ...prev, [type]: updatedValues };
    });
  }

  const handleImageChange = (index, direction, selectedIndex = null) => {
    setProducts((prev) =>
      prev.map((p, i) =>
        i === index
          ? {
              ...p,
              currentIndex:
                selectedIndex !== null
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

  const filteredProducts = products.filter((product) => {
    if (filters.inStock && product.outOfStock) return false;

    if (filters.price.length > 0) {
      const inPriceRange = filters.price.some((range) => {
        const price = product.price;
        if (range === "0-500") return price >= 0 && price <= 500;
        if (range === "500-1000") return price > 500 && price <= 1000;
        if (range === "1000-2000") return price > 1000 && price <= 2000;
        if (range === "2000+") return price > 2000;
        return false;
      });
      if (!inPriceRange) return false;
    }

    if (filters.brand.length > 0 && !filters.brand.includes(product.brand)) {
      return false;
    }

    if (filters.discount.length > 0) {
      const matchesDiscount = filters.discount.some((range) => {
        const discount = product.discountPercent || 0;
        if (range === "10-20") return discount >= 10 && discount < 20;
        if (range === "20-30") return discount >= 20 && discount < 30;
        if (range === "30-50") return discount >= 30 && discount < 50;
        if (range === "50+") return discount >= 50;
        return false;
      });
      if (!matchesDiscount) return false;
    }

    if (filters.rating.length > 0) {
      const matchesRating = filters.rating.some(
        (minRating) => product.rating >= parseFloat(minRating)
      );
      if (!matchesRating) return false;
    }

    if (filters.color.length > 0 && !filters.color.includes(product.color)) {
      return false;
    }

    return true;
  });

  return (
    <div className="category-page-container">
      <aside className="filter-panel">
        <h4>Filters</h4>
        <button className="clear-btn" onClick={clearAllFilters}>
          Clear All Filters
        </button>

        {/* <label>
          <input
            type="checkbox"
            checked={filters.inStock}
            onChange={() => handleFilterChange("inStock")}
          />
          In Stock
        </label> */}

        <div className="filter-group">
          <h5>Price</h5>
          {["0-500", "500-1000", "1000-2000", "2000+"].map((range) => (
            <label key={range}>
              <input
                type="checkbox"
                checked={filters.price.includes(range)}
                onChange={() => handleFilterChange("price", range)}
              />
              ₹{range.replace("-", " – ₹")}
            </label>
          ))}
        </div>

        <div className="filter-group">
          <h5>Discount</h5>
          {["10-20", "20-30", "30-50", "50+"].map((range) => (
            <label key={range}>
              <input
                type="checkbox"
                checked={filters.discount.includes(range)}
                onChange={() => handleFilterChange("discount", range)}
              />
              {range.replace("-", "% – ")}%
            </label>
          ))}
        </div>

        <div className="filter-group">
          <h5>Customer Rating</h5>
          {["4", "3"].map((rating) => (
            <label key={rating}>
              <input
                type="checkbox"
                checked={filters.rating.includes(rating)}
                onChange={() => handleFilterChange("rating", rating)}
              />
              {rating}★ & above
            </label>
          ))}
        </div>

        <div className="filter-group">
          <h5>Color</h5>
          <div className="color-options">
            {[
              "Black", "White", "Red", "Blue", "Green", "Gray", "Brown", "Pink",
              "Yellow", "Purple", "Orange", "Beige", "Navy", "Maroon", "Olive"
            ].map((color) => (
              <div
                key={color}
                className={`color-circle ${filters.color.includes(color) ? "selected" : ""}`}
                style={{ backgroundColor: color.toLowerCase() }}
                onClick={() => handleFilterChange("color", color)}
                title={color}
              ></div>
            ))}
          </div>
        </div>

        <div className="filter-group">
          {/* <h5>Brand</h5>
          {["Nike", "Samsung", "Puma", "Sony"].map((brand) => (
            <label key={brand}>
              <input
                type="checkbox"
                checked={filters.brand.includes(brand)}
                onChange={() => handleFilterChange("brand", brand)}
              />
              {brand}
            </label>
          ))} */}
        </div>
      </aside>

      <main className="product-panel">
        <h2>Products: {brandName}</h2>
        {loading ? (
          <p>Loading products...</p>
        ) : error ? (
          <p style={{ color: "red" }}>{error}</p>
        ) : filteredProducts.length === 0 ? (
          <p>No products found with selected filters.</p>
        ) : (
          <div className="row">
            {filteredProducts.map((product, index) => (
              <div key={product._id} className="col-md-3 mb-4">
                <div className="card" style={{ borderRadius: "10px", position: "relative" }}>
                  <div style={{ position: "absolute", top: "10px", right: "10px", zIndex: 1 }}>
                    <ProductButtonCard product={product} disabled={product.outOfStock} />
                  </div>

                  {product.outOfStock && (
                    <p style={{ color: "red", paddingLeft: "13px" }}>Out of Stock!</p>
                  )}
                  {!product.outOfStock && product.limitedItem && (
                    <p style={{ color: "red", position: "absolute", bottom: "10px", paddingLeft: "16px" }}>
                      Limited stock!
                    </p>
                  )}

                  <div className="image-container" style={{ position: "relative" }}>
                    <Link to={`/product/${product._id}`}>
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
                    </Link>

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
                            backgroundColor:
                              product.currentIndex === imgIndex ? "#333" : "#ccc",
                            margin: "0 4px",
                            cursor: "pointer",
                          }}
                        />
                      ))}
                    </div>
                  )}

                  <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text" style={{ color: "#555" }}>{product.description}</p>
                    {product.discountPrice ? (
                      <p>
                        <span style={{ textDecoration: "line-through", color: "#888" }}>
                          ₹{product.price}
                        </span>
                        &nbsp;
                        <span style={{ fontWeight: "bold", color: "green" }}>
                          ₹{product.discountPrice}
                        </span>
                        &nbsp;
                        {product.discountPercent && (
                          <span style={{ color: "red", fontSize: "0.85rem" }}>
                            ({product.discountPercent}% OFF)
                          </span>
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
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default BrandCardPage;



