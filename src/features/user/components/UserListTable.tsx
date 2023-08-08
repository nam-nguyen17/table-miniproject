import React from "react";
import Table from "../../../components/table/Table";

interface UserListTableProps {
  data: any[];
  headers: string[];
}

const UserListTable: React.FC<UserListTableProps> = ({ headers, data }) => {
  return (
    <div>
      <Table headers={headers} data={data} />
    </div>
  );
};

export default UserListTable;
