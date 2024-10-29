import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const nagigate = useNavigate();
  const handleLogout = () => {
    nagigate("/login");
  };

  return (
    <div className="w-full bg-gray-800 shadow p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h2 className="text-lg text-[#ffffff] font-semibold">Dashboard</h2>
        <div>
          <button onClick={handleLogout} className="text-sm text-[#ffffff]">
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
