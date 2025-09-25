import styles from "./styles.module.scss";
import { motion } from "motion/react";
import notFoundImage from "../../assets/not-found.png";
import { Link } from "react-router";
import { Button } from "../../components/button";
import { Navigation } from "../../components/navigation";

export function NotFound() {
  return (
    <div className={styles.container}>
      <Navigation />
      <div className={styles.content}>
        <motion.img
          src={notFoundImage}
          className={styles.image}
          alt="not found"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
        />
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className={styles.title}
        >
          Oops! Recipe not found 🔍
        </motion.h1>
        <p className={styles.subtitle}>
          Look like you've wandered into the wrong kitchen. Return to the home
          page and discover new delicious recipes!
        </p>
        <Link to="/">
          <Button name="Back to home" />
        </Link>
      </div>
    </div>
  );
}
