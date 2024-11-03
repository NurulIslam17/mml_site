import DataTable from "../../components/global/DataTable";
import Modal from "../../components/global/Modal";
import Create from "../../components/admin/user/Create";

const User = () => {
  const tableEelement = {
    Name: "name",
    Email: "email",
    Phone: "phone",
    From: "from",
    To: "to",
    Status: "status",
    Action: "Action",
  };
  return (
    <>
      <Modal title="User List" modalTitle="Add User" action="Create" modalBody={<Create/>} customClass="create-user"/>
      <DataTable element={tableEelement} />
    </>
  );
};

export default User;
