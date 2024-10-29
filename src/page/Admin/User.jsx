import React from "react";

const User = () => {
  return (
    <>
      <div className="flex justify-between items-center px-5 p-5 rounded-md bg-[#f5f6fa]  shadow-sm">
        <div>
          <h1 className="text-2xl font-semibold">User List</h1>
        </div>
        <div>
          <button type="button" className="px-4 py-2 rounded-lg bg-green-500">Add User</button>
        </div>
      </div>
    </>
  );
};

export default User;
