import { useState } from "react";
import { CardOtherRecipes } from "../../components/card-other-recipes";
import { Divider } from "../../components/divider";
import { Footer } from "../../components/footer";
import { Navigation } from "../../components/navigation";
import { Newsletter } from "../../components/newsletter";
import { recipes } from "../../utils/recipes";
import styles from "./styles.module.scss";
import { Pagination } from "../../components/pagination";

const itemsPerPage = 12;

export function Recipes() {
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const currentRecipes = recipes.slice(startIndex, endIndex);

  const totalPages = Math.ceil(recipes.length / itemsPerPage);

  return (
    <div className={styles.container}>
      <Navigation />
      <Divider />
      <div className={styles.main}>
        <h1 className={styles.title}>Recipes Lists</h1>
        <div className={styles.recipesContainer}>
          {currentRecipes.map((recipe) => {
            return <CardOtherRecipes moreRecipe={recipe} key={recipe.id} />;
          })}
        </div>
        <div className={styles.pagination}>
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </div>
        <div className={styles.newsletterSection}>
          <Newsletter />
        </div>
        <Footer />
      </div>
    </div>
  );
}
