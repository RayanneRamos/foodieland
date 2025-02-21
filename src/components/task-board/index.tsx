import { RecipeProps } from "../../types";
import { Task } from "../task";
import styles from "./styles.module.scss";

interface TaskBoardProps {
  ingredients: RecipeProps;
}

export function TaskBoard({ ingredients }: TaskBoardProps) {
  return (
    <div className={styles.container}>
      {ingredients?.recipeIngredients?.map((ingredientRecipe) => {
        return (
          <>
            <strong className={styles.title}>
              {ingredientRecipe.recipeSteps?.name}
            </strong>
            <div className={styles.taskContainer}>
              {ingredientRecipe?.recipeSteps?.steps?.map((recipeStep) => {
                return (
                  <>
                    <Task ingredients={recipeStep} />
                    <div className={styles.line} />
                  </>
                );
              })}
            </div>
          </>
        );
      })}
    </div>
  );
}
