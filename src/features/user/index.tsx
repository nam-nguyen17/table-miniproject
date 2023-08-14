import React, { useState, useEffect, useMemo } from "react";
import TableRow from "../../components/table/TableRow";
import styles from "../../components/table/styles.module.scss";
import TableHeader from "../../components/table/TableHeader";

let PageSize = 10;

const headers = [
  "customer_id",
  "first_name",
  "last_name",
  "age",
  "email",
  "favorite_color",
  "phone_number",
];

const UserTable: React.FC = () => {
  const [usersData, setUsersData] = useState([]);
  const [pageIndex, setPageIndex] = useState(1);
  const [tableData, setTableData] = useState([]);

  const fetchUserData = async () => {
    try {
      const response = await fetch("./data/users_data.json");
      const data = await response.json();

      setUsersData(data);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  // previousTableData is the data that is rendered before the current page
  const previousTableData = useMemo(() => {
    const firstPageIndex = (pageIndex - 1) * PageSize;
    return usersData.slice(0, firstPageIndex);
  }, [pageIndex, usersData]);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (pageIndex - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return usersData.slice(firstPageIndex, lastPageIndex);
  }, [pageIndex, usersData]);

  useEffect(() => {
    setTableData([...previousTableData, ...currentTableData]);
  }, [currentTableData, pageIndex, previousTableData, usersData]);

  const handleScroll = (e: React.UIEvent<HTMLTableSectionElement, UIEvent>) => {
    const target = e.target as HTMLTableSectionElement;
    if (target.scrollTop + target.clientHeight >= target.scrollHeight) {
      setPageIndex((prevPage) => prevPage + 1);
      console.log("bottom");
    }
  };

  return (
    <table className={styles.table}>
      <TableHeader headers={headers} />
      <tbody
        id="infinite-table"
        className={styles.table__body}
        onScroll={handleScroll}>
        {tableData.map((item, index) => (
          <TableRow key={index} rowData={item} headers={headers} />
        ))}
      </tbody>
    </table>
  );
};

export default UserTable;
