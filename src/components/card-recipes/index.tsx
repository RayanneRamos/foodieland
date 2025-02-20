/* eslint-disable @typescript-eslint/no-unused-expressions */
import { Link } from "react-router";
import { RecipeFood } from "../recipe-food";
import styles from "./styles.module.scss";
import { Heart } from "phosphor-react";
import { RecipeProps } from "../../types";
import { useState } from "react";

interface CardRecipesProps {
  recipe: RecipeProps;
}

export function CardRecipes({ recipe }: CardRecipesProps) {
  const [isFavorite, setIsFavorite] = useState(recipe.recipeFavorite);

  function toggleFavorite() {
    setIsFavorite((prev) => !prev);
  }

  return (
    <div className={styles.container}>
      <Link to={`/recipe-details/${recipe.id}`} className={styles.link}>
        <div className={styles.cardImage}>
          <img
            src={recipe.recipeImage}
            alt={recipe.recipeName}
            className={styles.recipeImage}
          />
          <button
            className={styles.favoriteButton}
            onClick={(event) => {
              event.preventDefault(), toggleFavorite();
            }}
          >
            <Heart
              size={24}
              weight="fill"
              color={isFavorite ? "#ff6363" : "#ccc"}
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
