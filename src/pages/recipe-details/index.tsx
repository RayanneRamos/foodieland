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
import { PrepareBoard } from "../../components/prepare-board";
import adsImage from "../../assets/recipes/image-06.png";
import { DirectionsTask } from "../../components/directions-task";
import directionImage from "../../assets/direction-image.png";
import { Newsletter } from "../../components/newsletter";
import { CardOtherRecipes } from "../../components/cardOtherRecipes";
import { likeRecipes } from "../../utils/like-recipes";
import { Footer } from "../../components/footer";
import { otherRecipe } from "../../utils/other-recipe";

export function RecipeDetails() {
  return (
    <div className={styles.container}>
      <Navigation />
      <Divider />
      <div className={styles.main}>
        <div className={styles.headerContainer}>
          <div className={styles.headerContent}>
            <h1 className={styles.headerTitle}>Health Japanese Fried Rice</h1>
            <div className={styles.headerInfo}>
              <Avatar />
              <VerticalDivider />
              <RecipeInfo title="prep time" subtitle="15" />
              <VerticalDivider />
              <RecipeInfo title="cook time" subtitle="15" />
              <VerticalDivider />
              <Label icon="ForkKnife" name="Chicken" />
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
              src={previewImage}
              alt="Delicious Meal"
              className={styles.mealImage}
            />
            <button className={styles.playButton}>
              <div className={styles.playIcon}>
                <Play size={32} weight="fill" color="#181945" />
              </div>
            </button>
          </div>
          <NutritionTable />
        </div>
        <p className={styles.recipeDescription}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <div className={styles.ingredientsContainer}>
          <div className={styles.ingredientsContent}>
            <div className={styles.ingredientsComponent}>
              <h3 className={styles.titleIngredients}>Ingredients</h3>
              <TaskBoard />
              <PrepareBoard />
            </div>
            <div className={styles.ingredientsOtherRecipes}>
              <h3 className={styles.titleOtherRecipes}>Other Recipe</h3>
              {otherRecipe.map((othersRecipe) => {
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
            <h3 className={styles.directionsTitle}>Directions</h3>
            <DirectionsTask task="1. Lorem ipsum dolor sit amet " />
            <p className={styles.directionDescriptionOne}>
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
              aut fugit, sed quia consequuntur magni dolores eos qui ratione
              voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
              ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia
              non numquam eius modi tempora incidunt ut labore et dolore magnam
              aliquam quaerat voluptatem.
            </p>
            <img
              src={directionImage}
              alt=""
              className={styles.directionImage}
            />
            <p className={styles.directionDescriptionTwo}>
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
              aut fugit, sed quia consequuntur magni dolores eos qui ratione
              voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
              ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia
              non numquam eius modi tempora incidunt ut labore et dolore magnam
              aliquam quaerat voluptatem.
            </p>
            <div className={styles.horizontalLine} />
            <DirectionsTask task="2. Lorem ipsum dolor sit amet " />
            <p className={styles.directionDescriptionThree}>
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
              aut fugit, sed quia consequuntur magni dolores eos qui ratione
              voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
              ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia
              non numquam eius modi tempora incidunt ut labore et dolore magnam
              aliquam quaerat voluptatem.
            </p>
            <div className={styles.horizontalLine} />
            <DirectionsTask task="3. Lorem ipsum dolor sit amet " />
            <p className={styles.directionDescriptionFour}>
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
              aut fugit, sed quia consequuntur magni dolores eos qui ratione
              voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
              ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia
              non numquam eius modi tempora incidunt ut labore et dolore magnam
              aliquam quaerat voluptatem.
            </p>
            <div className={styles.horizontalLine} />
          </div>
        </div>
        <div className={styles.newsletterContainer}>
          <Newsletter />
        </div>
        <div className={styles.likeRecipesContainer}>
          <h3 className={styles.likeRecipesTitle}>
            You may like these recipe too
          </h3>
          <div className={styles.likeRecipesCard}>
            {likeRecipes.map((recipe) => {
              return <CardOtherRecipes moreRecipe={recipe} key={recipe.id} />;
            })}
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
