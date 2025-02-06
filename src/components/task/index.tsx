import { useState } from "react";
import styles from "./styles.module.scss";

export function Task() {
  const [checked, setChecked] = useState(false);

  return (
    <div className={styles.container}>
      <label className={styles.checkboxContainer}>
        <input
          type="checkbox"
          checked={checked}
          onChange={() => setChecked(!checked)}
        />
        <span className={styles.checkmark}></span>
      </label>
      <span className={`${styles.taskName} ${checked ? styles.completed : ""}`}>
        Lorem ipsum dolor sit amet
      </span>
    </div>
  );
}
