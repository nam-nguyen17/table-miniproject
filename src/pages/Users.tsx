import React from "react";
import Navbar from "../layouts/Navbar";
import PageContainer from "../layouts/PageContainer";
import UserTable from "../features/user";

const UserPage: React.FC = () => {
  return (
    <>
      <Navbar />
      <PageContainer>
        <h1>User Page</h1>
        <UserTable />
      </PageContainer>
    </>
  );
};

export default UserPage;
