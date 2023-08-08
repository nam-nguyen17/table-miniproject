import React, { useState, useEffect } from "react";
import UserListTable from "./components/UserListTable";

const UserTable: React.FC = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = () => {
    fetch("./data/users_data.json")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
      });
  };

  const headers = [
    "customer_id",
    "first_name",
    "last_name",
    "age",
    "email",
    "favorite_color",
    "phone_number",
  ];

  return (
    <div>
      <UserListTable headers={headers} data={users} />
    </div>
  );
};

export default UserTable;
