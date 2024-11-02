import React from "react";
import Header from "../../components/global/Header";
import DataTable from "../../components/global/DataTable";
import Modal from "../../components/global/Modal";
import Create from "../../components/admin/cost/Create";

const Cost = () => {

  const tableEelement = {
    By: "name",
    Amount: "amount",
    Cash: "cash",
    Return: "return",
    On: "to",
    Status: "status",
    Action: "Action",
  };

  return (
    <>
      {/* <Header title="Cost List" action="Create" customClass="create-cost" /> */}
      <Modal title="Cost List" modalTitle="Add Cost" action="Create" modalBody={<Create/>} customClass="create-cost"/>
      <DataTable element={tableEelement} />
    </>
  );
};

export default Cost;
