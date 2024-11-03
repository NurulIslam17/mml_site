import React from "react";
import Modal from "../../components/global/Modal";
import Create from "../../components/admin/cost/Create";
import DataTable from "../../components/global/DataTable";

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
      <Modal title="Cost List" modalTitle="Add Cost" action="Create" modalBody={<Create/>} customClass="create-cost"/>
      <DataTable element={tableEelement} />
    </>
  );
};

export default Cost;
