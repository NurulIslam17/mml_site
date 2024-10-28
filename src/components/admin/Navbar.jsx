import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const nagigate = useNavigate();
    const handleLogout = () =>{
        nagigate('/login');
    }


  return (
    <div className="flex justify-between items-center bg-white shadow p-4">
      <h2 className="text-lg text-[#b6391a] font-semibold">Dashboard</h2>
      <div>
        <button onClick={handleLogout} className="text-sm text-[#b6391a]">Logout</button>
      </div>
    </div>  
  );
};

export default Navbar;
