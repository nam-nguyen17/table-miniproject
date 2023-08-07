import React from "react";
import TableRow from "./TableRow";

interface TableBodyProps {
  data: any[];
  headers: string[];
}

const TableBody: React.FC<TableBodyProps> = ({ data, headers }) => {
  return (
    <tbody>
      {data.map((item, index) => (
        <TableRow key={index} rowData={item} headers={headers} />
      ))}
    </tbody>
  );
};

export default TableBody;
