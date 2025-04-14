import { ButtonHTMLAttributes } from "react";
import styles from "./styles.module.scss";
import * as motion from "motion/react-client";

interface CategoryProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  image: string;
  name: string;
}

export function Category({ image, name, ...props }: CategoryProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className={styles.container}
      {...props}
    >
      <img src={image} alt={name} />
      <motion.span
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "anticipate" }}
        className={styles.name}
      >
        {name}
      </motion.span>
    </motion.button>
  );
}
