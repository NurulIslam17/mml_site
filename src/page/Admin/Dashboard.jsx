import React from "react";
import Sidebar from "../../components/admin/Sidebar";
import Navbar from "../../components/admin/Navbar";

const Dashboard = () => {
  return (
    <div>
      <div className="flex">
        <Sidebar />
        <div className="flex-1">
          <Navbar />
          <div className="p-6 bg-gray-100 min-h-screen">
            {/* Add your dashboard content here */}
            <h3 className="text-2xl text-[#b6391a] font-bold">
              Admin Dashboard
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
