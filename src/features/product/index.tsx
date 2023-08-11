import React, { useState, useEffect, useMemo } from "react";
import Table from "../../components/table/Table";
import Pagination from "./components/Pagination";
import styles from "./components/styles.module.scss";

let PageSize = 10;

const ProductTable: React.FC = () => {
  const [productsData, setProductsData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  // const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchProductData();
  }, []);

  const fetchProductData = () => {
    // let flag = true;
    fetch("./data/products_data.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setProductsData(data);
        // setIsLoading(false);
        // flag = false;
      });
  };

  const headers = [
    "product_id",
    "product_name",
    "category",
    "expiration_date",
    "quantity",
    "price",
  ];

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return productsData.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, productsData]);

  console.log(currentTableData);

  return (
    <div>
      <Table headers={headers} data={currentTableData} />
      <Pagination
        className={`${styles.pagination_bar}`}
        currentPage={currentPage}
        totalCount={productsData.length}
        pageSize={PageSize}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </div>
  );
};

export default ProductTable;
