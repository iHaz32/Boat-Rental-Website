import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AdminLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:3001/api/auth/login', { username, password });
      if (res.status === 200) {
        navigate('/qJa2nORB6w1VSjWF5G0vbNE1qPAdjtITGX0WyoQjPkFCqTXVhGxqKjCSSeLEuR9rWeYq84Xt9gZXARuNuve1BOYrw5DBk9g0M9Hz')
        localStorage.setItem('adminToken', res.data.token);
      }
    } catch (err) {
       navigate('/');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-700">Admin Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-600 font-semibold mb-2">Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-600 font-semibold mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className={`w-full px-4 py-2 text-white font-semibold rounded-lg bg-blue-500 hover:bg-blue-600 transition duration-300`}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
