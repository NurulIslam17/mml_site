import React from "react";

const Modal = ({ title, modalTitle, action,modalBody, customClass }) => {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
      <div className="flex justify-between items-center px-5 p-5 rounded-md bg-[#f5f6fa]  shadow-sm">
        <div>
          <h1 className="text-2xl font-semibold">
            {title ? title : "Table Title"}
          </h1>
        </div>
        <div>
          <button
            className="px-4 py-2 rounded-lg text-white bg-slate-500 shadow-lg uppercase text-sm  hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="button"
            onClick={() => setShowModal(true)}
          >
            {action ? action : "Action"}
          </button>
        </div>
      </div>

      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-7xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-2xl font-semibold">
                    {modalTitle ? modalTitle : "Title"}
                  </h3>
                  <button
                    className="w-7 h-7 rounded-full text-white bg-red-800 absolute -top-2 -right-3"
                    onClick={() => {
                      setShowModal(false);
                    }}
                  >
                    <span> X </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-aut">
                {modalBody}
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-white bg-red-400 background-transparent uppercase px-6 py-3 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="submit"
                    onClick={() => setShowModal(false)}
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};

export default Modal;
