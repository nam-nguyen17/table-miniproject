import React from "react";
import Table from "../../components/table/Table";

const ProductTable: React.FC = () => {
  const headers = ["Name", "Price", "Stock"];
  const productData = [
    { Name: "Product A", Price: "$10", Stock: 50 },
    { Name: "Product B", Price: "$20", Stock: 30 },
    // Add more data as needed
  ];

  return <Table headers={headers} data={productData} />;
};

export default ProductTable;
