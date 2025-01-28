import styles from "./styles.module.scss";
import { Clock } from "phosphor-react";

export function RecipeFood() {
  return (
    <div className={styles.container}>
      <Clock size={24} weight="fill" />
      <span className={styles.name}>30 Minutes</span>
    </div>
  );
}
