import { Link } from "react-router";
import { RecipeFood } from "../recipe-food";
import styles from "./styles.module.scss";
import { Heart } from "phosphor-react";
import { RecipeProps } from "../../types";

interface CardRecipesProps {
  recipe: RecipeProps;
}

export function CardRecipes({ recipe }: CardRecipesProps) {
  return (
    <div className={styles.container}>
      <Link to={`/recipe-details/${recipe.id}`} className={styles.link}>
        <div className={styles.cardImage}>
          <img
            src={recipe.recipeImage}
            alt={recipe.recipeName}
            className={styles.recipeImage}
          />
          <button className={styles.favoriteButton}>
            <Heart
              size={24}
              weight="fill"
              //color={recipe.favorite ? "#ff6363" : "#ccc"}
            />
          </button>
        </div>
        <div className={styles.cardContent}>
          <strong className={styles.cardTitle}>{recipe.recipeName}</strong>
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
    </div>
  );
}
