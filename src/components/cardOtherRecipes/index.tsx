import { Clock, ForkKnife, Heart } from 'phosphor-react'
import styles from './styles.module.scss'

interface CardOtherRecipesProps {
  moreRecipe: {
    id: string
    image: string
    favorite: boolean
    name: string
    clock: string
    category: string
  }
}

export function CardOtherRecipes({ moreRecipe }: CardOtherRecipesProps) {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.cardImage}>
        <img className={styles.recipeImage} src={moreRecipe.image} alt="recipes" />
        <button className={styles.favoriteButton}>
          <Heart size={24} weight='fill' color={moreRecipe.favorite ? "#ff6363" : "#ccc"} />
        </button>
      </div>
      <div className={styles.cardContent}>
        <strong className={styles.cardTitle}>
          {moreRecipe.name}
        </strong>
        <div className={styles.cardFooter}>
          <div className={styles.footerInfo}>
            <Clock size={24} weight='fill' color="#000" />
            <span className={styles.footerName}>{`${moreRecipe.clock} Minutes`}</span>
          </div>
          <div className={styles.footerInfo}>
            <ForkKnife size={24} weight='fill' color="#000" />
            <span className={styles.footerName}>{moreRecipe.category}</span>
          </div>
        </div>
      </div>
    </div>
  )
}