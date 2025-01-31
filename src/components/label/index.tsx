import { ForkKnife } from "phosphor-react";
import styles from "./styles.module.scss";

export function Label() {
  return (
    <div className={styles.container}>
      <ForkKnife size={24} weight="fill" />
      <span className={styles.name}>Chicken</span>
    </div>
  );
}
