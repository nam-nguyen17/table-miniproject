import React from "react";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";
import styles from "./styles.module.scss";

interface TableProps<T> {
  headers: string[];
  data: T[];
  headerMapping: Record<string, string>;
  sortColumn: keyof T | null;
  sortOrder: "asc" | "desc";
  onSort: (column: keyof T) => void;
}

const Table = <T,>({
  headers,
  data,
  headerMapping,
  sortColumn,
  sortOrder,
  onSort,
}: TableProps<T>) => {
  return (
    <table className={styles.table}>
      <TableHeader
        headers={headers}
        headerMapping={headerMapping}
        sortColumn={sortColumn}
        sortOrder={sortOrder}
        onSort={onSort}
      />
      <TableBody data={data} headers={headers} />
    </table>
  );
};

export default Table;
