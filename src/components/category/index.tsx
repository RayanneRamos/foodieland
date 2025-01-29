import styles from "./styles.module.scss";
import breakfastImage from "../../assets/categories/breakfast.png";

export function Category() {
  return (
    <div className={styles.container}>
      <img src={breakfastImage} alt="" />
      <span className={styles.name}>Breakfast</span>
    </div>
  );
}
