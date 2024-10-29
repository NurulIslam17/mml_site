import React from "react";
import Sidebar from "../../components/admin/Sidebar";
import Navbar from "../../components/admin/Navbar";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <div className="flex">
        <div className="fixed bg-red-400 h-screen w-64">
          <Sidebar />
        </div>

        <div className="flex-1 ml-65">
          <div className="fixed w-full bg-red-400">
            <Navbar />
          </div>
          <div className="pl-[18rem] bg-[#d1ccc0] pt-20 px-12 min-h-screen">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
