import React from "react";
import Table from "../../components/table/Table";

const UserTable: React.FC = () => {
  const headers = ["Name", "Email", "Role"];
  const userData = [
    { Name: "John Doe", Email: "john@example.com", Role: "Admin" },
    { Name: "Jane Smith", Email: "jane@example.com", Role: "User" },
    // Add more data as needed
  ];

  return <Table headers={headers} data={userData} />;
};

export default UserTable;
