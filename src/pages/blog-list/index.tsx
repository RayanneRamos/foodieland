import { CardBlogPosts } from "../../components/card-blog-posts";
import { Divider } from "../../components/divider";
import { IngredientsCards } from "../../components/ingredients-cards";
import { Navigation } from "../../components/navigation";
import adsImage from "../../assets/recipes/image-06.png";
import styles from "./styles.module.scss";
import { Pagination } from "../../components/pagination";
import { Newsletter } from "../../components/newsletter";
import { Footer } from "../../components/footer";
import { useState } from "react";
import { recipes } from "../../utils/recipes";
import { blog } from "../../utils/blog.";

const itemsPerPage = 6;

export function BlogList() {
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const currentPosts = blog.slice(startIndex, endIndex);

  const totalPages = Math.ceil(recipes.length / itemsPerPage);

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
          {currentPosts.slice(0, 6).map((blog) => {
            return <CardBlogPosts blog={blog} key={blog.id} />;
          })}
        </div>
        <div className={styles.tastyRecipes}>
          <strong className={styles.tastyRecipesTitle}>Tasty Recipes</strong>
          <div className={styles.tastyRecipesPosts}>
            {recipes.slice(0, 3).map((othersRecipe) => {
              return (
                <IngredientsCards
                  othersRecipe={othersRecipe}
                  key={othersRecipe.id}
                />
              );
            })}
          </div>
          <img src={adsImage} alt="" className={styles.adsImage} />
        </div>
      </div>
      <div className={styles.paginationSection}>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
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
