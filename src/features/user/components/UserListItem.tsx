import React from "react";
import TableRow from "../../../components/table/TableRow";

interface UserListItemProps {
  data: any[];
  headers: string[];
}

const UserListItem: React.FC<UserListItemProps> = ({ data, headers }) => {
  return (
    <tbody>
      {data.map((item, index) => (
        <TableRow key={index} rowData={item} headers={headers} />
      ))}
    </tbody>
  );
};

export default UserListItem;
