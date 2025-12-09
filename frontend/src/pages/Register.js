// import React, { useState } from 'react';
// import { useNavigate, Link } from 'react-router-dom';
// import { registerUser } from './services';

// function Register() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     password: '',
//     role: 'user',
//   });

//   const [message, setMessage] = useState('');
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//       ...(name === 'role' && value === 'admin' ? { name: '' } : {})
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setMessage('');
//     setError('');

//     try {
//       if (formData.role === 'admin') {
//         // Admin Login API call
//         const response = await fetch('http://localhost:3000/api/admin/login', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({ email: formData.email, password: formData.password }),
//         });

//         const data = await response.json();

//         if (response.ok) {
//           localStorage.setItem('adminToken', data.token);
//           navigate('/admin/dashboard');
//         } else {
//           setError(`❌ ${data.message}`);
//         }

//       } else {
//         // Normal user registration
//         const data = await registerUser(formData);
//         setMessage('✅ Register successful!');
//         setTimeout(() => {
//           navigate('/login');
//         }, 1500);
//       }

//     } catch (err) {
//       setError(`❌ ${err.message}`);
//       console.error(err);
//     }
//   };

//   return (
//     <div style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', background: '#f8f9fa' }}>
//       <div style={{
//         maxWidth: '400px',
//         width: '100%',
//         padding: '30px',
//         borderRadius: '10px',
//         boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
//         backgroundColor: '#fff'
//       }}>
//         <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>
//           {formData.role === 'admin' ? 'Admin Login' : 'Register'}
//         </h2>

//         <form onSubmit={handleSubmit}>
//           Role Selection
//           <div style={{ marginBottom: '15px', textAlign: 'center' }}>
//             <label>
//               <input
//                 type="radio"
//                 name="role"
//                 value="user"
//                 checked={formData.role === 'user'}
//                 onChange={handleChange}
//               /> User
//             </label>
//             &nbsp;&nbsp;
//             <label>
//               <input
//                 type="radio"
//                 name="role"
//                 value="admin"
//                 checked={formData.role === 'admin'}
//                 onChange={handleChange}
//               /> Admin
//             </label>
//           </div>

//           {/* Name only if user */}
//           {formData.role === 'user' && (
//             <input
//               name="name"
//               placeholder="Name"
//               value={formData.name}
//               onChange={handleChange}
//               required
//               style={{ width: '100%', padding: '10px', marginBottom: '15px' }}
//             />
//           )}

//           <input
//             name="email"
//             placeholder="Email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//             style={{ width: '100%', padding: '10px', marginBottom: '15px' }}
//           />
//           <input
//             name="password"
//             type="password"
//             placeholder="Password"
//             value={formData.password}
//             onChange={handleChange}
//             required
//             style={{ width: '100%', padding: '10px', marginBottom: '15px' }}
//           />

//           <button type="submit" style={{ width: '100%', padding: '10px', backgroundColor: '#007bff', color: '#fff', border: 'none' }}>
//             {formData.role === 'admin' ? 'Login as Admin' : 'Sign Up'}
//           </button>
//         </form>

//         {message && <p style={{ color: 'green', marginTop: '15px' }}>{message}</p>}
//         {error && <p style={{ color: 'red', marginTop: '15px' }}>{error}</p>}

//         {formData.role === 'user' && (
//           <p style={{ marginTop: '15px', textAlign: 'center' }}>
//             Already have an account? <Link to="/login">Login</Link>
//           </p>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Register;













































// import React, { useState } from 'react';
// import {useNavigate} from 'react-router-dom';




// function Register() {

//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     password: '',
//     address:''


//   });

//   const navigate =useNavigate();



//   async function handleSubmit(e) {
//     e.preventDefault()


//     try{
//       const response = await fetch('http://localhost:3000/api/register',{
//         method:'post',
//         headers :{
//           'content-type':'application/json',
//         },
//         body: JSON.stringify(formData),
          
        
//       });


//       const data= await response.json();

//       if (response.ok) {
//       alert(' Successfully registered!');
//       console.log(data); 
//       navigate('/login');
//     } else {
//       alert(' Register failed: ' + data.message); 
//     }

//     }
//       catch (error) {  // ✅ catch block corrected (you wrote `caches`)
//     console.log('❌ Error:', error.message);
//     alert('❌ Something went wrong');
//   }
// }
  
    
   

  


//   function handleChange(e) {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));


//   }

//   return (
//     <div>
//       {/* ////////////////// card  div form ke outer me  ////////////////////////////////// */}
      
//       <div className='card'>
//         <h1>TATA CLIQ FASHION</h1>
//         <h2>Register</h2>
//       <form onSubmit={handleSubmit}>

//         <label>
//           Name:
//           <input
//             type="text"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             placeholder="Enter your name"
//           />
//         </label>

//        <label>
//   Email:
//   <input
//     type="email"
//     name="email"
//     placeholder="Enter your email"
//     value={formData.email}
//     onChange={handleChange}
//   />
// </label>

// <label>
//   Password:
//   <input
//     type="password"
//     name="password"
//     placeholder="Enter your password"
//     value={formData.password}
//     onChange={handleChange}
//   />
// </label>
// <div style={{ width: "420px", rowGap: "30px"}}>
//   <label>
//     Address:
//     <input
//       type="text" 
//       name="address"
//       placeholder="Enter your address"
//       value={formData.address}
//       onChange={handleChange}
//     />
//   </label>
// </div>







// <button type='submit'>Register</button>
// <p>allready have account</p>
// <button type="button" onClick={() => navigate('/login')}>Login</button>


//       </form>
//       </div>
      
      
//     </div>
//   )
// }

// export default Register;































































import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { registerUser } from './services';

function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    address:'',
  });

  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    setError('');

    try {
      const data = await registerUser({ ...formData, role: 'user' }); // set role here
      setMessage('✅ Register successful!');
      setTimeout(() => {
        navigate('/login');
      }, 1500);
    } catch (err) {
      setError(`❌ ${err.message}`);
      console.error(err);
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      background: '#f8f9fa'
    }}>
      <div style={{
        maxWidth: '400px',
        width: '100%',
        padding: '30px',
        borderRadius: '10px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
        backgroundColor: '#fff'
      }}>
        <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>
          Register
        </h2>

        <form onSubmit={handleSubmit}>
          <input
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '10px', marginBottom: '15px' }}
          />

          <input
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '10px', marginBottom: '15px' }}
          />

          <input
            name="password"
            type="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '10px', marginBottom: '15px' }}
          />



<input
            name="address"
            type="text"
            placeholder="address"
            value={formData.address}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '10px', marginBottom: '15px' }}
          />





          

          <button
            type="submit"
            style={{
              width: '100%',
              padding: '10px',
              backgroundColor: '#007bff',
              color: '#fff',
              border: 'none'
            }}
          >
            Sign Up
          </button>
        </form>

        {message && <p style={{ color: 'green', marginTop: '15px' }}>{message}</p>}
        {error && <p style={{ color: 'red', marginTop: '15px' }}>{error}</p>}

        <p style={{ marginTop: '15px', textAlign: 'center' }}>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
