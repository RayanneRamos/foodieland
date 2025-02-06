import { Divider } from "../../components/divider";
import { Navigation } from "../../components/navigation";
import styles from "./styles.module.scss";

export function BlogList() {
  return (
    <div className={styles.container}>
      <Navigation />
      <Divider />
      <div className={styles.header}>
        <h1 className={styles.headerTitle}>Blog & Article</h1>
        <p className={styles.headerSubtitle}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore
        </p>
        <div className={styles.form}>
          <input
            className={styles.inputEmail}
            name="email"
            type="email"
            placeholder="Your email address..."
          />
          <button className={styles.button}>Subscribe</button>
        </div>
      </div>
    </div>
  );
}
