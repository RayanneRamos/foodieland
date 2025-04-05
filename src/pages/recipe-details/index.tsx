import { ActionButton } from "../../components/action-button";
import { Avatar } from "../../components/avatar";
import { Divider } from "../../components/divider";
import { Label } from "../../components/label";
import { Navigation } from "../../components/navigation";
import { RecipeInfo } from "../../components/recipe-info";
import { VerticalDivider } from "../../components/vertical-divider";
import styles from "./styles.module.scss";
import previewImage from "../../assets/recipes/image-12.png";
import { NutritionTable } from "../../components/nutrition-table";
import { Play } from "phosphor-react";
import { TaskBoard } from "../../components/task-board";
import { IngredientsCards } from "../../components/ingredients-cards";
import adsImage from "../../assets/recipes/image-06.png";
import { DirectionsTask } from "../../components/directions-task";
import directionImage from "../../assets/direction-image.png";
import { Newsletter } from "../../components/newsletter";
import { CardOtherRecipes } from "../../components/card-other-recipes";
import { Footer } from "../../components/footer";
import { recipes } from "../../utils/recipes";
import { useParams } from "react-router";
import * as motion from "motion/react-client";
import { useShuffleRecipes } from "../../hooks/useShuffleRecipes";

export function RecipeDetails() {
  const { id } = useParams<{ id: string }>();

  const recipe = recipes.find((searchRecipe) => searchRecipe?.id === id);
  const shuffledRecipes = useShuffleRecipes();

  if (!recipe) {
    return (
      <div>
        <h1>Recipe not found!</h1>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <Navigation />
      <Divider />
      <div className={styles.main}>
        <div className={styles.headerContainer}>
          <div className={styles.headerContent}>
            <motion.h1
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "anticipate" }}
              className={styles.headerTitle}
            >
              {recipe?.recipeName}
            </motion.h1>
            <div className={styles.headerInfo}>
              <Avatar author={recipe?.author} />
              <VerticalDivider />
              <RecipeInfo title="prep time" subtitle={recipe?.prepareTime} />
              <VerticalDivider />
              <RecipeInfo title="cook time" subtitle={recipe?.cookTime} />
              <VerticalDivider />
              <Label icon="ForkKnife" name={recipe?.recipeCategory} />
            </div>
          </div>
          <div className={styles.actionButton}>
            <ActionButton icon="Printer" name="print" />
            <ActionButton icon="Export" name="share" />
          </div>
        </div>
        <div className={styles.recipeDetailsContainer}>
          <div className={styles.imageContainer}>
            <img
              src={recipe?.recipeImage || previewImage}
              alt={recipe?.recipeName}
              className={styles.mealImage}
            />
            <button className={styles.playButton}>
              <div className={styles.playIcon}>
                <Play size={32} weight="fill" color="#181945" />
              </div>
            </button>
          </div>
          <NutritionTable nutrition={recipe?.nutritionInformation} />
        </div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className={styles.recipeDescription}
        >
          {recipe?.recipeDescription}
        </motion.p>
        <div className={styles.ingredientsContainer}>
          <div className={styles.ingredientsContent}>
            <div className={styles.ingredientsComponent}>
              <motion.h3
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "anticipate" }}
                className={styles.titleIngredients}
              >
                Ingredients
              </motion.h3>
              <TaskBoard ingredients={recipe} />
            </div>
            <div className={styles.ingredientsOtherRecipes}>
              <motion.h3
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "anticipate" }}
                className={styles.titleOtherRecipes}
              >
                Other Recipe
              </motion.h3>
              {shuffledRecipes.slice(0, 3).map((othersRecipe) => {
                return (
                  <IngredientsCards
                    othersRecipe={othersRecipe}
                    key={othersRecipe.id}
                  />
                );
              })}

              <img src={adsImage} alt="" className={styles.ads} />
            </div>
          </div>
          <div className={styles.directionsContainer}>
            <motion.h3
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "anticipate" }}
              className={styles.directionsTitle}
            >
              Directions
            </motion.h3>
            {recipe.recipeDirections.map((directionRecipe, index) => {
              return (
                <>
                  <DirectionsTask task={directionRecipe.directionTitle} />
                  <p className={styles.directionDescriptionTwo}>
                    {directionRecipe.directionDescription}
                  </p>
                  {index === 0 && (
                    <img
                      src={directionImage}
                      alt=""
                      className={styles.directionImage}
                    />
                  )}
                </>
              );
            })}
            <div className={styles.horizontalLine} />
          </div>
        </div>
        <div className={styles.newsletterContainer}>
          <Newsletter />
        </div>
        <div className={styles.likeRecipesContainer}>
          <motion.h3
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "anticipate" }}
            className={styles.likeRecipesTitle}
          >
            You may like these recipe too
          </motion.h3>
          <div className={styles.likeRecipesCard}>
            {shuffledRecipes.slice(0, 4).map((recipe) => {
              return <CardOtherRecipes moreRecipe={recipe} key={recipe.id} />;
            })}
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
