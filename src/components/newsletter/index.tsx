import styles from "./styles.module.scss";
import saladImageOne from "../../assets/salad-01.png";
import saladImageTwo from "../../assets/salad-02.png";

export function Newsletter() {
  return (
    <div className={styles.container}>
      <img src={saladImageOne} alt="salad-01" className={styles.imageOne} />
      <div className={styles.content}>
        <strong className={styles.title}>Deliciousness to your inbox</strong>
        <span className={styles.subtitle}>
          Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqut enim ad minim{" "}
        </span>
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
      <img src={saladImageTwo} alt="salad-02" className={styles.imageTwo} />
    </div>
  );
}
