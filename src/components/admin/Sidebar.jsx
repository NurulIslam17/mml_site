import React from 'react';
import { FiHome, FiUser, FiSettings } from 'react-icons/fi';

const Sidebar = () => {
  return (
    <div className="w-64 h-screen scroll-smooth bg-gray-800 text-white p-5">
      <h1 className="text-2xl text-[#b6391a]  font-semibold mb-10">Admin Dashboard</h1>
      <ul>
        <li className="flex items-center mb-4">
          <FiHome className="mr-3" />
          <span>Dashboard</span>
        </li>
        <li className="flex items-center mb-4">
          <FiUser className="mr-3" />
          <span>Users</span>
        </li>
        <li className="flex items-center mb-4">
          <FiSettings className="mr-3" />
          <span>Settings</span>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
