import { Clock } from "phosphor-react";
import styles from "./styles.module.scss";

export function RecipeInfo() {
  return (
    <div className={styles.container}>
      <Clock size={24} weight="fill" color="#000" />
      <div className={styles.info}>
        <span className={styles.title}>Prep time</span>
        <span className={styles.subtitle}>15 Minutes</span>
      </div>
    </div>
  );
}
