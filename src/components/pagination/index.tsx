import { CaretRight, DotsThree } from "phosphor-react";
import styles from "./styles.module.scss";

export function Pagination() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <span className={styles.number}>1</span>
      </div>
      <div className={styles.content}>
        <span className={styles.number}>2</span>
      </div>
      <div className={styles.content}>
        <span className={styles.number}>3</span>
      </div>
      <div className={styles.content}>
        <span className={styles.number}>4</span>
      </div>
      <div className={styles.content}>
        <span className={styles.number}>5</span>
      </div>
      <div className={styles.content}>
        <span className={styles.number}>
          <DotsThree size={16} weight="fill" color="#000" />
        </span>
      </div>
      <div className={styles.content}>
        <span className={styles.number}>
          <CaretRight size={16} weight="fill" color="#000" />
        </span>
      </div>
    </div>
  );
}
