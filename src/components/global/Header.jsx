import React from "react";

const Header = ({title,action,customClass}) => {
  return (
    <>
      <div className="flex justify-between items-center px-5 p-5 rounded-md bg-[#f5f6fa]  shadow-sm">
        <div>
          <h1 className="text-2xl font-semibold">{title ? title: "Table Title"}</h1>
        </div>
        <div>
          <button type="button" className={`px-4 py-2 rounded-lg text-white bg-slate-500 shadow-lg ${customClass}`}>
            {action ? action:"Action"}
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
