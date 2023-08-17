import React, { useState } from 'react'
import { DOTS, usePagination } from '../../hooks/usePagination'
import styles from '../../styles/pagination.module.scss'

interface PaginationProps {
  onPageChange: (page: number) => void
  totalCount: number
  siblingCount?: number
  currentPage: number
  pageSize: number
  className?: string
}

const Pagination: React.FC<PaginationProps> = (props) => {
  const {
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
  } = props

  const paginationRange: (any | typeof DOTS)[] =
    usePagination({
      currentPage,
      totalCount,
      siblingCount,
      pageSize,
    }) || []
  const [inputPage, setInputPage] = useState('')

  if (currentPage === 0 || paginationRange.length < 2) {
    return null
  }

  const onNext = () => {
    onPageChange(currentPage + 1)
  }

  const onPrevious = () => {
    onPageChange(currentPage - 1)
  }

  const goToPage = () => {
    const pageNumber = parseInt(inputPage)
    if (!isNaN(pageNumber) && pageNumber >= 1 && pageNumber <= lastPage) {
      onPageChange(pageNumber)
    }
  }

  const onInputPageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputPage(event.target.value)
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    goToPage()
  }

  let lastPage = paginationRange[paginationRange.length - 1]
  return (
    <ul className={styles.container}>
      <li
        className={`${styles.container_items} ${
          currentPage === 1 ? styles.disabled : ''
        }`}
        onClick={onPrevious}
      >
        <div className={`${styles.arrow} ${styles.left}`} />
      </li>
      {paginationRange.map((pageNumber, index) => {
        if (pageNumber === DOTS) {
          return (
            <li
              key={index}
              className={`${styles.container_items} ${styles.dots}`}
            >
              &#8230;
            </li>
          )
        }

        return (
          <li
            key={index}
            className={`${styles.container_items} ${
              pageNumber === currentPage ? styles.selected : ''
            }`}
            onClick={() => onPageChange(pageNumber as number)}
          >
            {pageNumber}
          </li>
        )
      })}
      <li
        className={`${styles.container_items} ${
          currentPage === lastPage ? styles.disabled : ''
        }`}
        onClick={onNext}
      >
        <div className={`${styles.arrow} ${styles.right}`} />
      </li>
      <li className={`${styles.container_items} ${styles.input}`}>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder={`Go to page (1 - ${lastPage})`}
            value={inputPage}
            onChange={onInputPageChange}
          />
          <button onClick={goToPage}>Go</button>
        </form>
      </li>
    </ul>
  )
}

export default Pagination
