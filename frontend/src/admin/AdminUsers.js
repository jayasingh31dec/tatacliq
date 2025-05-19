// import axios from "axios";
// import { useEffect, useState } from "react";

// const AdminUsers = () => {
//   const [users, setUsers] = useState([]);

//   const fetchUsers = async () => {
//     const token = localStorage.getItem("adminToken");
//     try {
//       const response = await axios.get("http://localhost:3000/api/admin/users", {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });
//       setUsers(response.data);
//     } catch (error) {
//       console.error("Error fetching users:", error.response?.data || error.message);
//     }
//   };

//   useEffect(() => {
//     fetchUsers();
//   }, []);

//   const handleDelete = async (userId) => {
//     const confirmDelete = window.confirm("Are you sure you want to delete this user?");
//     if (!confirmDelete) return;

//     const token = localStorage.getItem("adminToken");
//     try {
//       await axios.delete(`http://localhost:3000/api/admin/users/${userId}`, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });

//       // Remove user from UI
//       setUsers((prevUsers) => prevUsers.filter((user) => user._id !== userId));
//     } catch (error) {
//       console.error("Error deleting user:", error.response?.data || error.message);
//     }
//   };

//   return (
//     <div>
//       <h2>All Users</h2>
//       <table border="1" cellPadding="8" style={{ width: "100%", borderCollapse: "collapse" }}>
//         <thead>
//           <tr>
//             <th>#</th>
//             <th>Name</th>
//             <th>Email</th>
//             <th>Role</th>
//             <th>Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {users.map((user, index) => (
//             <tr key={user._id}>
//               <td>{index + 1}</td>
//               <td>{user.name}</td>
//               <td>{user.email}</td>
//               <td>{user.role}</td>
//               <td>
//                 <button onClick={() => handleDelete(user._id)} style={{ color: "red" }}>
//                   Delete
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default AdminUsers;
