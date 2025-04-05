import { Clock, ForkKnife } from "phosphor-react";
import styles from "./styles.module.scss";
import { Link } from "react-router";
import { RecipeProps } from "../../types";
import { useState } from "react";
import * as motion from "motion/react-client";
import { FavoriteButton } from "../favorite-button";

interface CardOtherRecipesProps {
  moreRecipe: RecipeProps;
}

export function CardOtherRecipes({ moreRecipe }: CardOtherRecipesProps) {
  const [isFavorite, setIsFavorite] = useState<boolean>(
    moreRecipe.recipeFavorite ?? false
  );

  function toggleFavorite() {
    setIsFavorite((prev) => !prev);
  }

  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className={styles.cardContainer}
    >
      <Link to={`/recipe-details/${moreRecipe.id}`} className={styles.link}>
        <div className={styles.cardImage}>
          <img
            className={styles.recipeImage}
            src={moreRecipe.recipeImage}
            alt={moreRecipe.recipeName}
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
            {moreRecipe.recipeName}
          </motion.strong>
          <div className={styles.cardFooter}>
            <div className={styles.footerInfo}>
              <Clock size={24} weight="fill" color="#000" />
              <span
                className={styles.footerName}
              >{`${moreRecipe.cookTime} Minutes`}</span>
            </div>
            <div className={styles.footerInfo}>
              <ForkKnife size={24} weight="fill" color="#000" />
              <span className={styles.footerName}>
                {moreRecipe.recipeCategory}
              </span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
