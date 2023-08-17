import { useMemo } from 'react'

export const useSortableTable = <T,>(
  data: T[],
  sortColumn: keyof T | null,
  sortOrder: 'asc' | 'desc'
) => {
  const sortedData = useMemo(() => {
    const sorted = [...data]

    if (sortColumn) {
      sorted.sort((a, b) => {
        const aValue = a[sortColumn]
        const bValue = b[sortColumn]
        if (aValue > bValue) return sortOrder === 'asc' ? 1 : -1
        if (aValue < bValue) return sortOrder === 'asc' ? -1 : 1
        return 0
      })
    }

    return sorted
  }, [data, sortColumn, sortOrder])

  return sortedData
}
