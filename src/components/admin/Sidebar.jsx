import React from 'react';
import { FiHome, FiUser, FiSettings, FiDollarSign } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="w-64 h-screen scroll-smooth bg-gray-800 text-white p-5">
      <h1 className="text-2xl text-[#d1cbca]  font-semibold mb-10">Admin Dashboard</h1>
      <ul>
        <Link to={'/dashboard'} className="flex items-center mb-4">
          <FiHome className="mr-3" />
          <span>Dashboard</span>
        </Link>
        <Link to={'users'} className="flex items-center mb-4">
          <FiUser className="mr-3" />
          <span>Users</span>
        </Link>
        <Link to={'cost'} className="flex items-center mb-4">
          <FiDollarSign className="mr-3" />
          <span>Cost</span>
        </Link>
        <Link className="flex items-center mb-4">
          <FiSettings className="mr-3" />
          <span>Settings</span>
        </Link>
      </ul>
    </div>
  );
};

export default Sidebar;
