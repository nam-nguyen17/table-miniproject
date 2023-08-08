import React from "react";
import styles from "./styles.module.scss";

interface TableRowProps {
  rowData: any;
  headers: string[];
}

const TableRow: React.FC<TableRowProps> = ({ rowData, headers }) => {
  return (
    <tr className={styles.table__row}>
      {headers.map((header, idx) => (
        <td key={idx}>{rowData[header]}</td>
      ))}
    </tr>
  );
};

export default TableRow;
