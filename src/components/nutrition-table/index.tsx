import { Divider } from "../divider";
import styles from "./styles.module.scss";

interface NutritionTableProps {
  nutrition?: {
    calories?: string;
    totalFat?: string;
    protein?: string;
    carbohydrate?: string;
    cholesterol?: string;
  };
}

export function NutritionTable({ nutrition }: NutritionTableProps) {
  return (
    <div className={styles.container}>
      <strong className={styles.title}>Nutrition Information</strong>
      <div className={styles.nutritionContent}>
        <span className={styles.name}>Calories</span>
        <span className={styles.info}>{nutrition?.calories} kcal</span>
      </div>
      <Divider />
      <div className={styles.nutritionContent}>
        <span className={styles.name}>Total Fat</span>
        <span className={styles.info}>{nutrition?.totalFat} g</span>
      </div>
      <Divider />
      <div className={styles.nutritionContent}>
        <span className={styles.name}>Protein</span>
        <span className={styles.info}>{nutrition?.protein} g</span>
      </div>
      <Divider />
      <div className={styles.nutritionContent}>
        <span className={styles.name}>Carbohydrate</span>
        <span className={styles.info}>{nutrition?.carbohydrate} g</span>
      </div>
      <Divider />
      <div className={styles.nutritionContent}>
        <span className={styles.name}>Cholesterol</span>
        <span className={styles.info}>{nutrition?.cholesterol} mg</span>
      </div>
      <p className={styles.subtitle}>
        adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua.{" "}
      </p>
    </div>
  );
}
