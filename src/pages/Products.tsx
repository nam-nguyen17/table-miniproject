import React from "react";
import Navbar from "../layouts/Navbar";
import PageContainer from "../layouts/PageContainer";
import ProductTable from "../features/product";

const ProductPage: React.FC = () => {
  return (
    <>
      <Navbar />
      <PageContainer>
        <h1>Product Page</h1>
        <ProductTable />
      </PageContainer>
    </>
  );
};

export default ProductPage;
