import React, { useState } from 'react';
import { loginUser } from './services';
import { useNavigate } from 'react-router-dom'; // ✅
import { API_BASE_URL } from '../config';

function Login() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // ✅

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };



  const handleSubmit = async (e) => {
  e.preventDefault();
  setMessage('');
  setError('');

  try {
    // First, try user login
    let response = await fetch(`${API_BASE_URL}/api/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    let data = await response.json();

    if (response.ok) {
      // Success: Normal user
      localStorage.setItem('token', data.token);
      localStorage.setItem('user', JSON.stringify(data.user));


      window.dispatchEvent(new Event("userLoggedIn"));//direct refresh loger name no need to refresh every time (event fire)


      setMessage('✅ Login successful!');
      navigate('/'); 
      return;
    }

    // If user login fails, try admin login
    response = await fetch(`${API_BASE_URL}/api/admin/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    data = await response.json();

    if (response.ok) {
      localStorage.setItem('adminToken', data.token);
      setMessage('✅ Admin Login successful!');
      navigate('/admin/dashboard');
    } else {
      setError(`❌ ${data.message}`);
    }

  } catch (err) {
    setError(`❌ ${err.message}`);
    console.error(err.message);
  }
};











  return (
    <div className="container">
      <div className="card">
      
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="email"
          placeholder="Email"
          onChange={handleChange}
          value={formData.email}
          required
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          onChange={handleChange}
          value={formData.password}
          required
        />
        <button type="submit">Login</button>
      </form>

      {message && <p style={{ color: 'green' }}>{message}</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
    </div>
  );
}

export default Login;
































// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// function Login() {
//   const [formData, setFormData] = useState({
//     email: '',
//     password: '',
//   });

//   const navigate = useNavigate();;

//   async function handleSubmit(e) {
//     e.preventDefault();
//     try{
//       const response=await fetch('http://localhost:3000/api/login',{
//         method:'post',
//         headers:{
//           'content-type':'application/json'
//         },
//         body:JSON.stringify(formData)
//       });





//       const data= await response.json();

//       if(response.ok){
//         alert('Login successful');
//         console.log(data);
//         localStorage.setItem("token", data.token);
//         localStorage.setItem("user", JSON.stringify(data.user));// login page me save hoga user ka

//         navigate('/Profile');


         
//       }
//       else{
//         alert ('login fail'+data.message);
//       }

//     }
//    catch (error) {
//   console.log('error:', error.message);
//   alert('Something went wrong');
// }

  



//     console.log(formData);  
//   }

//   function handleChange(e) {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   }

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Email:
//           <input
//             type="text"
//             name="email"
//             value={formData.email}
//             placeholder="Enter your email"
//             onChange={handleChange}
//           />
//         </label>

//         <label>
//           Password:
//           <input
//             type="password"
//             name="password"
//             value={formData.password}
//             placeholder="Enter your password"
//             onChange={handleChange}
//           />
//         </label>

//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// }

// export default Login;





































