import styles from "./styles.module.scss";

interface DirectionsTaskProps {
  task: string;
}

export function DirectionsTask({ task }: DirectionsTaskProps) {
  return (
    <div className={styles.container}>
      <label className={styles.checkboxContainer}>
        <input type="checkbox" />
        <span className={styles.checkmark}></span>
      </label>
      <span className={styles.directionTaskName}>{task}</span>
    </div>
  );
}
