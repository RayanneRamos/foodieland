import { Task } from "../task";
import styles from "./styles.module.scss";

export function PrepareBoard() {
  return (
    <div className={styles.container}>
      <strong className={styles.title}>For the sauce</strong>
      <div className={styles.taskContainer}>
        <Task />
        <div className={styles.line} />
      </div>
      <div className={styles.taskContainer}>
        <Task />
        <div className={styles.line} />
      </div>
      <div className={styles.taskContainer}>
        <Task />
        <div className={styles.line} />
      </div>
    </div>
  );
}
