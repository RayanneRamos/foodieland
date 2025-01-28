import styles from "./styles.module.scss";
import paperImage from "../../assets/paper.svg";

export function Tag() {
  return (
    <div className={styles.container}>
      <img src={paperImage} alt="paper-image" />
      <span className={styles.tagName}>Hot Recipes</span>
    </div>
  );
}
