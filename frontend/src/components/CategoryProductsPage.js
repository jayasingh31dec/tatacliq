





import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { categoryProductList } from './categoryProductList';
import ProductCard from '../components/ProductCard';
import './CategoryProductsPage.css';

function CategoryProductsPage() {
  const { categorySlug, subCategory, item } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // ✅ Filters State
  const [filters, setFilters] = useState({
    inStock: false,
    price: [],
    brand: [],
    discount: [],
    rating: [],
    color: [],
  });

  useEffect(() => {
    async function fetchProducts() {
      setLoading(true);
      setError(null);
      try {
        const data = await categoryProductList({
          category: categorySlug,
          subcategory: subCategory,
          item: item,
        });
        setProducts(data);
      } catch (err) {
        setError(err.message || 'Failed to load products');
      } finally {
        setLoading(false);
      }
    }
    fetchProducts();
  }, [categorySlug, subCategory, item]);

  // ✅ Handle Filter Change
  function handleFilterChange(type, value) {
    setFilters((prev) => {
      if (type === 'inStock') {
        return { ...prev, inStock: !prev.inStock };
      }

      const currentValues = prev[type];
      const updatedValues = currentValues.includes(value)
        ? currentValues.filter((v) => v !== value)
        : [...currentValues, value];

      return { ...prev, [type]: updatedValues };
    });
  }

  // ✅ Clear All Filters
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

  // ✅ Filter Logic
  const filteredProducts = products.filter((product) => {
    
if (filters.inStock && product.outOfStock) return false;


    if (filters.price.length > 0) {
      const inPriceRange = filters.price.some((range) => {
        const price = product.price;
        if (range === '0-500') return price >= 0 && price <= 500;
        if (range === '500-1000') return price > 500 && price <= 1000;
        if (range === '1000-2000') return price > 1000 && price <= 2000;
        if (range === '2000+') return price > 2000;
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

        if (range === '10-20') return discount >= 10 && discount < 20;
        if (range === '20-30') return discount >= 20 && discount < 30;
        if (range === '30-50') return discount >= 30 && discount < 50;
        if (range === '50+') return discount >= 50;
        return false;
      });
      if (!matchesDiscount) return false;
    }

    if (filters.rating.length > 0) {
      const matchesRating = filters.rating.some((minRating) => {
        return product.rating >= parseFloat(minRating);
      });
      if (!matchesRating) return false;
    }

    if (filters.color.length > 0 && !filters.color.includes(product.color)) {
      return false;
    }

    return true;
  });

  return (
    <div className="category-page-container">
      {/* ✅ Filter Panel */}
      <aside className="filter-panel">
        <h4>Filters</h4>

        <button className="clear-btn" onClick={clearAllFilters}>
          Clear All Filters
        </button>

        {/* In Stock
        <label>
          <input
            type="checkbox"
            checked={filters.inStock}
            onChange={() => handleFilterChange('inStock')}
          />
          In Stock
        </label> */}

        {/* Price Range */}
        <div className="filter-group">
          <h5>Price</h5>
          {['0-500', '500-1000', '1000-2000', '2000+'].map((range) => (
            <label key={range}>

              
              <input
                type="checkbox"
                checked={filters.price.includes(range)}
                onChange={() => handleFilterChange('price', range)}
              />
              ₹{range.replace('-', ' – ₹')}
            </label>
          ))}
        </div>

        {/* Discount */}
        <div className="filter-group">
          <h5>Discount</h5>
          {['10-20', '20-30', '30-50', '50+'].map((range) => (
            <label key={range}>
              <input
                type="checkbox"
                checked={filters.discount.includes(range)}
                onChange={() => handleFilterChange('discount', range)}
              />
              {range.replace('-', '% – ')}%
            </label>
          ))}
        </div>

        {/* Rating */}
        <div className="filter-group">
          <h5>Customer Rating</h5>
          {['4', '3'].map((rating) => (
            <label key={rating}>
              <input
                type="checkbox"
                checked={filters.rating.includes(rating)}
                onChange={() => handleFilterChange('rating', rating)}
              />
              {rating}★ & above
            </label>
          ))}
        </div>

        {/* Color */}
        <div className="filter-group">
  <h5>Color</h5>
  <div className="color-options">
    {['Black','White','Red','Blue','Green','Gray','Brown','Pink','Yellow','Purple','Orange','Beige','Navy','Maroon','Olive'].map((color) => (
      <div
        key={color}
        className={`color-circle ${filters.color.includes(color) ? 'selected' : ''}`}
        style={{ backgroundColor: color.toLowerCase() }}
        onClick={() => handleFilterChange('color', color)}
        title={color}
      ></div>
    ))}
  </div>
</div>


        {/* Brand */}
        <div className="filter-group">
          <h5>Brand</h5>
          {['Nike', 'Samsung', 'Puma', 'Sony'].map((brand) => (
            <label key={brand}>
              <input
                type="checkbox"
                checked={filters.brand.includes(brand)}
                onChange={() => handleFilterChange('brand', brand)}
              />
              {brand}
            </label>
          ))}
        </div>
      </aside>











      {/* ✅ Product Panel */}
      <main className="product-panel">
        <h2>Products: {categorySlug} / {subCategory} / {item}</h2>

        {loading ? (
          <p>Loading products...</p>
        ) : error ? (
          <p style={{ color: 'red' }}>{error}</p>
        ) : filteredProducts.length === 0 ? (
          <p>No products found with selected filters.</p>
        ) : (
          <div className="product-grid">
            {filteredProducts.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}

export default CategoryProductsPage;
