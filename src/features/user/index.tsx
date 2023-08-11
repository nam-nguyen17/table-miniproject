import React, { useState, useEffect } from "react";
import TableRow from "../../components/table/TableRow";
import styles from "../../components/table/styles.module.scss";
import TableHeader from "../../components/table/TableHeader";

const UserTable: React.FC = () => {
  const [users, setUsers] = useState<any[]>([]);
  const [visibleCount, setVisibleCount] = useState<number>(10);

  const fetchUserData = async () => {
    try {
      const response = await fetch("./data/users_data.json");
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  const headers = [
    "customer_id",
    "first_name",
    "last_name",
    "age",
    "email",
    "favorite_color",
    "phone_number",
  ];

  const handleScroll = (e: React.UIEvent<HTMLTableSectionElement, UIEvent>) => {
    const target = e.target as HTMLTableSectionElement;
    // console.log(target.scrollTop, target.clientHeight, target.scrollHeight);
    if (target.scrollTop + target.clientHeight >= target.scrollHeight) {
      setVisibleCount((prevCount) => prevCount + 10);
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
        {users.slice(0, visibleCount).map((item, index) => (
          <TableRow key={index} rowData={item} headers={headers} />
        ))}
      </tbody>
    </table>
  );
};

export default UserTable;
