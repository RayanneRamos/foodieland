import { Link } from "react-router";
import styles from "./styles.module.scss";

interface IngredientsCardsProps {
  othersRecipe: {
    id: string;
    image: string;
    name: string;
    author: string;
  };
}

export function IngredientsCards({ othersRecipe }: IngredientsCardsProps) {
  return (
    <div className={styles.container}>
      <Link to={`/recipe-details/${othersRecipe.id}`} className={styles.link}>
        <img src={othersRecipe.image} alt={othersRecipe.name} />
        <div className={styles.info}>
          <strong className={styles.infoTitle}>{othersRecipe.name}</strong>
          <span className={styles.infoAuthor}>By {othersRecipe.author}</span>
        </div>
      </Link>
    </div>
  );
}
