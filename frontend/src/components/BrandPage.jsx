import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from './ProductCard';
import { API_BASE_URL } from '../config';

export default function BrandPage() {
  const { brandId } = useParams(); //
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get(`${API_BASE_URL}/api/products?brand=${brandId}`)
      .then((res) => {
        console.log("Brand products response:", res.data);
        setProducts(res.data);
      })
      .catch((err) => console.error("Error fetching products:", err));
  }, [brandId]);

  return (
    <div>
      <h2>{brandId.toUpperCase()} Products</h2>
      <div className="container">
        {products.length === 0 ? (
          <p>No products found for {brandId}</p>
        ) : (
          <div className="row">
            {products.map((product) => (
              <div key={product._id} className="col-12 col-sm-6 col-md-4 col-lg-3 ">
                <div className="card h-100"> 
                <ProductCard product={product} />
              </div>
              </div>

 



            ))}
          </div>
        )}
      </div>
    </div>
  );
}
