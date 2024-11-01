import Header from "../../components/global/Header";
import DataTable from "../../components/global/DataTable";

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
      <Header title="User List" action="Create" customClass="create-user" />
      <DataTable element={tableEelement} />
    </>
  );
};

export default User;
