import { useParams } from "react-router";
import { Divider } from "../../components/divider";
import { Footer } from "../../components/footer";
import { Navigation } from "../../components/navigation";
import { Newsletter } from "../../components/newsletter";
import styles from "./styles.module.scss";
import { CardOtherRecipes } from "../../components/card-other-recipes";
import * as motion from "motion/react-client";
import { useQuery } from "@tanstack/react-query";
import { fetchCategories } from "../../services/fetch-categories";
import { CategoriesProps, RecipeProps } from "../../types";
import { fetchRecipes } from "../../services/fetch-recipes";
import { Loading } from "../../components/loading";
import { useState } from "react";
import { Pagination } from "../../components/pagination";

const itemsPerPage = 12;

export function CategoriesRecipes() {
  const { data: categories } = useQuery<CategoriesProps[]>({
    queryKey: ["categories"],
    queryFn: fetchCategories,
  });
  const { data: recipes, isLoading: isLoadingRecipes } = useQuery<
    RecipeProps[]
  >({
    queryKey: ["recipes"],
    queryFn: fetchRecipes,
  });

  const { categoryId } = useParams();
  const category = categories?.find(
    (category) => category.categoryId === categoryId
  );
  const filteredRecipes = recipes?.filter(
    (recipe) => recipe.categoryId === categoryId
  );

  const [currentPage, setCurrentPage] = useState(1);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentRecipes = filteredRecipes?.slice(startIndex, endIndex);
  const totalPages = Math.ceil((filteredRecipes?.length || 0) / itemsPerPage);

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
          {category?.categoryName} Recipes
        </motion.h1>
        {isLoadingRecipes ? (
          <Loading />
        ) : (
          <>
            <div className={styles.recipesContainer}>
              {currentRecipes?.map((recipe) => {
                return <CardOtherRecipes moreRecipe={recipe} key={recipe.id} />;
              })}
            </div>
            {totalPages > 1 && (
              <div className={styles.pagination}>
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={setCurrentPage}
                />
              </div>
            )}
          </>
        )}
        <div className={styles.newsletterSection}>
          <Newsletter />
        </div>
        <Footer />
      </div>
    </div>
  );
}
