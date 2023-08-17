import React, { useEffect, useMemo, useState } from 'react'
import { Product } from '../../_types_'
import SearchBar from '../../components/search/SearchBar'
import Table from '../../components/table/Table'
import { useSortableTable } from '../../hooks/useSortableTable'
import { fetchData, filterData } from '../../utils/helpers'
import Pagination from './Pagination'
import {
  headerProductMapping,
  PageSize,
  ProductHeader,
  SortDirection,
} from '../../utils/constants'

const ProductTable: React.FC = () => {
  const [productsData, setProductsData] = useState<Product[]>([])
  const [currentPage, setCurrentPage] = useState(1)
  const [searchQuery, setSearchQuery] = useState('')
  const [sortColumn, setSortColumn] = useState<keyof Product | null>(null)
  const [sortOrder, setSortOrder] = useState<SortDirection>(
    SortDirection.Ascending
  )

  const fetchProductData = async () => {
    const data = await fetchData<Product>('./data/products_data.json')
    setProductsData(data)
  }

  useEffect(() => {
    fetchProductData()
  }, [])

  // filteredData is the data that is filtered by the search query
  const filteredData = useMemo(() => {
    return filterData<Product>(productsData, searchQuery, [
      ProductHeader.ProductName,
      ProductHeader.Category,
      ProductHeader.ExpirationDate,
      ProductHeader.Quantity,
      ProductHeader.Price,
    ])
  }, [searchQuery, productsData])

  // currentTableData is the data that is sorted and paginated
  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize
    const lastPageIndex = firstPageIndex + PageSize
    return filteredData.slice(firstPageIndex, lastPageIndex)
  }, [currentPage, filteredData])

  // sortedData is the data that is sorted
  const sortedData = useSortableTable<Product>(
    currentTableData,
    sortColumn,
    sortOrder
  )

  const sortProducts = (column: keyof Product) => {
    setSortColumn(column)
    setSortOrder(
      sortColumn === column && sortOrder === SortDirection.Ascending
        ? SortDirection.Descending
        : SortDirection.Ascending
    )
  }

  return (
    <div>
      <SearchBar onSearch={(query) => setSearchQuery(query)} />
      <Table
        headers={Object.values(ProductHeader)}
        data={sortedData}
        headerMapping={headerProductMapping}
        sortColumn={sortColumn}
        sortOrder={sortOrder}
        onSort={sortProducts}
      />
      <Pagination
        currentPage={currentPage}
        totalCount={filteredData.length}
        pageSize={PageSize}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </div>
  )
}

export default ProductTable
