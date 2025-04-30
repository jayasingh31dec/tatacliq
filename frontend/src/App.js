import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DropdownNavbar from './components/DropdownNavbar.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';




import Profile from './pages/Profile';
import ProtectedRoute from './pages/ProtectedRoute';
import Signup from './pages/Signup';
import Login from './pages/Login';
import HOME from './pages/HOME';
import Categories from './pages/Categories';
import Brands from './pages/Brands';

function App() {
  return (
    <BrowserRouter>
      {/* Render DropdownNavbar at the top of your app */}
      <DropdownNavbar />

      <Routes>
        
        <Route path='/categories' element={<Categories />} />
        <Route path='/brands' element={<Brands />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} 
        />




      </Routes>
    </BrowserRouter>
  );
}

export default App;
