import { CardBlogPosts } from "../../components/card-blog-posts";
import { Divider } from "../../components/divider";
import { IngredientsCards } from "../../components/ingredients-cards";
import { Navigation } from "../../components/navigation";
import { tastyRecipes } from "../../utils/tasty-recipes";
import adsImage from "../../assets/recipes/image-06.png";
import styles from "./styles.module.scss";
import { Pagination } from "../../components/pagination";
import { Newsletter } from "../../components/newsletter";
import { Footer } from "../../components/footer";

export function BlogList() {
  return (
    <div className={styles.container}>
      <Navigation />
      <Divider />
      <div className={styles.header}>
        <h1 className={styles.headerTitle}>Blog & Article</h1>
        <p className={styles.headerSubtitle}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore
        </p>
        <div className={styles.form}>
          <input
            className={styles.inputEmail}
            name="email"
            type="email"
            placeholder="Your email address..."
          />
          <button className={styles.button}>Subscribe</button>
        </div>
      </div>
      <div className={styles.main}>
        <div className={styles.posts}>
          <CardBlogPosts />
          <CardBlogPosts />
          <CardBlogPosts />
          <CardBlogPosts />
          <CardBlogPosts />
          <CardBlogPosts />
        </div>
        <div className={styles.tastyRecipes}>
          <strong className={styles.tastyRecipesTitle}>Tasty Recipes</strong>
          <div className={styles.tastyRecipesPosts}>
            {tastyRecipes.map((othersRecipe) => {
              return <IngredientsCards othersRecipe={othersRecipe} />;
            })}
          </div>
          <img src={adsImage} alt="" className={styles.adsImage} />
        </div>
      </div>
      <div className={styles.paginationSection}>
        <Pagination />
      </div>
      <div className={styles.newsletterSection}>
        <Newsletter />
      </div>
      <div className={styles.footerSection}>
        <Footer />
      </div>
    </div>
  );
}
