/** @format */
import { useMemo, useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { CaretDown } from "@phosphor-icons/react";

import Button from "../Button/Button";
import styles from "./Pagination.module.scss";

import { PAGE_SIZE } from "../../utils/constants";

function Pagination({ totalItems }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const [visiblePages, setVisiblePages] = useState(5); // Default for desktop

  const currentPage = Number(searchParams.get("page")) || 1;
  const pageCount = useMemo(
    () => Math.ceil(totalItems / PAGE_SIZE),
    [totalItems]
  );

  useEffect(() => {
    const updateVisiblePages = () => {
      setVisiblePages(window.innerWidth < 450 ? 4 : 5); // Adjust based on screen size
    };

    updateVisiblePages();
    window.addEventListener("resize", updateVisiblePages);

    return () => window.removeEventListener("resize", updateVisiblePages);
  }, []);

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
    const hasLeftEllipsis = currentPage > 2;
    const hasRightEllipsis = currentPage < pageCount - 1;

    const showAllPages = pageCount <= visiblePages;

    const getMobilePages = () => {
      if (!hasLeftEllipsis && hasRightEllipsis) {
        return [1, 2, "...", pageCount];
      }
      if (hasLeftEllipsis && !hasRightEllipsis) {
        return [1, "...", pageCount - 1, pageCount];
      }
      if (hasLeftEllipsis && hasRightEllipsis) {
        return [1, "...", currentPage, "..."];
      }
    };

    const getDesktopPages = () => {
      if (!hasLeftEllipsis && hasRightEllipsis) {
        return [1, 2, 3, 4, "...", pageCount];
      }
      if (hasLeftEllipsis && !hasRightEllipsis) {
        return [
          1,
          "...",
          pageCount - 3,
          pageCount - 2,
          pageCount - 1,
          pageCount,
        ];
      }
      if (hasLeftEllipsis && hasRightEllipsis) {
        return [
          1,
          "...",
          currentPage - 1,
          currentPage,
          currentPage + 1,
          "...",
          pageCount,
        ];
      }
    };

    if (showAllPages) {
      return Array.from({ length: pageCount }, (_, index) => index + 1);
    }

    if (visiblePages === 4) {
      return getMobilePages();
    }

    return getDesktopPages();
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
            disabled={page === "..."}
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
