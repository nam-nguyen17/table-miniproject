import React from "react";
import Navbar from "../layouts/Navbar";
import PageContainer from "../layouts/PageContainer";

const HomePage: React.FC = () => {
  return (
    <>
      <Navbar />
      <PageContainer>
        <h1>Welcome to the Home Page</h1>
        <p>This is the main content of your home page.</p>
      </PageContainer>
    </>
  );
};

export default HomePage;
