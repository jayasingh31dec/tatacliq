// import React, { useState, useEffect } from 'react';

// function Profile() {
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     // Fetch user data from localStorage
//     const userData = JSON.parse(localStorage.getItem('user'));
//     if (userData) {
//       setUser(userData);
//     }
//   }, []);

//   if (!user) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       <h2>User Profile</h2>
//       <p><strong>Name:</strong> {user.name}</p>
//       <p><strong>Email:</strong> {user.email}</p>
//       <p><strong>address:</strong> {user.email}</p>
//       {/* Add more user details if needed */}
//     </div>
//   );
// }

// export default Profile;
































































import React, { useState, useEffect } from 'react';

function Profile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Fetch user data from localStorage
    const userData = JSON.parse(localStorage.getItem('user'));
    if (userData) {
      setUser(userData);
    }
  }, []);








  function handleLogout() {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    window.location.href = "/login"; // simple redirect
  }








  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>User Profile</h2>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>address:</strong> {user.address}</p>

      {/* Add more user details if needed */}


      <br />
      <div style={{paddingLeft:"10px"}}>
      <button onClick={handleLogout}>Logout</button>
      </div>

    </div>
  );
}

export default Profile;
