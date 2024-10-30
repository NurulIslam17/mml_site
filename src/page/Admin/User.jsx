import React from "react";
import { BiEditAlt } from "react-icons/bi";
import { Link } from "react-router-dom";

const User = () => {
  return (
    <>
      <div className="flex justify-between items-center px-5 p-5 rounded-md bg-[#f5f6fa]  shadow-sm">
        <div>
          <h1 className="text-2xl font-semibold">User List</h1>
        </div>
        <div>
          <button type="button" className="px-4 py-2 rounded-lg bg-green-500">
            Add User
          </button>
        </div>
      </div>
      <div className="my-3 px-5 p-5 rounded-md bg-[#f5f6fa]  shadow-sm">
        <div className="flex justify-between items-center">
          <div>
            <select
              name="fbf"
              id=""
              className="p-2 py-1 border-2 border-gray-600 rounded-lg"
            >
              <option value="">Sort</option>
              <option value="">10</option>
              <option value="">20</option>
              <option value="">30</option>
              <option value="">40</option>
            </select>
          </div>

          <div>
            <input
              type="text"
              className="px-2 text-gray-800 py-1 border-2 font-edu border-gray-400 rounded-lg"
              placeholder="Search"
            />
          </div>
        </div>

        <div className="mt-5 border-2 rounded-md border-gray-600 p-3">
          <table className="table w-full">
            <thead>
              <tr>
                <th>SL</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Since</th>
                <th>End At</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>1</td>
                <td>Nurul Islam</td>
                <td>nurul@app.com</td>
                <td>017475363622</td>
                <td>12-12-2000</td>
                <td>30-10-2024</td>
                <td>Active</td>
                <td>
                  <Link to={"/"}><BiEditAlt/></Link>
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td>Nurul Islam</td>
                <td>nurul@app.com</td>
                <td>017475363622</td>
                <td>12-12-2000</td>
                <td>30-10-2024</td>
                <td>Active</td>
                <td>
                  <Link to={"/"}><BiEditAlt/></Link>
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td>Nurul Islam</td>
                <td>nurul@app.com</td>
                <td>017475363622</td>
                <td>12-12-2000</td>
                <td>30-10-2024</td>
                <td>Active</td>
                <td>
                  <Link to={"/"}><BiEditAlt/></Link>
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td>Nurul Islam</td>
                <td>nurul@app.com</td>
                <td>017475363622</td>
                <td>12-12-2000</td>
                <td>30-10-2024</td>
                <td>Active</td>
                <td>
                  <Link to={"/"}><BiEditAlt/></Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default User;
