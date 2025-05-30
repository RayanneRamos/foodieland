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
import adsImage from "../../assets/ads.png";
import chefImage from "../../assets/chef.png";
import instagramPostOne from "../../assets/posts/post-01.png";
import instagramPostTwo from "../../assets/posts/post-02.png";
import instagramPostThree from "../../assets/posts/post-03.png";
import instagramPostFour from "../../assets/posts/post-04.png";
import { InstagramLogo } from "phosphor-react";
import { CardOtherRecipes } from "../../components/card-other-recipes";
import { Newsletter } from "../../components/newsletter";
import { Footer } from "../../components/footer";
import { useNavigate } from "react-router";
import * as motion from "motion/react-client";
import { useShuffleRecipes } from "../../hooks/useShuffleRecipes";

export function Home() {
  const navigate = useNavigate();
  const shuffledRecipes = useShuffleRecipes();

  return (
    <div className={styles.container}>
      <Navigation />
      <Divider />
      <div className={styles.headerContainer}>
        <div className={styles.backgroundLeft} />
        <div className={styles.headerContent}>
          <div className={styles.headerInfo}>
            <Tag />
            <motion.h1
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "anticipate" }}
              className={styles.title}
            >
              Spicy delicious chicken wings
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className={styles.subtitle}
            >
              Indulge in the bold flavors of Spicy Delicious Chicken
              Wings—crispy on the outside, juicy on the inside, and coated in a
              fiery, mouthwatering sauce.{" "}
            </motion.p>
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
            <motion.strong
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "anticipate" }}
              className={styles.categoriesTitle}
            >
              Categories
            </motion.strong>
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
            <motion.h3
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "anticipate" }}
              className={styles.recipesTitle}
            >
              Simple and tasty recipes
            </motion.h3>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className={styles.recipesSubtitle}
            >
              Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad
              minim{" "}
            </motion.span>
          </div>
          <div className={styles.cardContent}>
            {shuffledRecipes.slice(0, 8).map((recipe, index) => {
              return (
                <>
                  <CardRecipes key={recipe.id} recipe={recipe} />
                  {index === 4 && <img src={adsImage} alt="ads" />}
                </>
              );
            })}
          </div>
        </div>
        <div className={styles.chefContainer}>
          <div className={styles.chefContent}>
            <motion.strong
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "anticipate" }}
              className={styles.chefTitle}
            >
              Everyone can be a chef in their own kitchen
            </motion.strong>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className={styles.chefSubtitle}
            >
              Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad
              minim{" "}
            </motion.span>
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
            <motion.strong
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "anticipate" }}
              className={styles.socialTitle}
            >
              Check out @foodieland on Instagram
            </motion.strong>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className={styles.socialSubtitle}
            >
              Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad
              minim{" "}
            </motion.span>
            <div className={styles.socialPosts}>
              <motion.img
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                src={instagramPostOne}
                alt="post-01"
              />
              <motion.img
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                src={instagramPostTwo}
                alt="post-02"
              />
              <motion.img
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                src={instagramPostThree}
                alt="post-03"
              />
              <motion.img
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                src={instagramPostFour}
                alt="post-04"
              />
            </div>
            <button className={styles.socialButton}>
              <span className={styles.buttonText}>Visit Our Instagram</span>
              <InstagramLogo size={24} weight="fill" color="#fff" />
            </button>
          </div>
        </div>
        <div className={styles.moreRecipesContainer}>
          <div className={styles.moreRecipesHeader}>
            <motion.strong
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "anticipate" }}
              className={styles.moreRecipesHeaderTitle}
            >
              Try this delicious recipe to make your day
            </motion.strong>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className={styles.moreRecipesHeaderSubtitle}
            >
              Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad
              minim{" "}
            </motion.span>
          </div>
          <div className={styles.moreRecipeContent}>
            {shuffledRecipes.slice(0, 8).map((moreRecipe) => {
              return (
                <CardOtherRecipes key={moreRecipe.id} moreRecipe={moreRecipe} />
              );
            })}
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
