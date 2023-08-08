import React from "react";
import Table from "../../../components/table/Table";

interface ProductListTableProps {
  data: any[];
  headers: string[];
}

const ProductListTable: React.FC<ProductListTableProps> = ({
  headers,
  data,
}) => {
  return (
    <div>
      <Table headers={headers} data={data} />
    </div>
  );
};

export default ProductListTable;
