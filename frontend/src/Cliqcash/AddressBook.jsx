// import React from 'react';
// function AddressBook() {
//   return <div><h2>Address Book Page</h2></div>;
// }
// export default AddressBook;





import React, { useState, useEffect } from 'react';

function AddressBooks() {
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
     
      <strong>{user.name}</strong>
      <br />
      <p>{user.address}</p>

      {/* Add more user details if needed */}


      <br />
      <div style={{paddingLeft:"10px"}}>
      <button onClick={handleLogout}>Logout</button>
      </div>

    </div>
  );
}

export default AddressBooks;



