import React from "react";
import styles from "./styles.module.scss";

interface TableHeaderProps {
  headers: string[];
  headerMapping: Record<string, string>;
}

const TableHeader: React.FC<TableHeaderProps> = ({
  headers,
  headerMapping,
}) => {
  return (
    <thead className={styles.table__header}>
      <tr>
        {headers.map((header, index) => (
          <th key={index}>{headerMapping[header]}</th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;
