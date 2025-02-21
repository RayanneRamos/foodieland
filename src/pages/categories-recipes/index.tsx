import { useParams } from "react-router";
import { Divider } from "../../components/divider";
import { Footer } from "../../components/footer";
import { Navigation } from "../../components/navigation";
import { Newsletter } from "../../components/newsletter";
import styles from "./styles.module.scss";
import { categories } from "../../utils/categories";
import { recipes } from "../../utils/recipes";
import { CardOtherRecipes } from "../../components/card-other-recipes";

export function CategoriesRecipes() {
  const { categoryId } = useParams();
  const category = categories.find((category) => category.id === categoryId);
  const filteredRecipes = recipes.filter(
    (recipe) => recipe.categoryId === categoryId
  );

  return (
    <div className={styles.container}>
      <Navigation />
      <Divider />
      <div className={styles.main}>
        <h1 className={styles.title}>{category?.name} Recipes</h1>
        <div className={styles.recipesContainer}>
          {filteredRecipes.map((recipe) => {
            return <CardOtherRecipes moreRecipe={recipe} key={recipe.id} />;
          })}
        </div>
        <div className={styles.newsletterSection}>
          <Newsletter />
        </div>
        <Footer />
      </div>
    </div>
  );
}
