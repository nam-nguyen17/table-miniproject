import React, { useState, useEffect, useMemo } from "react";
import TableRow from "../../components/table/TableRow";
import styles from "../../components/table/styles.module.scss";
import TableHeader from "../../components/table/TableHeader";
import SearchBar from "../../components/search/SearchBar";
import { User } from "../../_types_";

let PageSize = 10;

const originalHeaders = [
  "customer_id",
  "first_name",
  "last_name",
  "age",
  "email",
  "favorite_color",
  "phone_number",
];

const headerMapping = {
  customer_id: "Customer ID",
  first_name: "First Name",
  last_name: "Last Name",
  age: "Age",
  email: "Email",
  favorite_color: "Favorite Color",
  phone_number: "Phone Number",
};

const UserTable: React.FC = () => {
  const [usersData, setUsersData] = useState<User[]>([]);
  const [tableData, setTableData] = useState<User[]>([]);
  const [pageIndex, setPageIndex] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");

  const fetchUserData = async () => {
    try {
      const response = await fetch("./data/users_data.json");
      const data: User[] = await response.json();

      setUsersData(data);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  // filteredData is the data that is filtered by the search query
  const filteredData = useMemo(() => {
    if (!searchQuery) {
      return usersData;
    }
    const lowerCaseQuery = searchQuery.toLowerCase();
    return usersData.filter(
      (user) =>
        user.first_name.toLowerCase().includes(lowerCaseQuery) ||
        user.last_name.toLowerCase().includes(lowerCaseQuery)
    );
  }, [searchQuery, usersData]);

  // previousTableData is the data that is rendered before the current page
  const previousTableData = useMemo(() => {
    const firstPageIndex = (pageIndex - 1) * PageSize;
    return filteredData.slice(0, firstPageIndex);
  }, [pageIndex, filteredData]);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (pageIndex - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return filteredData.slice(firstPageIndex, lastPageIndex);
  }, [pageIndex, filteredData]);

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
    <div>
      <SearchBar onSearch={(query) => setSearchQuery(query)} />
      <table className={styles.table}>
        <TableHeader headers={originalHeaders} headerMapping={headerMapping} />
        <tbody
          id="infinite-table"
          className={styles.table__body}
          onScroll={handleScroll}>
          {tableData.map((item, index) => (
            <TableRow key={index} rowData={item} headers={originalHeaders} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
