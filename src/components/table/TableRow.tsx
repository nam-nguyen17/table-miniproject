import React from "react";

interface TableRowProps {
  rowData: any;
  headers: string[];
}

const TableRow: React.FC<TableRowProps> = ({ rowData, headers }) => {
  return (
    <tr>
      {headers.map((header, idx) => (
        <td key={idx}>{rowData[header]}</td>
      ))}
    </tr>
  );
};

export default TableRow;
