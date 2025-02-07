import { CaretLeft, CaretRight } from "phosphor-react";
import styles from "./styles.module.scss";
import { useState } from "react";

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
  const [dotsPage, setDotsPage] = useState(6);

  function getPages() {
    if (totalPages <= 5) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    return [1, 2, 3, 4, 5, "..."];
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
            onClick={() => onPageChange(page)}
          >
            <span className={styles.number}>{page}</span>
          </button>
        ) : (
          <button
            key={index}
            className={`${
              currentPage >= dotsPage ? styles.active : styles.content
            }`}
            onClick={() => {
              setDotsPage(dotsPage + 5);
              onPageChange(dotsPage);
            }}
          >
            <span className={styles.number}>...</span>
          </button>
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
