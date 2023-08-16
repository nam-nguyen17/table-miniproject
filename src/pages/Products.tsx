import React from "react";
import Navbar from "../layouts/Navbar";
import PageContainer from "../layouts/PageContainer";
import ProductTable from "../features/product";
import ThemeButton from "../components/button/ThemeButton";
import ThemeContextProvider, { EnumTheme } from "../context/ThemeContext";

const ProductPage: React.FC = () => {
  return (
    <>
      <Navbar />
      <PageContainer>
        <ThemeContextProvider defaultTheme={EnumTheme.LIGHT}>
          <h1>Product Page</h1>
          <ThemeButton />
          <ProductTable />
        </ThemeContextProvider>
      </PageContainer>
    </>
  );
};

export default ProductPage;
