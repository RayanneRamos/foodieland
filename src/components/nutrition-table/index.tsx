import { Divider } from "../divider";
import styles from "./styles.module.scss";

export function NutritionTable() {
  return (
    <div className={styles.container}>
      <strong className={styles.title}>Nutrition Information</strong>
      <div className={styles.nutritionContent}>
        <span className={styles.name}>Calories</span>
        <span className={styles.info}>219.9 kcal</span>
      </div>
      <Divider />
      <div className={styles.nutritionContent}>
        <span className={styles.name}>Total Fat</span>
        <span className={styles.info}>10.7 g</span>
      </div>
      <Divider />
      <div className={styles.nutritionContent}>
        <span className={styles.name}>Protein</span>
        <span className={styles.info}>7.9 g</span>
      </div>
      <Divider />
      <div className={styles.nutritionContent}>
        <span className={styles.name}>Carbohydrate</span>
        <span className={styles.info}>22.3 g</span>
      </div>
      <Divider />
      <div className={styles.nutritionContent}>
        <span className={styles.name}>Cholesterol</span>
        <span className={styles.info}>37.4 mg</span>
      </div>
      <p className={styles.subtitle}>
        adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua.{" "}
      </p>
    </div>
  );
}
