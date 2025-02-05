import styles from "./styles.module.scss";
import cardImage from "../../assets/recipes/image-05.png";

export function IngredientsCards() {
  return (
    <div className={styles.container}>
      <img src={cardImage} alt="" />
      <div className={styles.info}>
        <strong className={styles.infoTitle}>
          Chicken Meatball with Creamy Chees...
        </strong>
        <span className={styles.infoAuthor}>By Andreas Paula</span>
      </div>
    </div>
  );
}
