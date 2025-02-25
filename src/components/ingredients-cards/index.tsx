import { Link } from "react-router";
import styles from "./styles.module.scss";
import { RecipeProps } from "../../types";
import * as motion from "motion/react-client";

interface IngredientsCardsProps {
  othersRecipe: RecipeProps;
}

export function IngredientsCards({ othersRecipe }: IngredientsCardsProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className={styles.container}
    >
      <Link to={`/recipe-details/${othersRecipe.id}`} className={styles.link}>
        <div className={styles.content}>
          <img
            src={othersRecipe.recipeImage}
            alt={othersRecipe.recipeName}
            className={styles.image}
          />
          <div className={styles.info}>
            <motion.strong
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "anticipate" }}
              className={styles.infoTitle}
            >
              {othersRecipe.recipeName}
            </motion.strong>
            <span className={styles.infoAuthor}>
              By {othersRecipe.author?.authorName}
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
