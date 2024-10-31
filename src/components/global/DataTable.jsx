import React from "react";

const DataTable = () => {
  return (
    <>
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

        <div className="mt-5 border-2 rounded-md">
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Product name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Color
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Category
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Accessories
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Available
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Price
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Weight
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Apple MacBook Pro 17"
                  </th>
                  <td class="px-6 py-4">Silver</td>
                  <td class="px-6 py-4">Laptop</td>
                  <td class="px-6 py-4">Yes</td>
                  <td class="px-6 py-4">Yes</td>
                  <td class="px-6 py-4">$2999</td>
                  <td class="px-6 py-4">3.0 lb.</td>
                  <td class="flex items-center px-6 py-4">
                    <a
                      href="#"
                      class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      Edit
                    </a>
                    <a
                      href="#"
                      class="font-medium text-red-600 dark:text-red-500 hover:underline ms-3"
                    >
                      Remove
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default DataTable;
