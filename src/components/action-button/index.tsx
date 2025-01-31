import { Printer } from "phosphor-react";
import styles from "./styles.module.scss";

export function ActionButton() {
  return (
    <div className={styles.container}>
      <button className={styles.button}>
        <Printer size={24} weight="regular" />
      </button>
      <span className={styles.name}>Print</span>
    </div>
  );
}
