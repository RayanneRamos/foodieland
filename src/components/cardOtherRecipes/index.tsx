import { Clock, ForkKnife, Heart } from 'phosphor-react'
import styles from './styles.module.scss'
import recipesImage from '../../assets/recipes/image-10.png'

export function CardOtherRecipes() {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.cardImage}>
        <img className={styles.recipeImage} src={recipesImage} alt="recipes" />
        <button className={styles.favoriteButton}>
          <Heart size={24} weight='fill' color='#FF6363' />
        </button>
      </div>
      <div className={styles.cardContent}>
        <strong className={styles.cardTitle}>
          Mixed Tropical Fruit Salad with Superfood Boosts
        </strong>
        <div className={styles.cardFooter}>
          <div className={styles.footerInfo}>
            <Clock size={24} weight='fill' color="#000" />
            <span className={styles.footerName}>30 minutes</span>
          </div>
          <div className={styles.footerInfo}>
            <ForkKnife size={24} weight='fill' color="#000" />
            <span className={styles.footerName}>Healthy</span>
          </div>
        </div>
      </div>
    </div>
  )
}