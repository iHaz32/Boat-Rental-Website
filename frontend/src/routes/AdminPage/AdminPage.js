import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FaCheck, FaTimes, FaHourglassHalf } from 'react-icons/fa';

const AdminPanel = () => {
  const [activeTab, setActiveTab] = useState('pending');
  const [bookings, setBookings] = useState([]);
  const [sortBy, setSortBy] = useState('createdAt');
  const navigate = useNavigate();
  const token = localStorage.getItem("adminToken");

  useEffect(() => {
    const authorize = async () => {
      if (!token) {
        navigate("/");
      } else {
        fetchBookings();
      }
    };

    authorize();
  }, [navigate, token]);

  const fetchBookings = async () => {
    try {
      const response = await axios.get(`http://localhost:3001/api/bookings/getBookings/${activeTab}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (response.data) {
        // Sort bookings based on the selected sortBy field
        const sortedBookings = response.data.sort((a, b) => new Date(b[sortBy]) - new Date(a[sortBy]));
        setBookings(sortedBookings);
      }
    } catch (error) {
      console.error("Error fetching bookings:", error);
    }
  };

  useEffect(() => {
    fetchBookings();
  }, [activeTab, sortBy]);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleAction = async (bookingId, action) => {
    try {
      await axios.post(`http://localhost:3001/api/bookings/${action}Booking`, { bookingId }, {
        headers: { Authorization: `Bearer ${token}` },
      });
      fetchBookings();
    } catch (error) {
      console.error("Error updating booking:", error);
    }
  };

  const handleSortChange = (sortField) => {
    setSortBy(sortField);
  };

  return (
    <div className="flex flex-col md:flex-row h-screen">
      {/* Sidebar for larger screens */}
      <aside className="md:w-64 bg-gray-800 text-white p-4 hidden md:block">
        <h2 className="text-2xl font-bold mb-4">Bookings</h2>
        <ul className="space-y-2">
          {['pending', 'accepted', 'rejected', 'all'].map(tab => (
            <li
              key={tab}
              className={`cursor-pointer p-2 rounded-lg ${activeTab === tab ? 'bg-gray-600' : 'hover:bg-gray-700'}`}
              onClick={() => handleTabChange(tab)}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)} Bookings
            </li>
          ))}
        </ul>
      </aside>

      {/* Navbar for small screens */}
      <nav className="md:hidden bg-gray-800 text-white p-4 flex space-x-4 overflow-x-auto">
        {['pending', 'accepted', 'rejected', 'all'].map(tab => (
          <button
            key={tab}
            className={`p-2 rounded-lg ${activeTab === tab ? 'bg-gray-600' : 'hover:bg-gray-700'}`}
            onClick={() => handleTabChange(tab)}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </nav>

      <main className="flex-1 p-6 bg-gray-100 overflow-x-auto">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-3xl font-bold">
            {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} Bookings
          </h1>
          <div>
            <label className="mr-2">Sort By:</label>
            <select 
              value={sortBy} 
              onChange={(e) => handleSortChange(e.target.value)} 
              className="p-2 rounded-lg border border-gray-300"
            >
              <option value="createdAt">Creation Date</option>
              <option value="date">Booking Date</option>
            </select>
          </div>
        </div>
        <div className="w-full overflow-x-auto">
          <table className="min-w-full bg-white shadow-md rounded-lg">
            <thead>
              <tr className="bg-gray-200 text-gray-700">
                <th className="p-3 text-left">Boat</th>
                <th className="p-3 text-left">Customer</th>
                <th className="p-3 text-left">Booking Date</th>
                <th className="p-3 text-left">Creation Date</th>
                {activeTab !== 'all' && <th className="p-3 text-left">Actions</th>}
              </tr>
            </thead>
            <tbody>
              {bookings.length > 0 ? (
                bookings.map((booking) => (
                  <tr key={booking._id} className="border-b">
                    <td className="p-3 whitespace-nowrap">{booking.boat.name}</td>
                    <td className="p-3 whitespace-nowrap">
                      <div className="font-bold">{booking.fullName}</div>
                      <div>Email: {booking.email}</div>
                      <div>Number: {booking.phoneNumber}</div>
                      <div>Preferred Call Time: {booking.preferredCallTime}</div>
                    </td>
                    <td className="p-3 whitespace-nowrap">{new Date(booking.date).toLocaleDateString()}</td>
                    <td className="p-3 whitespace-nowrap">{new Date(booking.createdAt).toLocaleDateString()}</td>
                    {activeTab !== 'all' && (
                      <td className="p-3 flex space-x-2 whitespace-nowrap">
                        <button
                          className="flex items-center bg-blue-500 hover:bg-blue-600 text-white p-2 rounded shadow"
                          onClick={() => handleAction(booking._id, 'accept')}
                        >
                          <FaCheck className="mr-1" /> Accept
                        </button>
                        <button
                          className="flex items-center bg-red-500 hover:bg-red-600 text-white p-2 rounded shadow"
                          onClick={() => handleAction(booking._id, 'reject')}
                        >
                          <FaTimes className="mr-1" /> Reject
                        </button>
                        <button
                          className="flex items-center bg-yellow-500 hover:bg-yellow-600 text-white p-2 rounded shadow"
                          onClick={() => handleAction(booking._id, 'pending')}
                        >
                          <FaHourglassHalf className="mr-1" /> Pending
                        </button>
                      </td>
                    )}
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={activeTab !== 'all' ? 5 : 4} className="p-3 text-center">No bookings available</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default AdminPanel;