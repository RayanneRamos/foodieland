import { RecipeFood } from "../recipeFood";
import styles from "./styles.module.scss";
import recipeImage from "../../assets/recipes/image-01.png";
import { Heart } from "phosphor-react";

export function CardRecipes() {
  return (
    <div className={styles.container}>
      <div className={styles.cardImage}>
        <img src={recipeImage} alt="Hamburger" className={styles.recipeImage} />
        <button className={styles.favoriteButton}>
          <Heart size={24} weight="fill" color="#ff6363" />
        </button>
      </div>
      <div className={styles.cardContent}>
        <strong className={styles.cardTitle}>
          Big and Juicy Wagyu Beef Cheeseburger
        </strong>
        <div className={styles.cardInfo}>
          <RecipeFood icon="Clock" name="30 Minutes" />
          <RecipeFood icon="ForkKnife" name="Snack" />
        </div>
      </div>
    </div>
  );
}
