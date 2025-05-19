import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DropdownNavbar from './components/DropdownNavbar';
import CategoryPage from './pages/CategoryPage';
import HOME from './pages/HOME';
import Profile from './pages/Profile';
import ProtectedRoute from './pages/ProtectedRoute';
import Register from './pages/Register';
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
import MyWishlist from './pages/MyWishlist';
import MyCart from './pages/MyCart';
import CheckoutPage from './pages/CheckoutPage';
import { CartProvider } from './contexts/CartContext';
import { WishlistProvider } from './contexts/WishlistContext';
import { OrderProvider as UserOrderProvider } from './contexts/userOrderContext';
import { OrderProvider as AdminOrderProvider } from './contexts/OrderContext';

import MyOrders from './pages/MyOrders';


import AdminLogin from './admin/AdminLogin';
import AdminDashboard from './admin/AdminDashboard';
import AddProduct from './admin/AddProduct';
import ManageOrders from './admin/ManageOrders';
import TrackOrders from './pages/TrackOrders';

// import AdminUsers from "./admin/AdminUsers.js";
import SearchBar from './components/SearchBar';


import Footer from "./components/Footer";
// import TrackSingleProduct from './pages/TrackSingleProduct';
// import TrackProduct from './pages/TrackProduct';
import TrackOrderDetails from './pages/TrackOrderDetails';
import OrderDetails from './admin/OrderDetails';

import SearchResultsPage from './components/SearchResultsPage';




function App() {
  return (


    <UserOrderProvider>
      <AdminOrderProvider>
      <WishlistProvider>
        <CartProvider>







          <BrowserRouter>


          <div className="min-vh-100 d-flex flex-column">
            <DropdownNavbar />

            <div className="flex-grow-1">


            {/* <SearchBar /> */}



            <Routes>
              <Route path="/" element={<HOME />} />
              <Route path="/categories" element={<Categories />} />
              <Route path="/brands" element={<BrandsList />} />
              <Route path="/Register" element={<Register />} />
              <Route path="/login" element={<Login />} />
              <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
              <Route path="/category/:categoryName" element={<CategoryPage />} />
              <Route path="/category/:categorySlug/:subCategory/:item" element={<CategoryProductsPage />} /> {/* <-- ADD THIS ROUTE */}
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/brands/:brandId" element={<BrandPage />} />

              <Route path="/brand/:brandName" element={<BrandCardPage />} />
              <Route path="/brand/:brandSlug/:subSlug" element={<BrandSubcategoryProducts />} />
              <Route path="/wishlist" element={<MyWishlist />} />
              <Route path="/cart" element={<MyCart />} />
              <Route path="/CheckoutPage" element={<CheckoutPage />} />
              <Route path="/my-orders" element={<MyOrders />} />






              <Route path="/admin/login" element={<AdminLogin />} />
              <Route path="/admin/dashboard" element={<AdminDashboard />} />
              <Route path="/admin/add-product" element={<AddProduct />} />
              <Route path="/admin/manage-orders" element={<ManageOrders />} />
              <Route path="/track-orders" element={<TrackOrders />} />
              {/* <Route path="/admin/manage-users" element={<AdminUsers />} /> */}
              {/* <Route path="/track-product/:orderId/:productId" element={<TrackSingleProduct />} /> */}
              {/* <Route path="/track-product/:orderId/:productId" element={<TrackProduct />} /> */}
<Route path="/track-order/:id" element={<TrackOrderDetails />} />




              <Route path="/admin/orders/:id" element={<OrderDetails />} />
              <Route path="/search" element={<SearchBar />} />
              <Route path="/search-results" element={<SearchResultsPage />} />




              












             
















            </Routes>
            </div>
            <Footer />
            </div>
          </BrowserRouter>
          





        </CartProvider>
      </WishlistProvider>
    </AdminOrderProvider>
</UserOrderProvider>
  );
}

export default App;
