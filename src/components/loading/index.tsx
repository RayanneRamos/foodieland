import styles from "./styles.module.scss";
import { motion } from "motion/react";

export function Loading() {
  return (
    <div className={styles.loadingContainer} role="status">
      <motion.div
        className={styles.loadingCircle}
        data-testid="loading-circle"
        animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      />
      <p className={styles.loadingText}>Carregando...</p>
    </div>
  );
}
