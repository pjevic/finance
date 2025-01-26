/** @format */
import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { CaretDown } from "@phosphor-icons/react";

import Button from "../Button/Button";
import styles from "./Pagination.module.scss";

const PAGE_SIZE = 10;
const VISIBLE_PAGES = 5;

function Pagination({ totalItems }) {
  const [searchParams, setSearchParams] = useSearchParams();

  const currentPage = Number(searchParams.get("page")) || 1;
  const pageCount = useMemo(
    () => Math.ceil(totalItems / PAGE_SIZE),
    [totalItems]
  );

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      searchParams.set("page", currentPage - 1);
      setSearchParams(searchParams);
    }
  };

  const handleNextPage = () => {
    if (currentPage < pageCount) {
      searchParams.set("page", currentPage + 1);
      setSearchParams(searchParams);
    }
  };

  const handlePageClick = (page) => {
    searchParams.set("page", page);
    setSearchParams(searchParams);
  };

  const getVisiblePages = () => {
    if (pageCount <= VISIBLE_PAGES) {
      // If total pages are less than or equal to 5, show all pages
      return Array.from({ length: pageCount }, (_, index) => index + 1);
    }

    const pages = [];
    const hasLeftEllipsis = currentPage > 3;
    const hasRightEllipsis = currentPage < pageCount - 2;

    if (!hasLeftEllipsis && hasRightEllipsis) {
      // Near the beginning (1, 2, 3, 4, ..., 10)
      pages.push(1, 2, 3, 4, "...", pageCount);
    } else if (hasLeftEllipsis && !hasRightEllipsis) {
      // Near the end (1, ..., 7, 8, 9, 10)
      pages.push(
        1,
        "...",
        pageCount - 3,
        pageCount - 2,
        pageCount - 1,
        pageCount
      );
    } else if (hasLeftEllipsis && hasRightEllipsis) {
      // In the middle (1, ..., 4, 5, 6, ..., 10)
      pages.push(
        1,
        "...",
        currentPage - 1,
        currentPage,
        currentPage + 1,
        "...",
        pageCount
      );
    }

    return pages;
  };

  if (pageCount <= 1) return null;

  return (
    <div className={styles.pagination}>
      <Button
        label="Prev"
        icon={
          <CaretDown
            size="1.6rem"
            weight="fill"
            style={{ transform: "rotate(90deg)" }}
          />
        }
        iconPosition="left"
        onClick={handlePreviousPage}
        disabled={currentPage === 1}
      />

      <div className={styles.pagination__pages}>
        {getVisiblePages().map((page, index) => (
          <Button
            key={index}
            type={page === currentPage ? "square--active" : "square"}
            onClick={() => typeof page === "number" && handlePageClick(page)}
            disabled={page === "..."} // Disable ellipsis buttons
          >
            {page}
          </Button>
        ))}
      </div>

      <Button
        label="Next"
        icon={
          <CaretDown
            size="1.6rem"
            weight="fill"
            style={{ transform: "rotate(-90deg)" }}
          />
        }
        iconPosition="right"
        onClick={handleNextPage}
        disabled={currentPage === pageCount}
      />
    </div>
  );
}

export default Pagination;
