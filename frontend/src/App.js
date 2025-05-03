import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DropdownNavbar from './components/DropdownNavbar';
import CategoryPage from './pages/CategoryPage';
import HOME from './pages/HOME';
import Profile from './pages/Profile';
import ProtectedRoute from './pages/ProtectedRoute';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Categories from './pages/Categories';
import BrandsList from './pages/BrandsList';
import ProductGrid from './components/ProductGrid';
import ProductDetail from './pages/ProductDetail';
import BrandPage from "./components/BrandPage";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import BrandProducts from './pages/BrandProducts';
import BrandCardPage from './pages/BrandCardPage';
import BrandSubcategoryProducts from './pages/BrandSubcategoryProducts';
import CategoryProductsPage from './components/CategoryProductsPage'; // <-- ADD THIS LINE

function App() {
  return (
    <BrowserRouter>
      <DropdownNavbar />
      <Routes>
        <Route path="/" element={<HOME />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/brands" element={<BrandsList />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
        <Route path="/category/:categoryName" element={<CategoryPage />} />
        <Route path="/category/:categorySlug/:subCategory/:item" element={<CategoryProductsPage />} /> {/* <-- ADD THIS ROUTE */}
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/brands/:brandId" element={<BrandPage />} />
        <Route path="/brand/:brandName" element={<BrandProducts />} />
        <Route path="/brand/:brandName" element={<BrandCardPage />} />
        <Route path="/brand/:brandSlug/:subSlug" element={<BrandSubcategoryProducts />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
