import React from "react";
import styles from "./styles.module.scss";
import Button from "../button/Button";

interface TableHeaderProps<T> {
  headers: string[];
  headerMapping: Record<string, string>;
  sortColumn: keyof T | null;
  sortOrder: "asc" | "desc";
  onSort: (column: keyof T) => void;
}

function TableHeader<T>({
  headers,
  headerMapping,
  sortColumn,
  sortOrder,
  onSort,
}: TableHeaderProps<T>) {
  const handleClick = (header: keyof T) => {
    if (sortColumn === header) {
      onSort(header);
    } else {
      onSort(header);
    }
  };

  return (
    <thead className={styles.table__header}>
      <tr>
        {headers.map((header) => (
          <th key={header} className={styles.table__header_list}>
            {headerMapping[header]}
            <Button
              onClick={() => handleClick(header as keyof T)}
              className={`${sortColumn === header ? "active" : ""}`}>
              {sortColumn === header && sortOrder === "asc" ? "▲" : "▼"}
            </Button>
          </th>
        ))}
      </tr>
    </thead>
  );
}

export default TableHeader;
