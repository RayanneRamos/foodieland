import { Divider } from "../../components/divider";
import { Navigation } from "../../components/navigation";
import styles from "./styles.module.scss";
import bannerImage from "../../assets/banner.png";
import { Tag } from "../../components/tag";
import { RecipeFood } from "../../components/recipeFood";
import { Avatar } from "../../components/avatar";
import { Button } from "../../components/button";
import { Category } from "../../components/category";
import { categories } from "../../utils/categories";

export function Home() {
  return (
    <div className={styles.container}>
      <Navigation />
      <Divider />
      <div className={styles.headerContainer}>
        <div className={styles.backgroundLeft} />
        <div className={styles.headerContent}>
          <div className={styles.headerInfo}>
            <Tag />
            <h1 className={styles.title}>Spicy delicious chicken wings</h1>
            <p className={styles.subtitle}>
              Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad
              minim{" "}
            </p>
            <div className={styles.tagContainer}>
              <RecipeFood icon="Clock" name="30 Minutes" />
              <RecipeFood icon="ForkKnife" name="Chicken" />
            </div>
            <div className={styles.headerFooter}>
              <Avatar />
              <Button />
            </div>
          </div>
          <img src={bannerImage} alt="banner" />
        </div>

        <div className={styles.backgroundRight} />
      </div>
      <div className={styles.categoriesContainer}>
        <div className={styles.categoriesHeader}>
          <strong className={styles.categoriesTitle}>Categories</strong>
          <button className={styles.categoriesButton}>
            <span className={styles.buttonText}>View All Categories</span>
          </button>
        </div>
        <div className={styles.categoriesContent}>
          {categories.map((category) => (
            <Category
              key={category.id}
              image={category.image}
              name={category.name}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
