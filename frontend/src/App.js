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
// import ProductDetail from './pages/ProductDetail';
import BrandPage from "./components/BrandPage";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import BrandProducts from './pages/BrandProducts';
import BrandCardPage from './pages/BrandCardPage';
import BrandSubcategoryProducts from './pages/BrandSubcategoryProducts';
import CategoryProductsPage from './components/CategoryProductsPage'; 
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
import AdminGiftCardForm from './admin/AdminGiftCardForm';
// import AdminUsers from "./admin/AdminUsers.js";
import SearchBar from './components/SearchBar';



// import TrackSingleProduct from './pages/TrackSingleProduct';
// import TrackProduct from './pages/TrackProduct';
import TrackOrderDetails from './pages/TrackOrderDetails';

import OrderDetails from './admin/OrderDetails';


import SearchResultsPage from './components/SearchResultsPage';










import CliqCash from './Cliqcash/CliqCash';
import AddGiftCard from './Cliqcash/AddGiftCard';
import BuyGiftCard from './Cliqcash/BuyGiftCard';
import AddressBook from './Cliqcash/AddressBook';
import SavedPayments from './Cliqcash/SavedPayments';
import Alerts from './Cliqcash/Alerts';
import GiftCard from './Cliqcash/GiftCard';
import Wallet from './Cliqcash/Wallet';












import ParticularProductCardDetail from "./components/particularProductCardDetail";
// import ParticularBrandCardPageDetail from "./pages/ParticularBrandCardPageDetail";
import SizeSelector from "./pages/SizeSelector";
  




import Footer from "./components/Footer";
import AboutUs from "./Footerpages/AboutUs";
import Careers from "./Footerpages/Careers";

import PrivacyPolicy from "./Footerpages/PrivacyPolicy";










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
              {/* <Route path="/product/:id" element={<ProductDetail />} /> */}

             <Route path="/product/:id" element={<ParticularProductCardDetail />} />
             {/* <Route path="/product/:id" element={<ParticularBrandCardPageDetail />} /> */}
             <Route path="/size" element={<SizeSelector />} />


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
              <Route path="/admin/AdminGiftCardForm" element={<AdminGiftCardForm />} />
              {/* <Route path="/admin/manage-users" element={<AdminUsers />} /> */}
              {/* <Route path="/track-product/:orderId/:productId" element={<TrackSingleProduct />} /> */}
              {/* <Route path="/track-product/:orderId/:productId" element={<TrackProduct />} /> */}
<Route path="/track-order/:id" element={<TrackOrderDetails />} />
<Route path="/cliq-cash" element={<CliqCash />} />
<Route path="/add-gift-card" element={<AddGiftCard />} />
<Route path="/buy-gift-card" element={<BuyGiftCard />} />
<Route path="/address-book" element={<AddressBook />} />
<Route path="/saved-payments" element={<SavedPayments />} />
<Route path="/alerts" element={<Alerts />} />
<Route path="/gift-card" element={<GiftCard />} />
<Route path="/Wallet" element={<Wallet />} />


              <Route path="/admin/orders/:id" element={<OrderDetails />} />
              <Route path="/search" element={<SearchBar />} />
              <Route path="/search-results" element={<SearchResultsPage />} />







               <Route path="/about-us" element={<AboutUs />} />
                <Route path="/careers" element={<Careers />} />
                <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />






                



                
                
               
          








              




             












             
















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
