import React from "react";
import { useForm } from 'react-hook-form';

const Create = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // const handleSubmit = (data) =>{
  //   console.log(data);
    
  // }


  return (
    <>
      <form onSubmit={handleSubmit((data) => console.log(data))} className="max-w-auto mx-auto grid grid-cols-2 gap-4">
        <div className="mb-5">
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
           By 1
          </label>
          <input
            type="text"
            id="name"
            {...register('name', { required: true })}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="User Name"
          />
          {errors.name && <p>Name is required.</p>}
        </div>
      </form>
    </>
  );
};

export default Create;
