import { useState } from "react";
import { CardOtherRecipes } from "../../components/card-other-recipes";
import { Divider } from "../../components/divider";
import { Footer } from "../../components/footer";
import { Navigation } from "../../components/navigation";
import { Newsletter } from "../../components/newsletter";
import { recipes } from "../../utils/recipes";
import styles from "./styles.module.scss";
import { Pagination } from "../../components/pagination";
import * as motion from "motion/react-client";
import { Title } from "../../components/title";

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
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "anticipate" }}
          className={styles.title}
        >
          <Title>Recipes Lists</Title>
        </motion.h1>
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
