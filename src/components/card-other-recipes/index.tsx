import { Clock, ForkKnife, Heart } from "phosphor-react";
import styles from "./styles.module.scss";
import { Link } from "react-router";

interface CardOtherRecipesProps {
  moreRecipe: {
    id: string;
    image: string;
    favorite: boolean;
    name: string;
    clock: string;
    category: string;
  };
}

export function CardOtherRecipes({ moreRecipe }: CardOtherRecipesProps) {
  return (
    <div className={styles.cardContainer}>
      <Link to={`/recipe-details/${moreRecipe.id}`} className={styles.link}>
        <div className={styles.cardImage}>
          <img
            className={styles.recipeImage}
            src={moreRecipe.image}
            alt={moreRecipe.name}
          />
          <button className={styles.favoriteButton}>
            <Heart
              size={24}
              weight="fill"
              color={moreRecipe.favorite ? "#ff6363" : "#ccc"}
            />
          </button>
        </div>
        <div className={styles.cardContent}>
          <strong className={styles.cardTitle}>{moreRecipe.name}</strong>
          <div className={styles.cardFooter}>
            <div className={styles.footerInfo}>
              <Clock size={24} weight="fill" color="#000" />
              <span
                className={styles.footerName}
              >{`${moreRecipe.clock} Minutes`}</span>
            </div>
            <div className={styles.footerInfo}>
              <ForkKnife size={24} weight="fill" color="#000" />
              <span className={styles.footerName}>{moreRecipe.category}</span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
