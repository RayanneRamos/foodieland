import { Link } from "react-router";
import styles from "./styles.module.scss";
import { RecipeProps } from "../../types";

interface IngredientsCardsProps {
  othersRecipe: RecipeProps;
}

export function IngredientsCards({ othersRecipe }: IngredientsCardsProps) {
  return (
    <div className={styles.container}>
      <Link to={`/recipe-details/${othersRecipe.id}`} className={styles.link}>
        <div className={styles.content}>
          <img
            src={othersRecipe.recipeImage}
            alt={othersRecipe.recipeName}
            className={styles.image}
          />
          <div className={styles.info}>
            <strong className={styles.infoTitle}>
              {othersRecipe.recipeName}
            </strong>
            <span className={styles.infoAuthor}>
              By {othersRecipe.author?.authorName}
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
}
