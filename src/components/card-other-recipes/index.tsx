/* eslint-disable @typescript-eslint/no-unused-expressions */
import { Clock, ForkKnife, Heart } from "phosphor-react";
import styles from "./styles.module.scss";
import { Link } from "react-router";
import { RecipeProps } from "../../types";
import { useState } from "react";

interface CardOtherRecipesProps {
  moreRecipe: RecipeProps;
}

export function CardOtherRecipes({ moreRecipe }: CardOtherRecipesProps) {
  const [isFavorite, setIsFavorite] = useState(moreRecipe.recipeFavorite);

  function toggleFavorite() {
    setIsFavorite((prev) => !prev);
  }

  return (
    <div className={styles.cardContainer}>
      <Link to={`/recipe-details/${moreRecipe.id}`} className={styles.link}>
        <div className={styles.cardImage}>
          <img
            className={styles.recipeImage}
            src={moreRecipe.recipeImage}
            alt={moreRecipe.recipeName}
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
          <strong className={styles.cardTitle}>{moreRecipe.recipeName}</strong>
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
    </div>
  );
}
