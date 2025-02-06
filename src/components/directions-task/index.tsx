import styles from "./styles.module.scss";

export function DirectionsTask() {
  return (
    <div className={styles.container}>
      <label className={styles.checkboxContainer}>
        <input type="checkbox" />
        <span className={styles.checkmark}></span>
      </label>
      <span className={styles.directionTaskName}>
        1. Lorem ipsum dolor sit amet
      </span>
    </div>
  );
}
