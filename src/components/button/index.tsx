import { PlayCircle } from "phosphor-react";
import styles from "./styles.module.scss";

export function Button() {
  return (
    <button className={styles.container}>
      <span className={styles.name}>View Recipes</span>
      <PlayCircle size={24} weight="fill" />
    </button>
  );
}
