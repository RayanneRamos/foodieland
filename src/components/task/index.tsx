import { useState } from "react";
import styles from "./styles.module.scss";

interface TaskProps {
  ingredients?: {
    ingredientsQuantity?: string;
    ingredientsName?: string;
  };
}

export function Task({ ingredients }: TaskProps) {
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
        {ingredients?.ingredientsQuantity} {ingredients?.ingredientsName}
      </span>
    </div>
  );
}
