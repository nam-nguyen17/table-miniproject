import React, { useState } from "react";
import { DOTS, usePagination } from "../../hooks/usePagination";
import styles from "../../styles/pagination.module.scss";

interface PaginationProps {
  onPageChange: (page: number) => void;
  totalCount: number;
  siblingCount?: number;
  currentPage: number;
  pageSize: number;
  className?: string;
}

const Pagination: React.FC<PaginationProps> = (props) => {
  const {
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
  } = props;

  const paginationRange: (any | typeof DOTS)[] =
    usePagination({
      currentPage,
      totalCount,
      siblingCount,
      pageSize,
    }) || [];
  const [inputPage, setInputPage] = useState("");

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  const onInputPageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputPage(event.target.value);
  };

  const goToPage = () => {
    const pageNumber = parseInt(inputPage);
    if (!isNaN(pageNumber) && pageNumber >= 1 && pageNumber <= lastPage) {
      onPageChange(pageNumber);
    }
  };

  let lastPage = paginationRange[paginationRange.length - 1];
  return (
    <ul className={styles.pagination_container}>
      <li
        className={`${styles.pagination_item} ${
          currentPage === 1 ? styles.disabled : ""
        }`}
        onClick={onPrevious}>
        <div className={`${styles.arrow} ${styles.left}`} />
      </li>
      {paginationRange.map((pageNumber, index) => {
        if (pageNumber === DOTS) {
          return (
            <li
              key={index}
              className={`${styles.pagination_item} ${styles.dots}`}>
              &#8230;
            </li>
          );
        }

        return (
          <li
            key={index}
            className={`${styles.pagination_item} ${
              pageNumber === currentPage ? styles.selected : ""
            }`}
            onClick={() => onPageChange(pageNumber as number)}>
            {pageNumber}
          </li>
        );
      })}
      <li
        className={`${styles.pagination_item} ${
          currentPage === lastPage ? styles.disabled : ""
        }`}
        onClick={onNext}>
        <div className={`${styles.arrow} ${styles.right}`} />
      </li>
      <li className={`${styles.pagination_item} ${styles.input}`}>
        <input
          type="text"
          placeholder={`Go to page (1 - ${lastPage})`}
          value={inputPage}
          onChange={onInputPageChange}
        />
        <button onClick={goToPage}>Go</button>
      </li>
    </ul>
  );
};

export default Pagination;
