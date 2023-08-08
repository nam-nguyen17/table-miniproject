import React, { useState, useEffect } from "react";
import ProductListTable from "./components/ProductListTable";

const ProductTable: React.FC = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProductData();
  });

  const fetchProductData = () => {
    fetch("./data/products_data.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setProducts(data);
      });
  };

  const headers = ["product_name", "category", "barcode", "price"];

  return (
    <div>
      <ProductListTable headers={headers} data={products} />
    </div>
  );
};

export default ProductTable;
