import { RecipeProps } from "../../types";
import { Task } from "../task";
import styles from "./styles.module.scss";
import * as motion from "motion/react-client";

interface TaskBoardProps {
  ingredients: RecipeProps;
}

export function TaskBoard({ ingredients }: TaskBoardProps) {
  return (
    <div className={styles.container}>
      {ingredients?.recipeIngredients?.map((ingredientRecipe) => {
        return (
          <>
            <motion.strong
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "anticipate" }}
              className={styles.title}
            >
              {ingredientRecipe.recipeSteps?.name}
            </motion.strong>
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
