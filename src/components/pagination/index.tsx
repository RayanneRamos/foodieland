/* eslint-disable prefer-const */
import { CaretLeft, CaretRight } from "phosphor-react";
import styles from "./styles.module.scss";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  function getPages() {
    const visiblePages = 5;
    let start = Math.max(1, currentPage - Math.floor(visiblePages / 2));
    let end = Math.min(totalPages, start + visiblePages - 1);

    if (end - start < visiblePages - 1) {
      start = Math.max(1, end - visiblePages + 1);
    }

    const pages: (number | string)[] = Array.from(
      { length: end - start + 1 },
      (_, i) => start + i
    );

    if (start > 1) {
      pages.unshift(1, "...");
    }
    if (end < totalPages) {
      pages.push("...", totalPages);
    }

    return pages;
  }

  const pages = getPages();

  return (
    <div className={styles.container}>
      <button
        className={styles.content}
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <span className={styles.number}>
          <CaretLeft size={16} weight="fill" color="#000" />
        </span>
      </button>
      {pages.map((page, index) =>
        typeof page === "number" ? (
          <button
            className={currentPage === page ? styles.active : styles.content}
            key={index}
            onClick={() => typeof page === "number" && onPageChange(page)}
          >
            <span className={styles.number}>{page}</span>
          </button>
        ) : (
          <span key={index} className={styles.content}>
            ...
          </span>
        )
      )}
      <button
        className={styles.content}
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        <span className={styles.number}>
          <CaretRight size={16} weight="fill" color="#000" />
        </span>
      </button>
    </div>
  );
}
