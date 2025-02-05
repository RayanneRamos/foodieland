import styles from "./styles.module.scss";

export function Task() {
  return (
    <div className={styles.container}>
      <label className={styles.checkboxContainer}>
        <input type="checkbox" />
        <span className={styles.checkmark}></span>
      </label>
      <span className={styles.taskName}>Lorem ipsum dolor sit amet</span>
    </div>
  );
}
