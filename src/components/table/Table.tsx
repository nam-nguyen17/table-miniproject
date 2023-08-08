import React from "react";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";
import styles from "./styles.module.scss";

interface TableProps {
  headers: string[];
  data: any[];
}

const Table: React.FC<TableProps> = ({ headers, data }) => {
  return (
    <table className={styles.table}>
      <TableHeader headers={headers} />
      <TableBody data={data} headers={headers} />
    </table>
  );
};

export default Table;
