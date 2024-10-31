import React from "react";
import { BiEditAlt } from "react-icons/bi";
import { Link } from "react-router-dom";
import Header from "../../components/global/Header";
import DataTable from "../../components/global/DataTable";

const User = () => {
  return (
    <>
      <Header title="User List" action="Create" customClass='create-user' />
      <DataTable />
    </>
  );
};

export default User;
