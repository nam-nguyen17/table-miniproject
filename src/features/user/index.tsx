import React, { useEffect, useMemo, useState } from 'react'
import { User } from '../../_types_'
import SearchBar from '../../components/search/SearchBar'
import TableHeader from '../../components/table/TableHeader'
import TableRow from '../../components/table/TableRow'
import styles from '../../components/table/styles.module.scss'
import { useSortableTable } from '../../hooks/useSortableTable'
import { fetchData, filterData } from '../../utils/helpers'
import {
  headerUserMapping,
  PageSize,
  UserHeader,
  SortDirection,
} from '../../utils/constants'

const UserTable: React.FC = () => {
  const [usersData, setUsersData] = useState<User[]>([])
  const [tableData, setTableData] = useState<User[]>([])
  const [pageIndex, setPageIndex] = useState(1)
  const [searchQuery, setSearchQuery] = useState('')
  const [sortColumn, setSortColumn] = useState<keyof User | null>(null)
  const [sortOrder, setSortOrder] = useState<SortDirection>(
    SortDirection.Ascending
  )

  const fetchUserData = async () => {
    const data = await fetchData<User>('./data/users_data.json')
    setUsersData(data)
  }

  useEffect(() => {
    fetchUserData()
  }, [])

  // filteredData is the data that is filtered by the search query
  const filteredData = useMemo(() => {
    return filterData<User>(usersData, searchQuery, [
      UserHeader.FirstName,
      UserHeader.LastName,
      UserHeader.Email,
      UserHeader.FavoriteColor,
      UserHeader.PhoneNumber,
    ])
  }, [searchQuery, usersData])

  // previousTableData is the data that is rendered before the current page
  const previousTableData = useMemo(() => {
    const firstPageIndex = (pageIndex - 1) * PageSize
    return filteredData.slice(0, firstPageIndex)
  }, [pageIndex, filteredData])

  // currentTableData is the data that is rendered on the current page
  const currentTableData = useMemo(() => {
    const firstPageIndex = (pageIndex - 1) * PageSize
    const lastPageIndex = firstPageIndex + PageSize
    return filteredData.slice(firstPageIndex, lastPageIndex)
  }, [pageIndex, filteredData])

  useEffect(() => {
    setTableData([...previousTableData, ...currentTableData])
  }, [currentTableData, pageIndex, previousTableData, usersData])

  const handleScroll = (e: React.UIEvent<HTMLTableSectionElement, UIEvent>) => {
    const target = e.target as HTMLTableSectionElement
    if (target.scrollTop + target.clientHeight + 1 >= target.scrollHeight) {
      setPageIndex((prevPage) => prevPage + 1)
      console.log('bottom')
    }
  }

  // sortedData is the data that is sorted by the sort column and sort order
  const sortedData = useSortableTable<User>(tableData, sortColumn, sortOrder)

  const sortUsers = (column: keyof User) => {
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
      <table className={styles.table}>
        <TableHeader
          headers={Object.values(UserHeader)}
          headerMapping={headerUserMapping}
          sortColumn={sortColumn}
          sortOrder={sortOrder}
          onSort={sortUsers}
        />
        <tbody
          id="infinite-table"
          className={styles.table__body}
          onScroll={handleScroll}
        >
          {sortedData.map((item, index) => (
            <TableRow
              key={index}
              rowData={item}
              headers={Object.values(UserHeader)}
            />
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default UserTable
