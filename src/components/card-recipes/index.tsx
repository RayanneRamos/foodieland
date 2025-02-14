import { Link } from "react-router";
import { RecipeFood } from "../recipe-food";
import styles from "./styles.module.scss";
import { Heart } from "phosphor-react";

interface CardRecipesProps {
  recipe: {
    id: string;
    image: string;
    favorite?: boolean;
    name?: string;
    clock?: string;
    category?: string;
  };
}

export function CardRecipes({ recipe }: CardRecipesProps) {
  return (
    <div className={styles.container}>
      <Link to={`/recipe-details/${recipe.id}`} className={styles.link}>
        <div className={styles.cardImage}>
          <img
            src={recipe.image}
            alt={recipe.name}
            className={styles.recipeImage}
          />
          <button className={styles.favoriteButton}>
            <Heart
              size={24}
              weight="fill"
              color={recipe.favorite ? "#ff6363" : "#ccc"}
            />
          </button>
        </div>
        <div className={styles.cardContent}>
          <strong className={styles.cardTitle}>{recipe.name}</strong>
          <div className={styles.cardInfo}>
            {recipe.clock && (
              <RecipeFood icon="Clock" name={`${recipe.clock} Minutes`} />
            )}
            {recipe.category && (
              <RecipeFood icon="ForkKnife" name={recipe.category} />
            )}
          </div>
        </div>
      </Link>
    </div>
  );
}
