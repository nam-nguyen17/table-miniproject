import React from "react";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";

interface TableProps {
  headers: string[];
  data: any[];
}

const Table: React.FC<TableProps> = ({ headers, data }) => {
  return (
    <table>
      <TableHeader headers={headers} />
      <TableBody data={data} headers={headers} />
    </table>
  );
};

export default Table;
