import axios from "axios";
import { useEffect, useState } from "react";
import { API_BASE_URL } from '../config';

const AdminOrders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      const token = localStorage.getItem("adminToken");
      try {
        const response = await axios.get(`${API_BASE_URL}/api/admin/orders`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setOrders(response.data);
      } catch (error) {
        console.error("Error fetching orders:", error.response?.data || error.message);
      }
    };

    fetchOrders();
  }, []);

  return (
    <div>
      <h2>All Orders</h2>
      <pre>{JSON.stringify(orders, null, 2)}</pre>
    </div>
  );
};

export default AdminOrders;
