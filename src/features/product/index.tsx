import React, { useState, useEffect, useMemo } from "react";
import Table from "../../components/table/Table";
import Pagination from "./components/Pagination";
import styles from "./components/styles.module.scss";
import SearchBar from "../../components/search/SearchBar";
import { Product } from "../../_types_";

const PageSize = 10;

const headers = [
  "product_id",
  "product_name",
  "category",
  "expiration_date",
  "quantity",
  "price",
];

const ProductTable: React.FC = () => {
  const [productsData, setProductsData] = useState<Product[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");

  const fetchProductData = async () => {
    try {
      const response = await fetch("./data/products_data.json");
      const data: Product[] = await response.json();
      setProductsData(data);
    } catch (error) {
      console.error("Error fetching product data:", error);
    }
  };

  useEffect(() => {
    fetchProductData();
  }, []);

  // filteredData is the data that is filtered by the search query
  const filteredData = useMemo(() => {
    if (!searchQuery) {
      return productsData;
    }
    const lowerCaseQuery = searchQuery.toLowerCase();
    return productsData.filter((product) =>
      product.product_name.toLowerCase().includes(lowerCaseQuery)
    );
  }, [searchQuery, productsData]);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return filteredData.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, filteredData]);

  return (
    <div>
      <SearchBar onSearch={(query) => setSearchQuery(query)} />
      <Table headers={headers} data={currentTableData} />
      <Pagination
        className={`${styles.pagination_bar}`}
        currentPage={currentPage}
        totalCount={filteredData.length}
        pageSize={PageSize}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </div>
  );
};

export default ProductTable;
