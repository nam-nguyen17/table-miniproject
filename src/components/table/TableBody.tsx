import React from "react";
import TableRow from "./TableRow";
import styles from "./styles.module.scss";

interface TableBodyProps {
  data: any[];
  headers: string[];
}

const TableBody: React.FC<TableBodyProps> = ({ data, headers }) => {
  return (
    <tbody className={styles.table__body}>
      {data.map((item, index) => (
        <TableRow key={index} rowData={item} headers={headers} />
      ))}
    </tbody>
  );
};

export default TableBody;
