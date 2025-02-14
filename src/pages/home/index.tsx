import { Divider } from "../../components/divider";
import { Navigation } from "../../components/navigation";
import styles from "./styles.module.scss";
import bannerImage from "../../assets/banner.png";
import { Tag } from "../../components/tag";
import { RecipeFood } from "../../components/recipe-food";
import { Avatar } from "../../components/avatar";
import { Button } from "../../components/button";
import { Category } from "../../components/category";
import { categories } from "../../utils/categories";
import { CardRecipes } from "../../components/card-recipes";
import { cardRecipes } from "../../utils/card-recipes";
import adsImage from "../../assets/recipes/image-06.png";
import chefImage from "../../assets/chef.png";
import instagramPostOne from "../../assets/posts/post-01.png";
import instagramPostTwo from "../../assets/posts/post-02.png";
import instagramPostThree from "../../assets/posts/post-03.png";
import instagramPostFour from "../../assets/posts/post-04.png";
import { InstagramLogo } from "phosphor-react";
import { CardOtherRecipes } from "../../components/card-other-recipes";
import { moreRecipes } from "../../utils/more-recipes";
import { Newsletter } from "../../components/newsletter";
import { Footer } from "../../components/footer";
import { useNavigate } from "react-router";

export function Home() {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <Navigation />
      <Divider />
      <div className={styles.headerContainer}>
        <div className={styles.backgroundLeft} />
        <div className={styles.headerContent}>
          <div className={styles.headerInfo}>
            <Tag />
            <h1 className={styles.title}>Spicy delicious chicken wings</h1>
            <p className={styles.subtitle}>
              Indulge in the bold flavors of Spicy Delicious Chicken
              Wings—crispy on the outside, juicy on the inside, and coated in a
              fiery, mouthwatering sauce.{" "}
            </p>
            <div className={styles.tagContainer}>
              <RecipeFood icon="Clock" name="30 Minutes" />
              <RecipeFood icon="ForkKnife" name="Chicken" />
            </div>
            <div className={styles.headerFooter}>
              <Avatar />
              <Button
                icon="PlayCircle"
                name="View Recipes"
                onClick={() => navigate("/recipes")}
              />
            </div>
          </div>
          <img src={bannerImage} alt="banner" />
        </div>

        <div className={styles.backgroundRight} />
      </div>
      <main>
        <div className={styles.categoriesContainer}>
          <div className={styles.categoriesHeader}>
            <strong className={styles.categoriesTitle}>Categories</strong>
            <button
              className={styles.categoriesButton}
              onClick={() => navigate("/categories")}
            >
              <span className={styles.buttonText}>View All Categories</span>
            </button>
          </div>
          <div className={styles.categoriesContent}>
            {categories.slice(0, 6).map((category) => {
              return (
                <Category
                  image={category.image}
                  name={category.name}
                  key={category.id}
                  onClick={() => navigate(`/categories/${category.id}`)}
                />
              );
            })}
          </div>
        </div>
        <div className={styles.recipesContainer}>
          <div className={styles.recipesHeader}>
            <h3 className={styles.recipesTitle}>Simple and tasty recipes</h3>
            <span className={styles.recipesSubtitle}>
              Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad
              minim{" "}
            </span>
          </div>
          <div className={styles.cardContent}>
            {cardRecipes.map((recipe, index) => (
              <>
                <CardRecipes key={recipe.id} recipe={recipe} />
                {index === 4 && <img src={adsImage} alt="ads" />}
              </>
            ))}
          </div>
        </div>
        <div className={styles.chefContainer}>
          <div className={styles.chefContent}>
            <strong className={styles.chefTitle}>
              Everyone can be a chef in their own kitchen
            </strong>
            <span className={styles.chefSubtitle}>
              Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad
              minim{" "}
            </span>
            <button
              className={styles.chefButton}
              onClick={() => navigate("/about-us")}
            >
              Learn More
            </button>
          </div>
          <img src={chefImage} alt="chef" />
        </div>
        <div className={styles.socialContainer}>
          <div className={styles.socialContent}>
            <strong className={styles.socialTitle}>
              Check out @foodieland on Instagram
            </strong>
            <span className={styles.socialSubtitle}>
              Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad
              minim{" "}
            </span>
            <div className={styles.socialPosts}>
              <img src={instagramPostOne} alt="post-01" />
              <img src={instagramPostTwo} alt="post-02" />
              <img src={instagramPostThree} alt="post-03" />
              <img src={instagramPostFour} alt="post-04" />
            </div>
            <button className={styles.socialButton}>
              <span className={styles.buttonText}>Visit Our Instagram</span>
              <InstagramLogo size={24} weight="fill" color="#fff" />
            </button>
          </div>
        </div>
        <div className={styles.moreRecipesContainer}>
          <div className={styles.moreRecipesHeader}>
            <strong className={styles.moreRecipesHeaderTitle}>
              Try this delicious recipe to make your day
            </strong>
            <span className={styles.moreRecipesHeaderSubtitle}>
              Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad
              minim{" "}
            </span>
          </div>
          <div className={styles.moreRecipeContent}>
            {moreRecipes.map((moreRecipe) => (
              <CardOtherRecipes key={moreRecipe.id} moreRecipe={moreRecipe} />
            ))}
          </div>
        </div>
        <div className={styles.newsletterContainer}>
          <Newsletter />
        </div>
        <div className={styles.footerContainer}>
          <Footer />
        </div>
      </main>
    </div>
  );
}
