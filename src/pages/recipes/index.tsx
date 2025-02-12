import { CardOtherRecipes } from "../../components/card-other-recipes";
import { Divider } from "../../components/divider";
import { Navigation } from "../../components/navigation";
import { likeRecipes } from "../../utils/like-recipes";
import styles from "./styles.module.scss";

export function Recipes() {
  return (
    <div className={styles.container}>
      <Navigation />
      <Divider />
      <div className={styles.main}>
        <h1 className={styles.title}>Recipes Lists</h1>
        <div className={styles.recipesContainer}>
          {likeRecipes.map((recipe) => {
            return <CardOtherRecipes moreRecipe={recipe} key={recipe.id} />;
          })}
          {likeRecipes.map((recipe) => {
            return <CardOtherRecipes moreRecipe={recipe} key={recipe.id} />;
          })}
          {likeRecipes.map((recipe) => {
            return <CardOtherRecipes moreRecipe={recipe} key={recipe.id} />;
          })}
          {likeRecipes.map((recipe) => {
            return <CardOtherRecipes moreRecipe={recipe} key={recipe.id} />;
          })}
        </div>
      </div>
    </div>
  );
}
