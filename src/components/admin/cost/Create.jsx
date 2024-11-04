import React, { useState } from "react";
import { useForm } from "react-hook-form";

const Create = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [items, setItems] = useState([{ items: "", price: 0 }]);

  const addItem = () => {
    setItems([...items, { items: "", price: 0 }]);
  };

  const updateItem = (index, newItem) => {
    const updatedItems = items.map((item, i) => (i === index ? newItem : item));
    setItems(updatedItems);
  };

  // const handleSubmit = (data) =>{
  //   console.log(data);

  // }

  return (
    <>
      <form onSubmit={handleSubmit((data) => console.log(data))}>
        <div className="max-w-auto mx-auto grid grid-cols-2 gap-4">
          <div className="mb-5">
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              By
            </label>
            <input
              type="text"
              id="name"
              {...register("name", { required: true })}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="User Name"
            />
            {errors.name && <p>Name is required.</p>}
          </div>
          <div className="">
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              On
            </label>
            <input
              type="date"
              id="date"
              {...register("date")}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
        </div>

        <p>Items</p>

        <div>
          {items.map((item, index) => (
            <div className="grid grid-cols-2 gap-2 mb-4" key={index}>
              <input
                type="text"
                placeholder={`Item name ${index+1}`}
                value={item.items}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                onChange={(e) =>
                  updateItem(index, { ...item, items: e.target.value })
                }
              />
              <input
                type="number"
                placeholder="Price"
                value={item.price}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                onChange={(e) =>
                  updateItem(index, {
                    ...item,
                    price: parseFloat(e.target.value),
                  })
                }
              />
            </div>
          ))}
          <button onClick={addItem}>Add Item</button>
        </div>
      </form>
    </>
  );
};

export default Create;
