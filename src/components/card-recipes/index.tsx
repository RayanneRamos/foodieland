import { Link } from "react-router-dom";
import { RecipeFood } from "../recipe-food";
import styles from "./styles.module.scss";
import { RecipeProps } from "../../types";
import { useState } from "react";
import * as motion from "motion/react-client";
import { FavoriteButton } from "../favorite-button";

interface CardRecipesProps {
  recipe: RecipeProps;
}

export function CardRecipes({ recipe }: CardRecipesProps) {
  const [isFavorite, setIsFavorite] = useState<boolean>(
    recipe.recipeFavorite ?? false
  );

  function toggleFavorite() {
    setIsFavorite((prev) => !prev);
  }

  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className={styles.container}
    >
      <Link to={`/recipe-details/${recipe.id}`} className={styles.link}>
        <div className={styles.cardImage}>
          <img
            src={recipe.recipeImage}
            alt={recipe.recipeName}
            className={styles.recipeImage}
          />
          <FavoriteButton
            isFavorite={isFavorite}
            toggleFavorite={toggleFavorite}
          />
        </div>
        <div className={styles.cardContent}>
          <motion.strong
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "anticipate" }}
            className={styles.cardTitle}
          >
            {recipe.recipeName}
          </motion.strong>
          <div className={styles.cardInfo}>
            {recipe.cookTime && (
              <RecipeFood icon="Clock" name={`${recipe.cookTime} Minutes`} />
            )}
            {recipe.recipeCategory && (
              <RecipeFood icon="ForkKnife" name={recipe.recipeCategory} />
            )}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
